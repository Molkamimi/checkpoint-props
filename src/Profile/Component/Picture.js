import React from 'react'
import image from "./image.jpg";

const Picture = (props) =>    {
    return (
        <div>
            {props.name}
        <img src={image} alt="picture" width="50%"></img>
        </div>
    );
};
export default Picture;