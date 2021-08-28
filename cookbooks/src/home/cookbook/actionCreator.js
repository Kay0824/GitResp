import { LOADDATA } from "./actionType"

import {get} from '@u/http.js'

//同步
const loadDataSync = list => {
    return{
        type : LOADDATA,
        list
    }
}

//异步
const loadDataAsync = () => {
    return  async (dispatch) => {
        let result = await get({
            url: '/api/list'
        })

      //  console.log(result);
        
        dispatch(loadDataSync(result.data))

    }
}

export default {
    loadDataSync,
    loadDataAsync
}