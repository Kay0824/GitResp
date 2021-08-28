import React, { Component } from 'react';
import CategoryUI from '../ui/CategoryUI'
class CateGory extends Component {
     state = {
        tabIndex: 0,
        type: 'category',
        
     }

    handleClick = (index) => {
        return () => {
            this.setState({
                tabIndex: index,
                type: index === 0 ? 'category' : 'material'
                
            })
         
        }
    }
    render() {
        return(
            <CategoryUI
                tabIndex = {this.state.tabIndex}
                type = {this.state.type}
                onCategoryUiClick = {this.handleClick}
            ></CategoryUI>
        )
    }
}

export default CateGory;