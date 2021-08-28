import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import {NavBar,Icon } from 'antd-mobile'

import {actionCreator} from '../home/cookbook/index'
import {ListWrap} from './StyledList'
import {connect} from 'react-redux'

@withRouter
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
class List extends Component {
    handleLeft = () =>{
        let history = this.props.history
        history.goBack()
    }
     
    componentDidMount(){
        //console.log(this.state)
    }
    render() {
        return (
            <div>
                <NavBar
                    mode = 'dark'
                    icon = {<Icon type = 'left'></Icon>}
                    onLeftClick = {this.handleLeft}
                    style = {{backgroundColor: '#ee742f'}}
                >
                {this.props.location.state.title}
                </NavBar>
                <ul>
                   {
                       this.props.list && this.props.list.map((value,index) => (
                            <ListWrap key = {index}>
                                <div>
                                    <img src={value.img} alt = {value.title}/>
                                </div>
                                <div>
                                    <h1>{value.name}</h1>
                                    <h2>{value.burdens}</h2>
                                    <h3>{value.all_click}浏览 {value.favorites}收藏</h3>
                                </div>
                            </ListWrap>
                       ))
                   }
                </ul>
            </div>
        );
    }
}

export default List;