import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor(){
        super()
        this.state = {
            unFilteredAnimals: [{name: 'Hana', species: 'dog'}, {name: 'Mins', species: 'cat'}, {name: 'atlas', species: 'dog'}, {name: 'Archie', species: 'cat'}],
            userInput: '',
            filteredAnimals: []
        }

    }

    handleChange(val){
        this.setState({userInput: val})

    }

    filterAnimals(prop){

    let unFilteredAnimals = this.state.unFilteredAnimals;   
    let filterArray = [];
  
    for(let i =0; i <unFilteredAnimals.length; i++){
        for(let key in unFilteredAnimals){
            if(unFilteredAnimals[i][key] === prop){
                filterArray.push(unFilteredAnimals[i])
               
            }

        }
       
        }
    
        this.setState({filteredAnimals: filterArray})
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredAnimals, null, 10)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={(e)=>this.filterAnimals(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredAnimals, null, 10)}</span>

            </div>
            

        )

    }

}

