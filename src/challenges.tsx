import './App.css' 
import React from "react";
import Score from './score';


class challenges extends React.Component<Props, { radioSelected: boolean[], score: number }> {
  constructor(props: Props) {
    super(props)
    this.state = { radioSelected: [false,false,false], 
      score: 0 }
  }
   
  
  render() {

    const randomFactor = Math.floor(Math.random() * 3);

    const issues: string[][] = [["what is the meaning of life?", "how to achieve world peace?"],
     ["what is the airspeed of a laden swallow?", "what is the capital of Assyria?"]];

    const options = {
        questions:[
            {"question": "Black lives matter is protesting in DC, what would you do?",
                "options": [
                  {"option": "Tell them I am with you, it does not matter if you have to loot some businesses to be heard",
                    "score": 10
                  },
                  {"option": "Tell them, guys things are not that bad just go home and let's foget about it",
                    "score": 5
                  },
                  {"option": "Get the police out and arrest anybody that is causing problems and breaking stuff and tell them that you are willing to hear their grivences but not in this circumstance",
                    "score": 1
                  }
                ]
            },
            {"question": "The stock market is crashing, what would you do?",
                "options": [
                  {"option": "Lower the interest rates", "score": 10}, 
                  {"option": "Print more money", "score": 5}, 
                  {"option": "Panic", "score": 1}
                ]
            },
            {"question": "Health care is too expensive, what would you do?",
                "options": [
                  {"option": "Give universal health care", "score": 10},
                  {"option": "Make health care more affordable by regulating the prices", "score": 5},
                  {"option": "Nothing, the free market will fix it", "score": 1}
                ]
            },
            {"question": "The environment is in danger, what would you do?", 
             "options": [
              {"option": "Invest in renewable energy", "score": 10}, 
              {"option": "Regulate pollution", "score": 5}, 
              {"option": "Come out and say that climate change is a hoax", "score": 1}
            ]},
            {"question": "The economy is in a recession, what would you do?", 
             "options": [
               {"option": "Invest in infrastructure", "score": 10},
               {"option": "Cut taxes", "score": 5},
               {"option": "Increase government spending", "score": 1}
             ]}
        ]
    }

    const randomIndex = Math.floor(Math.random() * options.questions.length);
    console.log(this.state.radioSelected)
    return (
      <>
        <div className="card" data-testid="challenge">
          <h3 data-testid="question-title">If you were president how would you handle this situation</h3>
          <div>
            <p data-testid="question">{options.questions[randomIndex].question}</p>
          </div>
          <form>
            {options.questions[randomIndex].options.map((issue, index) => (
              <div>        
                <div key={index} className='questions'>
                  <input type="radio" 
                         key={index} 
                         data-testid={`option-${index}-radiobutton`} 
                         name="question" 
                         aria-selected={this.state.radioSelected[index]} 
                         checked={this.state.radioSelected[index]}
                         onClick={(e) => {this.setState(
                                {radioSelected: this.state.radioSelected.map((v, i) => i === index ? true : false),
                                 score: issue.score+this.state.score + randomFactor}     
                                 )
                          }}  
                   />
                  <label style={{ color: 'pink' }} 
                  htmlFor="question"
                  data-testid={`option-${index}-label`} > {issue.option} </label>  
                </div>       
               </div>
              ))}
            <Score score={this.state.score}/>
          </form>
        </div>
        
      </>
    )
  }
}

export default challenges