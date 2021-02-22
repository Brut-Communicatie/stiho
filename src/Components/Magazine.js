import React from 'react';
import Iframe from 'react-iframe';
import './Magazine.css';

const Magazine = (props) => {
    const edition = props.edition;
    const url = `https://magazine.stiho.nl/${edition}/cover/`;
    return (
    <>
    <div className="frame">
        <Iframe url={url}
            width="100%"
            height="1080px"
            id="myId"
            className="iframe"
            display="initial"
            position="relative"
        />
    </div>
    </>
    )
};

export default Magazine;