import React, { useState } from 'react'
import img1 from './assets/b1.JPG';
import img2 from './assets/b3.jpg';
function Us3() {
    const [myImage, setImage] = useState(img1);
    function changeImage() {
        if (myImage === img1) {
            setImage(img2)
        } else {
            setImage(img1)
        }
}
return (
    <div>
        <img src={myImage} height='200px' width='200px' alt='logo'></img>
        <button onClick={changeImage}>Change Image</button>
    </div>
);
}
export default Us3
