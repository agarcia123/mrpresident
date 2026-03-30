import './App.css'
import React from "react";

interface Props { score?: number }

class score extends React.Component<Props, { selected: boolean }> {


    render() {    return (
         <>
        <div className="card" data-testid="score">
            Your score is: {this.props.score}
        </div>
        </>
    )
    }
}

export default score