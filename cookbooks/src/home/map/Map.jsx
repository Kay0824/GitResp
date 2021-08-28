import React from 'react';
//import { Flex } from 'antd-mobile';

const Map = () => {
    
    return (
        <div style = {{
                    width: '100%',
                    height: '100%', 
                                   
                    }}>
            <header
                style ={{ 
                    height : "44px",
                    width: '100%',
                    lineHeight: "44px",
                    textAlign: "center",
                    fontSize: "16px",
                    color:"#fff",
                    backgroundColor: "#ee742f"
                }}
            >美食地图</header>
            <iframe 
                style = {{ 
                    
                    width : '100%',
                    overFlow:'hidden',
                    height: "100%"
                }}
                src = "/map.html" 
                title= 'ifrm'></iframe>
        </div>
    );
    
}

export default Map;