import React, { useState } from 'react';

function App(){

  const [tarefas, setTarefas] = useState(['Pagar a conta de luz', 'testando'])
  const [input, setInput] = useState('')
  

  function addTarefa(){
      setTarefas([...tarefas, input])
      setInput('')
  }

  return(
    <div>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
          ))}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={addTarefa}>Adicionar Tarefa</button>
    </div>
  )
}

export default App