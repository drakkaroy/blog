import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Thumbnail from '../../thumbnail/Thumbnail';

const Home = () => {


    const [articles, setArticles] = useState([]);

    const fetchArticles = () => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                setArticles(res.data);
            });
    }

    useEffect(() => {
        fetchArticles();
    }, []);

    const checkData = () => {
        console.log(articles);
    };

    const list = (
        <ul>
            {articles.map((post) =>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    );


    return (
        <div>
            <Thumbnail post={articles} />
            <button onClick={checkData}>Check data</button>
            {/* {list} */}
            <ul>
                <li><Link to="/article/post-uno">post uno</Link></li>
                <li><Link to="/article/post-dos">post dos</Link></li>
                <li><Link to="/article/post-tres">post tres</Link></li>
                <li><Link to="/article/post-cuatro">post cuatro</Link></li>
            </ul>
        </div>
    )
}

export default Home;