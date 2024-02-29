import React, { useState, useEffect } from 'react';

function App(){

  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState('')


  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas')
    console.log(tarefasStorage)
    setTarefas(JSON.parse(tarefasStorage))
  },[])

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  },[tarefas])


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