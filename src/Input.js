import React   from 'react';
import { connect } from 'react-redux';

function Input(props) {
    return (
        <div>
            <input value={props.inputValue} onChange ={props.inputChanged} />
            <p>{props.inputValue}</p>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        inputChanged: (evt) =>{
            console.log(evt.target.value);
            const action = { type: 'INPUT_CHANGE', input: evt.target.value}
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Input);

