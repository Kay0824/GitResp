import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import {Home} from './home/index'
import List from './list/List'

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path = '/home' >
                        <Home></Home>
                    </Route>
                    <Route path = '/list'>
                        <List></List>
                    </Route>
                    <Redirect from = '/' to = '/home'></Redirect>
                </Switch>    
            </>
           
        );
    }
}

export default App;