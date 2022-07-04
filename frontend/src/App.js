import "./App.css";
import { useEffect, useState } from 'react';

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
    console.log(tarefaValor);
  }

  const mudaStatus = (value) => {
    setStatus((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
    console.log(status)
  };

  useEffect(() => {request()}, []);
  
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Lista de Tarefas</h1>
        <label htmlFor="criar-tarefa-input" className="app-container-label">
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
              <option value="Em andamento">Em andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="pendente">pendente</option>
            </select>
          </label>
          <button className="register-button">Criar</button>
        </label>
          <div>
            <p>name</p>    
            <p>dataCriacao</p>    
            <p>status</p>
          </div>
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
              <div>
                <tr key={t.name} >
                  <td>{t.name}</td>
                  <td>{t.dataCriacao}</td>
                  <td>{t.status}</td>
                  <button className="register-button">Editar</button>
                </tr>
              </div>
              ))}
            </tbody>
          </table>
      </div>      
    </div>
  );
}

export default App;
