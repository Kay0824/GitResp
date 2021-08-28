import React from 'react';
import propTypes from 'prop-types'
import {Carousel } from 'antd-mobile'

import {SwiperWrap} from './StyledCookBook'

const Swiper = (props) => {
    
    // const list2 = props.list
    // console.log(list2)


    return (
        <SwiperWrap>
            <Carousel
                autoplay = {true}
                infinite          
            >
            {
                props.list && props.list.map(value => {
                    return(
                        <img key = {value.id} src = {value.img} alt = {value.name}/>
                    )
                })
            }
            </Carousel>
        </SwiperWrap>
    );
    
}

Swiper.propTypes = {
    list : propTypes.array
}

export default Swiper;