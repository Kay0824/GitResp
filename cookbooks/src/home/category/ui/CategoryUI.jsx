import React from 'react'

import {CategoryWrap} from '../ui/StyledCateGory'

import Search from '@c/search/Search'
import Menu from './Menu'

const CategoryUI = (props) =>{
   // console.log(props)
    const {type,tabIndex,onCategoryUiClick} = props
    return (
        <CategoryWrap>
            <nav>
                <ul>
                    <li 
                        className={tabIndex === 0 ? 'active': ''} 
                        onClick = {onCategoryUiClick(0)}
                    >分类</li>
                    <li
                        className={tabIndex === 1 ? 'active': ''}
                        onClick = {onCategoryUiClick(1)}
                    >食材</li>
                    <li className={tabIndex === 0 ? 'slide' : 'slide right'}></li>
                </ul>
            </nav>
            <Search
                outerbg = '#fff'
                innerbg = '#efefef'
                hasborder = {false}    
            ></Search>
            <Menu 
                type = {type}
               
            ></Menu>
        </CategoryWrap>
    );

}

export default CategoryUI;