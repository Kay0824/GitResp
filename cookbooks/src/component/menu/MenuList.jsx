import React from 'react';
import propTypes from 'prop-types'

import MenuWrap from './StyledMenuList'

const MenuList = (props) => {
    
    const {curCate,cate} = props
    const handleAsideClick = props.handleAsideClick
   // const type = props.type
    //console.log(cate[curCate])

    return (
        <MenuWrap>
            <aside>
                <ul>
                    {
                   cate && Object.keys(cate)
                        .map(value => {
                            return(
                                <li
                                    className={curCate === value ? 'active' : ''}
                                    key = {value}
                                    onClick = {handleAsideClick(value)}
                                >
                                    <span>{value}</span>
                                </li>
                            )
                        })
                    }         
                </ul>r
            </aside> 
            <section>
                <ul>
                    {
                        cate && cate[curCate].map(value => ( 
                            <li key={value}>{value}</li>   
                        ))
                    }
                </ul>
            </section>
        </MenuWrap>
    );
}

MenuList.propTypes = {
    cate : propTypes.object,
    curCate : propTypes.string,
    handleAsideClick : propTypes.func,
  
}

export default MenuList;