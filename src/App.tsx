
import './App.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' 
import Challenges from './challenges';
import React from "react";

class App extends React.Component<{}, { count: number }> {
  constructor(props: any) {
    super(props)
    this.state = { count: 0 }
  }
  
  
  render() {
    const currentDate = new Date();
    return (
      <>

        <h1>Today's date</h1>
        <p>{`Hello Mr President today is ${currentDate.toDateString()}`}</p>
        <Challenges question="what is the meaning of life?"/>
        <div className="card">
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            count is {this.state.count}
          </button>
        </div>
      </>
    )
  }
}

export default App
