import React, { Component } from 'react'
import Feed from './components/Feed'

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      List: [
        {id: 1, username: "Fernando", curtidas: 130, comentarios: 30},
        {id: 2, username: "Murilo", curtidas: 10, comentarios: 2},
        {id: 3, username: "Marcos", curtidas: 68, comentarios: 15},
        {id: 4, username: "Roberto", curtidas: 1, comentarios: 1}
      ]
    }

  }

  render(){
      return(
        <div>
          {this.state.List.map((item) =>{
            return(
              <Feed id={item.username} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
            )
          })}

        </div>
      )
    }
}

export default App;