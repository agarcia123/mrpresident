import './App.css'
import React from "react";

interface Props { score: number  }

class score extends React.Component<Props> {

    constructor(props: Props) {
    super(props)
    score: 0
    }

    render() {    return (
         <>
        <div className={this.props.score && this.props.score > 10 ? "score-high" : "score-low"} 
        data-testid="score">
            Your score is: {this.props.score}
        </div>
        <div>{(this.props.score < 10 && this.props.score != 0) ? "Keep trying!" : "Great job!"}</div>
        </>
    )
    }
}

export default score