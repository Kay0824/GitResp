import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {HotCateWrap} from './StyledCookBook'
import{Grid} from 'antd-mobile'

import list_1 from '@a/images/hotCatList/list-1.jpg'
import list_2 from '@a/images/hotCatList/list-2.jpg'
import list_3 from '@a/images/hotCatList/list-3.jpg'
import list_4 from '@a/images/hotCatList/list-4.png'
import list_5 from '@a/images/hotCatList/list-5.jpg'
import list_6 from '@a/images/hotCatList/list-6.jpg'
import list_7 from '@a/images/hotCatList/list-7.jpg'
import list_8 from '@a/images/hotCatList/list-8.png'
import list_9 from '@a/images/hotCatList/list-9.png'
import list_11 from '@a/images/hotCatList/list-11.jpg'
import list_12 from '@a/images/hotCatList/list-12.jpg'

@withRouter
class HotCate extends Component {
  

    state = {
        hotCateList:[
            {
                'img': `${list_1}`,
                'title': '家常菜'
            },
            {
                'img': `${list_2}`,
                'title': '素菜'
            },
            {
                'img': `${list_3}`,
                'title': '粥'
            },
            {
                'img': `${list_4}`,
                'title': '汤'
            },
            {
                'img': `${list_5}`,
                'title': '川菜'
            },
            {
                'img': `${list_6}`,
                'title': '粤菜'
            },
            {
                'img': `${list_7}`,
                'title': '早餐'
            },
            {
                'img': `${list_8}`,
                'title': '凉菜'
            },
            {
                'img': `${list_9}`,
                'title': '烘培'
            },
            {
                'img': `${list_11}`,
                'title': '清淡'
            },
            {
                'img': `${list_12}`,
                'title': '饮品'
            },
            {
                'img': 'blank',
                'title': '更多...'
            }
            
        ]
    }

    handleClick = ({title}) =>{
        let history = this.props.history
        history.push('/list', {title})
    }
    render() {
        return (
            <HotCateWrap>
                <h1>热门分类</h1>
                <Grid data={this.state.hotCateList}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div className = 'grid-item' >
                            <img src={dataItem.img}  alt ={dataItem.title}/>
                            <div >
                                <span>{dataItem.title}</span>
                            </div>
                            
                        </div>
                    )}
                    onClick = {this.handleClick}
                />
            </HotCateWrap>
        );

       
    }
    
}

export default HotCate;
