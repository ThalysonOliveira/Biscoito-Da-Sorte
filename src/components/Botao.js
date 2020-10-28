import React, {Component} from 'react'

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
                <h3 className='textoFrase'>{this.props.textoFrase}</h3>
            </div>
        )
    }
}

export default Botao