import styled from 'styled-components'

const Container = styled.div `
    
    header {
        height : 44px;
        line-height : 44px;
        text-align: center;
        font-size: 16px;
        color:#fff;
        background-color: #ee742f;
    }
`
//解决低网速下轮播图无法撑开的问题
const SwiperWrap = styled.div`
    height : 0;
    font-size:0;
    padding-bottom : 66.666667%;
    position: relative;
    
    .slider.am-carousel{
        position: static !important;
    }

`
const HotCateWrap = styled.div`
    h1{
        height: 40px;
        padding-left: 8px;
        color: #666;
        line-height: 40px;
        font-weight: normal;
        font-size: 13px;
        background-color: #fff;
        border-bottom: 2px solid #F4F4F4;
    }
    
    .grid-item{
        
        img{
            width: 90px;
            height: 70px;
            margin-top: 15px;
            &[src='blank']{
                display: none;
            }
            
        }
        span{
            height:40px;
            line-height:40px;
        }
    }
    .am-grid-item-content{
        display: flex;
        align-items: center;
        justify-content: center; 
    }

`
const Top10Wrap = styled.div`
    h1{
        height: 40px;
        padding-left: 8px;
        color: #666;
        line-height: 40px;
        font-weight: normal;
        font-size: 13px;
        background-color: #fff;
        border-bottom: 2px solid #F4F4F4;
    } 
    ul{
        display: flex;
        flex-wrap: wrap;
        padding: 6px;
        li{
            padding: 8px;
            width: 50%;
            img{
                width:100%;
                height: 150px;
            }
            div:last-child {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                background : #fff; 
                height: 60px;
                p:first-child{
                    font-size: 18px;
                }
                p:last-child{
                    color: #666;
                }   
            }
        }

    }
`

export {
    Container,
    SwiperWrap,
    HotCateWrap,
    Top10Wrap
};