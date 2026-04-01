
import './App.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' 
import Challenges from './challenges';
import React from "react";

class App extends React.Component<{}, { count: number }> {
  // constructor(props: any) {
  //   super(props)
  //   this.state = { count: 0 }
  // }
  


  render() {

    const currentDate = new Date();
    return (
      <>

        <h1>Today's date</h1>
        <p data-testid="date">{`Hello future Mr President today is ${currentDate.toDateString()}`}</p>
        <p data-testid="greeting">
          {`Welcome to the Mr President challenge, you will be given 5 questions about current events and you will have to choose the best answer, good luck!`}</p>
        <Challenges/>
        <div className="card">
          {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            count is {this.state.count}
          </button> */}
        </div>
      </>
    )
  }
}

export default App
