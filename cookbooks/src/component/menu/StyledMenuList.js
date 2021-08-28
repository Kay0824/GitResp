import styled from 'styled-components'

const MenuWrap = styled.div`
    overflow: hidden;
    flex: 1;
    display: flex;
    aside{
        overflow-y: scroll;
        width: 90px;
        ul{
            li{
                height: 50px;
                text-align: center;
                line-height: 50px;
                &.active{
                    background-color: #fff;
                    color:#ee742f;
                    span{
                        display: inline-block;
                        border-bottom: 1px solid #ee742f;
                    }
                }
            }
        }
    }

    section{
        overflow-y: scroll;
        flex: 1;
        padding: 25px;
        background: #fff;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 33.33333%;
                height: 45px;
                text-align: center;
            }
        }
    }
`

export default MenuWrap;