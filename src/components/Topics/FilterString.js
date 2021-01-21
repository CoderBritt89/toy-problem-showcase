import React, {Component} from 'react';

export default class FilterString extends Component{

    constructor(){
        super()
        this.state ={
            unfilteredArray: ['Brittney', 'Justin', 'Hana', 'Josh', 'Mins', 'Archie', 'Tamara', 'Kiley', 'Blake', 'Artyom', 'Kevin', 'Sterling', 'Caroline', 'Kelsey', 'Kelsi', 'April', 'Rachel', 'Keith', 'Mickey', 'Austin'],
            userInput: '',
            filteredArray: []
        }
    }


        handleChange(val){
            this.setState({userInput: val})

        }

        filterNames(userInput){
            
        }

    render(){
        return(


            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFiltered Array</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() =>this.filterNames(this.state.userInput)}>Filter
                </button>
                <span className="resultsBox filterStringRB">filteredArray</span>


            </div>
        )

    }


}