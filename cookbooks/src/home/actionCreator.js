import {CHANGESWITCH} from './actionType'

const changeSwitch = (checked) => {
    return {
        type : CHANGESWITCH ,
        checked
    }
}

export default {
    changeSwitch
}
