import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor(){
        super()
        this.state = {
            unFilteredAnimals: [{name: 'Hana', breed: 'Austrailian Shepherd', age: 5 }, {name: 'Mins', breed: 'cat', age: 11}, {name: 'atlas', breed: 'labradoodle', age: 4}],
            userInput: '',
            filteredAnimals: []
        }

    }

    handleChange(val){
        this.setState({userInput: val})

    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">UnFilteredAnimals</span>
                <input className="inputLine" onChange={(e)=>this.updateValue(e.target.value)}/>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterObjectRB">filteredAnimals</span>

            </div>
            

        )

    }

}

