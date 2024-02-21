import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      form:{
        nome: '',
        email: '',
        senha: '',
      }
    }

    this.dadosForm = this.dadosForm.bind(this)

  }

  dadosForm(event){
    let form = this.state.form
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  
  render(){
      return(
        <div>
            <h1>Novo usuário</h1>
              {this.state.error && <p>{this.state.error} </p> }
              <label>Nome:</label>
            <input type="text" value={this.state.nome} name='nome'
              onChange={this.dadosForm}/> <br />
              <label>E-mail:</label>
            <input type="email" value={this.state.email}  name='email'
              onChange={this.dadosForm}/> <br />
              <label>Senha:</label>
            <input type="password" value={this.state.senha}  name='senha'
              onChange={this.dadosForm}/> <br />

            <div>
            <p>{this.state.form.nome}</p>
            <p>{this.state.form.email}</p>
            <p>{this.state.form.senha}</p>
            </div>
        </div>
      )
    }
}

export default App;