import React from 'react';
import './form.css';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currDE: '',
            currFuel: '',
            currOrder: '',
            normDE: '',
            normOrder: '',
            regionId: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let currDE = this.state.currDE, currFuel = this.state.currFuel, currOrder = this.state.currOrder;
        let normDE = this.state.normDE, normOrder = this.state.normOrder, regionId = this.state.regionId;

        if (!(currDE) || !(currFuel) || !(currOrder) || !(normDE) || !(normOrder) || !(regionId) ) {
          alert("Please fill all the fields");
        }
    }
    render() {
        return (
            <form className="Data-form" onSubmit={this.mySubmitHandler}>
                <span>Current DE Availability Number </span>
                <input type="number" name="currDE" id="currDE" min="0" onChange={this.myChangeHandler} value={this.state.currDE}/>
                <br /><br />  
                <span>Current Fuel Price Number </span>
                <input type="number" name="currFuel" id="currFuel" min="0" onChange={this.myChangeHandler} value={this.state.currFuel}/>
                <br /><br />  
                <span>Current Order Demand Number </span>
                <input type="number" name="currOrder" id="currOrder" min="0" onChange={this.myChangeHandler} value={this.state.currOrder}/>
                <br /><br />  
                {/* <Weather /> */}
                <span>Normal DE Availability Number </span>
                <input type="number" name="normDE" id="normDE" min="0" onChange={this.myChangeHandler} value={this.state.normDE}/>
                <br /><br />  
                <span>Normal Order Demand Number </span>
                <input type="number" name="normOrder" id="normOrder" min="0" onChange={this.myChangeHandler} value={this.state.normOrder}/>
                <br /><br />  
                <span>Region Id Number </span>
                <input type="number" name="regionId" id="regionId" min="1" onChange={this.myChangeHandler} value={this.state.regionId}/>
                <br /><br />    
                <input type="submit" value="Submit"/>
                {/* {this.state.currDE} */}
            </form>
        )
    }
}

export default Form;