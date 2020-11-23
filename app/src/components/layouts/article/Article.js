import React from 'react';
import {
    useParams
  } from "react-router-dom";

const Article = () => {

    let { slug } = useParams();

    return (
        <div>
            <h3>Requested topic ID: {slug}</h3>
            <p>monry is here as well</p>
        </div>
    );
}

export default Article;