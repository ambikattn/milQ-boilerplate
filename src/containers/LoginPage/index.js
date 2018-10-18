import { connect } from 'react-redux'
import React, {Component} from 'react'
import './style.scss';

class Login extends Component {
    
    constructor(props){
        super(props);
        }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <button>dsdsaddd</button>
                </div> 
            </div>
               )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const App = connect(
    mapStateToProps
)(Login)
export default App;