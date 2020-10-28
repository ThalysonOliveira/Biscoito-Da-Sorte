import React, {Component} from 'react'

class Botao extends Component{
    render(){
        return(
            <div>
                <button>{this.props.nome}</button>
                <h3 className='textoFrase'>Frase aleatoria..</h3>
            </div>
        )
    }
}

export default Botao