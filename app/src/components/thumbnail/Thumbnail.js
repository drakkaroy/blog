import React from 'react';

const Thumbnail = (props) => {

    const thumb = (
        <div>
            {props.post.map((post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                </div>
            )}
        </div>
    );

    return (
        <div className='thumbnail'>
            { thumb}
        </div>
    )

}
export default Thumbnail;