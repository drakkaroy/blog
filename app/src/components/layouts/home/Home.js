import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
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