import React from 'react';
import Loader from '../../img/loader.gif';

const style = {
    simpleLoader: {
        width: '200px',
        alignSelf: 'center',
        margin: '100px 0 0 0',
        animation: 'fadeIn .4s ease'
    }
}

export const SimpleLoader = () => {
    return (
        <img src={Loader} alt='Loading...' style={style.simpleLoader} />
    )
}