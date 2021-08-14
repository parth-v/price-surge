import React from 'react';
import './surge.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class Surge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regionId: '',
            orderId: '',
            err: null,
            res: null
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        this.setState({ 
            err: null
        });
        event.preventDefault();
        let orderId = this.state.orderId, regionId = this.state.regionId;

        if (!(orderId) || !(regionId) ) {
          alert("Please fill all the fields");
          return
        }
        // https://cipizchf30.execute-api.us-east-1.amazonaws.com/cors_enabled?regid=${regionId}&orderid=${orderId}
        // fetch(`https://7z23g0hzt8.execute-api.us-east-1.amazonaws.com/dev2/mytest`)
        fetch(`https://xyecjvz6y2.execute-api.us-east-1.amazonaws.com/dev2/mytest`)
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                res: result
              });
            },
            (error) => {
                this.setState({ 
                    err: error
                });
            }
        )
    }
    render() {
        return (
            <>
            <div className="Data-form">
                <label>Order Id Number </label>
                <input type="number" name="orderId" id="orderId" min="1" onChange={this.myChangeHandler} value={this.state.orderId}/>
                <label>Region Id Number </label>
                <input type="number" name="regionId" id="regionId" min="1" onChange={this.myChangeHandler} value={this.state.regionId}/>
                <Button id="buttons" variant="contained" color="primary" onClick={this.mySubmitHandler}>
                    Submit
                </Button>
            </div>

            <Box id="result" color="error.main" >
                {this.state.err ? this.state.err.message : this.state.res}
            </Box>
        </>
        )
    }
}

export default Surge;