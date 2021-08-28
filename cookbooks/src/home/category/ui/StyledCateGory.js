import styled from 'styled-components'

const CategoryWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        height : 44px;
        background-color: #ee742f;
        ul{
            position: relative;
            display: flex;
            width: 130px;
            height: 30px;
            border: 1px solid #fff;
            border-radius: 15px;
            li{
                flex: 1;
                line-height: 30px;
                color: #fff;
                text-align : center;
                transition: all 150ms ease-in;
                &.active{
                    color: #ee742f;
                    z-index: 3;
                }
                &.slide{
                    left: 0;
                    position: absolute;
                    width: 65px;
                    background-color: #fff;
                    height: 28px;
                    border-radius: 15px;
                    z-index: 2;   
                }
                &.slide.right{
                    left: 65px;
                }
            }
        }
    }
    
`

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
export {
    CategoryWrap,
    MenuWrap
}