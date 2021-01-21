import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }

    }

    handleChange(val){
        this.setState({userInput: val})
    }

    render(){

        return(
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <span className="resultsBox">palindrome
            </span>
            <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)} />
            <button className="confirmationButton" onClick={()=>this.isPalindrome(this.state.UserInput) }>Check</button>
            
            </div>
         

        )
    }


}