import React, { Component } from 'react'

class Feed extends Component{
    render(){
        return(
            <div id={this.props.id}>
                <h1> {this.props.username} </h1>
                <p>{this.props.curtidas > 1 ? this.props.curtidas + " curtidas" : this.props.curtidas + " curtida"}</p>
                <p>{this.props.comentarios > 1 ? this.props.comentarios+" comentários" : this.props.comentarios+" comentário"}</p>
            </div>
        )
    }
}

export default Feed;