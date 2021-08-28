import React, { Component } from 'react';
import CookBookUI from '../ui/CookBookUI'
import actionCreator from '../actionCreator'

import {connect} from 'react-redux'
@connect(
    (state) =>{
       return{
            list: state.cookbook.list.data,
        }
    },
    (dispatch) =>({
        loadData() {
            dispatch(actionCreator.loadDataAsync())
        }
    })
)
class CookBook extends Component {
    
    
    render() {
        return (
            <CookBookUI
                list = {this.props.list}
            ></CookBookUI>
        );
    }

    componentDidMount(){
        
       this.props.loadData()
    }

    componentDidUpdate(){
       // console.log(this.props.list)
    }

}

export default CookBook;