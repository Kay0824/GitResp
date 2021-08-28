import {CHANGESWITCH} from './actionType'

const defaultState = {
    checked : true
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case CHANGESWITCH :
            return{
                checked : action.checked
            }
        default : 
            return state
    }
}

export default reducer