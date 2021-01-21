import React, {Component} from 'react';

export default class FilterString extends Component{

    constructor(){
        super()
        this.state ={
            names: ['Brittney', 'Justin', 'Hana', 'Josh', 'Mins', 'Archie', 'Tamara', 'Kiley', 'Blake', 'Artyom', 'Kevin', 'Sterling', 'Caroline', 'Kelsey', 'Kelsi', 'April', 'Rachel', 'Keith', 'Mickey', 'Austin'],
            userInput: '',
            filteredNames: []
        }
    }


        handleChange(val){
            this.setState({userInput: val})

        }

        filterNames(prop){
                let names = this.state.names;
                let filterNames = [];

                for(let i =0; i<names.length; i++){
                    if(names[i].includes(prop)){
                        filterNames.push(names[i])
                    }
                }
                
                this.setState({filteredNames: filterNames})
        }

    render(){
        return(


            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() =>this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>


            </div>
        )

    }


}