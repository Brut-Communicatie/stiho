import React from 'react'
import Iframe from 'react-iframe'

const Magazine = () => {
    return (
    <Iframe url="https://magazine.stiho.nl/nr2-2020/cover/"
        width="100%"
        height="1080px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    )
};

export default Magazine;