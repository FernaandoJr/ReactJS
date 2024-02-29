import React, { Component } from 'react'
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases=[
      'frase 1', 'frase 2', 'frase 3', 'frase 4', 'frase 5', 
      'frase 6', 'frase 7', 'frase 8', 'frase 9', 'frase 10', 
    ]
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = '"'+ this.frases[numeroAleatorio] + '"'
    this.setState(state)
    
  }

  render(){
    return(
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img'/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App