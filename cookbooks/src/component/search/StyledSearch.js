import styled from 'styled-components'

const Container = styled.div`
    padding: 8px 15px;
    background-color : ${props => props.outerbg};
    > div {
        display : flex;
        height : 30px;
        border : ${(props) => props.hasborder ? '1px solid #ee742f':''};
        border-radius: 4px;
        justify-content: center;
        align-items:center;
        background-color : ${props => props.innerbg};
        img{
            width: 15px;
            height: 15px;
            margin-right: 2px;
        }
        span{
            color:#666;
        }
    }
`
export default Container;