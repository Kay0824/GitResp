import React, { Component } from 'react';
import {Switch} from 'antd-mobile'
import {connect} from 'react-redux'
import {MoreWrap} from '../ui/StyledMore'

import {actionCreator} from '@/home/'

@connect(
    state => ({
        checked : state.home.checked
    }),
    dispatch => ({
       handleChange(checked){
           dispatch(actionCreator.changeSwitch(checked))
       }
    })
)
class More extends Component {
    
    render() {
        return (
            <MoreWrap>
                <header>更多设置</header>
                <div>
                    <span>地图显示：</span>
                    <Switch
                        checked = {this.props.checked}
                        onChange = {this.props.handleChange}
                    >
                    </Switch>    
                </div>
                
            </MoreWrap>
        );
    }
    componentDidMount(){
        console.log(this.state)
    }


}

export default More;