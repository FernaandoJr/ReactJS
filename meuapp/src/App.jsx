import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      status: false,
      nome: "Fernando"
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
    

  }

  entrar(){
    this.setState({status: true})
  }
  sair(){
    this.setState({status: false})
  }

  render(){
      return(
        <div>
          {this.state.status ?
          <div>
            <h1>Bem vindo {this.state.nome}</h1>
            <button onClick={this.sair}>Sair</button>
          </div> :
          <div>
            <h1>Bem vindo deconhecido</h1>
            <button onClick={this.entrar}>Sair</button>
          </div>
          }
        </div>
      )
    }
}

export default App;