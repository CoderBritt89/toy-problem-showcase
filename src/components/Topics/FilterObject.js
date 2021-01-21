import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor(){
        super()
        this.state = {
            unFilteredAnimals: [{name: 'Hana', species: 'dog', age: 5 }, {name: 'Mins', species: 'cat', age: 11}, {name: 'atlas', species: 'dog', age: 4}],
            userInput: '',
            filteredAnimals: []
        }

    }

    handleChange(val){
        this.setState({userInput: val})

    }

    updateArray(prop){
        
    let filterArray = [];
    let origArray = this.state.unFilteredAnimals;
    

this.setState({filteredAnimals: filterArray})
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">UnFilteredAnimals</span>
                <input className="inputLine" onChange={(e)=>this.updateValue(e.target.value)}/>
                <button className="confirmationButton" onClick={(e)=>this.updateArray(e.target.value) }></button>
                <span className="resultsBox filterObjectRB">filteredAnimals</span>

            </div>
            

        )

    }

}

