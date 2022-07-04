import "./App.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [ tarefaBD, setTarefaBD ] = useState([]);
  const [ tarefaValor, setTarefaValor ] = useState('');
  const [ status, setStatus ] = useState({ status: 'pendente'});

  const request = async () => {
    const response = await fetch('http://localhost:5006/');
    const result = await response.json();
    setTarefaBD(result);    
  }

  const mudaValor = (valor) => {
    setTarefaValor(valor);
  }

  const mudaStatus = (value) => {
    setStatus((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const criarTarefa = () => {
      axios.post('http://localhost:5006/', {
        name: tarefaValor,
        status: status.status,
      }).then((res) => console.log(res));
      return window.location.reload();    
  }

  const deleteTarefa = (id) => {
    axios.delete(`http://localhost:5006/${id}`).then((res) => console.log(res));
    return window.location.reload();
  }

  useEffect(() => {request()}, []);
  
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Lista de Tarefas</h1>
        <label htmlFor="criar-tarefa-input" className="app-container">
            Tarefa:
            <input
              type="text"
              id="criar-tarefa-input"
              name="criar-tarefa"
              className="register-input"
              onChange={ ({ target }) => mudaValor(target.value) }
            />
          <label htmlFor="status-tarefa">
            Status:
            <select
              name="status"
              id="status-tarefa"
              onChange={ mudaStatus }
              >
              <option value="pendente">pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluída">Concluída</option>
            </select>
          </label>
          <button className="register-button" onClick={ criarTarefa }>Criar</button>
        </label>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>dataCriacao</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
            {tarefaBD.length > 0 && tarefaBD.map((t) => (
                <tr key={t.name} >
                  <td>{t.name}</td>
                  <td>{t.dataCriacao}</td>
                  <td>{t.status}</td>
                  <button className="register-button">Editar</button>
                  <button className="register-button" onClick={ deleteTarefa }>Deletar</button>
                </tr>
              ))}
            </tbody>
          </table>
      </div>      
    </div>
  );
}

export default App;
