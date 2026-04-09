
import './App.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' 
import Challenges from './challenges';
import React from "react";

class App extends React.Component<{}, { enteredName: boolean, name: string }> {
   constructor(props: any) {
     super(props)
     this.state = { enteredName: false, name: "" }
   }
  
  

  render() {
    const nameButton = () => (
      <>
      <p data-testid="name-prompt">Please enter your name to start the game</p>
        <input value={this.state.name} 
               onChange={(e) => this.setState({ name: e.target.value })} 
               placeholder="Enter name" 
               data-testid="name-input"
               key="name-input"/>
        <p></p>       
        <div>
          <button onClick={() => this.setState({ enteredName: true })}
                  data-testid="name-button">
          Enter Your Name
        </button></div>
        
      </>
    );
    const currentDate = new Date();
    
    return (
      <>
        <p data-testid="date">{`Hello future Mr President today is ${currentDate.toDateString()}`}</p>
        <p data-testid="greeting">
          {`Welcome Mr President ${this.state.name}. This is a simple challenge game of simple questions. You will be 
          given 5 questions about current events and you will have to choose the best answer.Each answer is worth some points. As you answer question you can see your 
          score. Good luck!`}</p>
        
        <div className="card">
          {this.state.enteredName === false && nameButton()}
          {this.state.enteredName === true && <Challenges/>}
        </div>
      </>
    )
  }
}

export default App
