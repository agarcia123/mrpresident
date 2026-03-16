import './App.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' 
import React from "react";

interface Props { question?: string }

class challenges extends React.Component<Props, { selected: boolean }> {
  constructor(props: Props) {
    super(props)
    this.state = { selected: false }
  }
   
  
  render() {
    const issues: string[][] = [["what is the meaning of life?", "how to achieve world peace?"],
     ["what is the airspeed of a laden swallow?", "what is the capital of Assyria?"]];

    const options = {
        questions:[
            {"question": "Black lives matter is protesting in DC, what would you do?",
                "options": ["Tell them I am with you, it does not matter if you have to loot some businesses to be heard", 
                "Tell them, guys things are not that bad just go home and let's foget about it", 
                "Get the police out and arrest anybody that is causing problems and breaking stuff and tell them that you are willing to hear their grivences but not in this circumstance"]
            },
            {"question": "pijo",
                "options": ["pija", "pijo", "piju"]
            },
            {"question": "what would you do if you were president?",
                "options": ["what is the meaning of life?", "how to achieve world peace?"]
            }
        ]
    }
    const randomIndex = Math.floor(Math.random() * options.questions.length);
    return (
      <>

    
        <div className="card">
          <h3 data-testid="title">If you were president </h3>
          <div>
            <p data-testid="question">{options.questions[randomIndex].question}</p>
          </div>
          <form>
            {options.questions[randomIndex].options.map((issue, index) => (
            <div>        
              <div key={index} className='questions'>
                <input type="radio" 
                        key={index} 
                        data-test-id={`challenge-${index}-radiobutton`} 
                        name="question" 
                        aria-selected={this.state.selected} 
                        />
                <label style={{ color: 'pink' }} htmlFor="question"> {issue} </label>
                
              </div>
              {this.props.question === issue && <p>Answer: 42</p>}
            </div>
            ))}
          </form>
        </div>
      </>
    )
  }
}

export default challenges