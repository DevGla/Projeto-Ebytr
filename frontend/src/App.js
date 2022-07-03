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
    <div>
      <h1>Lista de Tarefas</h1>
      <label htmlFor="criar-tarefa-input">
          Criar Tarefa
          <input
            type="text"
            id="criar-tarefa-input"
            name="criar-tarefa"
          />
        </label>
        {tarefaBD.length > 0 && tarefaBD.map((t) => (
          <div key={t.name}>
            <p>{t.name}</p>
            <p>{t.dataCriacao}</p>
            <p>{t.status}</p>
          </div>
          ))}
    </div>
  );
}

export default App;
