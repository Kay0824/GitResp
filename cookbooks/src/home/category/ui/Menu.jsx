import React, { Component } from 'react';
import MenuList from '@c/menu/MenuList'
import{get} from '@u/http'
import propTypes from 'prop-types'

class Menu extends Component {

    static propTypes = {
        type: propTypes.string
    }

    state = {
        cate: null,
        type : 'category',
        curCate: this.props.type === 'category' ? '热门': '肉类'
    }

    static getDerivedStateFromProps(nextProps,preState){
        if(nextProps.type === preState.type){
            return null
        }else{
            return {
                curCate : nextProps.type === 'category' ? '热门' : '肉类',
                type : nextProps.type
            }
        }
        
    }
    
    async componentDidMount(){
        let result = await get({
            url: '/api/category'
        })

        this.setState({
            cate: result.data.data
        })
        
    }

    handleAsideClick = (curCate) => {
        return () =>{
            this.setState({
                curCate: curCate
            })
        }
    }
    
    render() {
      
       // console.log(this.state.cate && this.state.cate[this.props.type])
       
        return(
            <MenuList
                cate = {this.state.cate && this.state.cate[this.props.type]}
                curCate = {this.state.curCate}
                handleAsideClick = {this.handleAsideClick}
            ></MenuList>
          
        )
        
    }
}

export default Menu;