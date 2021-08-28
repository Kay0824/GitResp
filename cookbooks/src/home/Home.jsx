import React, { Component } from 'react';
import {TabBar} from 'antd-mobile';
import {connect} from 'react-redux'

import cookbook from '@a/images/cookbook.png'
import category from '@a/images/category.jpg'
import location from '@a/images/location.jpg'
import more from '@a/images/more.png'

import {CookBook} from './cookbook/index'
import {CateGory} from './category/index'
import Map from './map/Map'
import {More} from './more/index'

@connect((state) => ({
  checked : state.home.checked
}))
class Home extends Component {
    
    state = {
        selectedTab: 'cookbook',
        hidden: false,
        fullScreen: true,
    }

    componentDidMount(){
      console.log(this.props.checked)
    }

    render() {
      const tabItems = [ 
          <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbook}) center center /  22px 22px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
            }}
            data-seed="logId"
          >
            <CookBook></CookBook>
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${category}) center center /  22px 22px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '26px',
                height: '26px',
                background: `url(${category}) center center /  26px 26px no-repeat` }}
              />
            }
            title="分类"
            key="category"
            
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
            data-seed="logId1"
          >
            <CateGory></CateGory>
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  22px 22px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '26px',
                height: '26px',
                background: `url(${location}) center center /  26px 26px no-repeat` }}
              />
            }
            title="美食地图"
            key="location"
            
            selected={this.state.selectedTab === 'location'}
            onPress={() => {
              this.setState({
                selectedTab: 'location',
              });
            }}
          >
            <Map></Map>
          </TabBar.Item>,
          <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: more }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <More></More>
          </TabBar.Item>
      ]
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
              >
               {
                 this.props.checked ? tabItems.map(v => v) 
                 : tabItems.filter((v,i) => i !== 2)
               }
              </TabBar>
            </div>
          );
    }
}

export default Home;