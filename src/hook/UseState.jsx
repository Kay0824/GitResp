import React, { useState,useEffect } from 'react'

// export default class App extends Component {
//     state = {
//         count: 0
//     }
//     handleClick = ()=>{
//         this.setState({
//             count: this.state.count+1
//         })
//     }
//     render() {
//         return (
//             <div>
//                <span>{this.state.count}</span>
//                <button onClick = {this.handleClick}>+</button>
//             </div>
//         )
//     }
// }

function UseState(){
    let [count,setCount] = useState(0)
    function handleClick(){
        setCount(count+1)
    }

//componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log('effect')
    },[])

    useEffect(() => {
        return () => {
            console.log('unmount')
        }
    }, [])
    return(
        <div>
            <span>{count}</span>
            <button onClick={handleClick}>add</button>
        </div>
    )

}

export default UseState