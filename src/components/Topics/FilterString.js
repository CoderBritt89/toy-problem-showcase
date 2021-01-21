import React, {Component} from 'react';

export default class FilterString extends Component{

    constructor(){
        super()
        this.state ={
            unfilteredArray: ['merchant a sells clothes', 'merchant b sells shoes', 'merchant c sells home', '', ''],
            userInput: '',
            filteredArray: []
        }
    }


        handleChange(val){
            this.setState({userInput: val})

        }

    render(){
        return(


            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFiltered Array</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value) }/>
                <button className="confirmationButton">
                </button>
                <span className="resultsBox filterStringRB">filteredArray</span>


            </div>
        )

    }


}