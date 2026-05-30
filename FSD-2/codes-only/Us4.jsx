import { useState } from 'react'
import img1 from './assets/h2r.jpg';
import img2 from './assets/v4.jpg';
import img3 from './assets/350.jpg';
import img4 from './assets/rsv4.png';
import img5 from './assets/cbr.jpg';

function Us4() {
  const arr=[img1,img2,img3,img4,img5]
    const [myImage, setImage] = useState(arr[0]);
    function changeImage() {
      const randomIndex=Math.floor(Math.random()*arr.length)
      setImage(arr[randomIndex])
}
return (
    <div>
      <h1>Random Image Generator</h1>
        <img src={myImage} height='200px' width='200px' alt='logo'></img>
        <button onClick={changeImage}>Change Image</button>
    </div>
);
}
export default Us4