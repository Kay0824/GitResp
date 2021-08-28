import React from 'react'
import memoize from 'memoize-one'
import {Container} from './StyledCookBook'
import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'

import propTypes from 'prop-types'

const CookBookUI = (props) =>{  
   // console.log(props.list)
    //const swiper = memoize((list) => {(list || '').slice(0,5)})
    const swiper = memoize(list => list.slice(0,5))
    const hotCate = memoize(list => list.slice(0,10))

   // const list1 = (props.list || '').slice(0,5)
   // const list2 = (props.list || '').slice(10,20)
    
    
    // const arr = (props.list || '').slice(0,5)
    // console.log(swiper((props.list || '')))
    

    return (
        <Container>
            <header>美食大全</header>
            <Swiper list = {props.list && swiper(props.list)}></Swiper>
            <Search
                outerbg = '#F4F4F4'
                innerbg = '#fff'
                hasborder = {true}   
            ></Search>
            <HotCate></HotCate>
            <Top10 list = {props.list && hotCate(props.list)}></Top10>
        </Container>
    )
}
//

//函数式组件绑定类型检查
CookBookUI.propTypes = {
    list : propTypes.array
}

export default CookBookUI;