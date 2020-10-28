import React, {Component} from 'react'
import biscoito from './assets/biscoito.png'

class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <div>
        <img src={biscoito} alt="biscoito"/>
      >
      </div>
    )
  }
}

export default App