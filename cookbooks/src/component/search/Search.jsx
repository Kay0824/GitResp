import React, { Component } from 'react';

import search from '@a/images/search.png'
import Container from '@c/search/StyledSearch.js'

class Search extends Component {
    render() {
        return (
            <Container {...this.props}>
                <div>
                    <span><img src={search} alt='search'/></span>
                    <span>想吃什么搜这里，如川菜</span>
                </div>  
            </Container>
        );
    }
}

export default Search;