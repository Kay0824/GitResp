import styled from 'styled-components'

const ListWrap = styled.li`

    display : flex; 
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #F4F4F4;
    img{
        width: 130px;
        margin-right: 15px;
    }
    div:last-child{
        h1{
            height: 40px;
            font-size: 16px;
            line-height: 30px;
        }
        h2{
            font-weight: normal;
        }
        h3{
            font-size: 12px;
            font-weight: normal;
            line-height: 25px;
        }
    }


`

export {
    ListWrap
}