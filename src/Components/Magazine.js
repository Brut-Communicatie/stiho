import React from 'react'
import Iframe from 'react-iframe'

const Magazine = (props) => {
    const edition = props.edition;
    const url = `https://magazine.stiho.nl/${edition}/cover/`;
    return (
    <>
        <Iframe url={url}
            width="100%"
            height="1080px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
        />
    </>
    )
};

export default Magazine;