import React, { Component } from 'react'
import Botao from './components/Botao'
import './styles/estiloBiscoito.css'

import biscoito from './assets/biscoito.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: ''
    }
    this.frases =
      [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }

  quebrarBiscoito(){
    alert('Clicou!')
  }

  render() {
    return (
      <div className='container'>
        <img src={biscoito} alt="biscoito" className='img'/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebrarBiscoito} />
      </div>
    )
  }
}

export default App