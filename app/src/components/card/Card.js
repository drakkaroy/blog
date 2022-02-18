import React from 'react';
import ClassNames from 'classnames';

const Card = (props) => {
    const { post, type } = props;

    // const thumb = (
    //     <div>
    //         {post.map((post) => (
    //             <div key={post.id}>
    //                 <h3>{post.title}</h3>
    //             </div>
    //         ))}
    //     </div>
    // );

    return (
        <div
            className={ClassNames('card', {
                'card--highlight': type === 'highlight',
            })}
        >
            <a href='#'>
                {type === 'highlight' ? (
                    <img
                        src='https://via.placeholder.com/680x380.png'
                        alt='article title'
                    />
                ) : (
                    <img
                        src='https://via.placeholder.com/320x200.png'
                        alt='article title'
                    />
                )}
            </a>
            <a href='#' className='card__content'>
                <div className='card__tag'>Coding JavaScript </div>
                <div className='card__title'>
                    How to Find the Additive Inverse of Each Number in
                    JavaScript [CodeWars Challenge Solved]
                </div>
                <div className='card__excerpt'>
                    <p>
                        In this tutorial, we’ll go over how to solve the
                        CodeWars invert values problem in JavaScript. You can
                        also see this tutorial in video…
                    </p>
                </div>
            </a>
        </div>
    );
};
export default Card;
