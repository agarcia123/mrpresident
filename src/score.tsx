import './App.css'
import React from "react";

interface Props { score: number, answeredQuestions: number }

class score extends React.Component<Props> {

    constructor(props: Props) {
    super(props)
    //score: 0,
    //answeredQuestions: 0
    }

    render() {    return (
         <>
         <div>
         {this.props.answeredQuestions < 6 && this.props.answeredQuestions > 0 &&
        <><div className={this.props.score && this.props.score > 10 ? "score-high" : "score-low"}
                    data-testid="score">
                    Your score is: {this.props.score}
                </div><div>{(this.props.score < 10 && this.props.score != 0) ? "Keep trying!" : "Great job!"}</div></>
        }
        {this.props.answeredQuestions === 6 && <><h1>Your final score is {this.props.score}</h1></>}
        </div>
        </>
    )
    
}
}

export default score