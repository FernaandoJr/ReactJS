import React, { Component } from 'react'
import Membro from './components/Membro'

class App extends Component{
    render(){
      return(
        <div>
          <Membro nome="Fernando"/>
        </div>
      )
    }
}

export default App;