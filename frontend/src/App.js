import "./App.css";
import { useEffect, useState } from 'react';

function App() {

  const [ tarefaBD, setTarefaBD ] = useState([]);

  const request = async () => {
    const response = await fetch('http://localhost:5006/');
    const result = await response.json();
    setTarefaBD(result);
  }

  useEffect(() => {request()}, []);
  
  return (
    <div className="app-container">
      <div className="geral">
        <h1>Lista de Tarefas</h1>
        <label htmlFor="criar-tarefa-input">
            Criar Tarefa:
            <input
              type="text"
              id="criar-tarefa-input"
              name="criar-tarefa"
              className="input-tarefa"
            />
          </label>
          <table className="table">
            <thead>
              <tr>
                <th>name</th>
                <th>dataCriacao</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
            {tarefaBD.length > 0 && tarefaBD.map((t) => (
              <tr key={t.name}>
                <td>{t.name}</td>
                <td>{t.dataCriacao}</td>
                <td>{t.status}</td>
              </tr>
              ))}
            </tbody>
          </table>
      </div>      
    </div>
  );
}

export default App;
