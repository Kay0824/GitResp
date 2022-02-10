import {combineReducers} from 'redux'

import {reducer as cookbook } from '../home/cookbook'

import {reducer as home} from '../home'

const reducer = combineReducers({
    cookbook,
    home
})

export default reducer;