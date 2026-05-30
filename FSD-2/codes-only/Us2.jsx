import { useState } from "react";
function Us2() {
    const [count, setCount] = useState(0);
    function handleCount() {
        if (count < 10) {
            setCount(count + 1)
        }
        else {
            alert("you'r are too much ")
        }
    }
    function decre(){
        if (count > 0){
            setCount(count-1)
        }
        else{
            alert("એલા બોવ થાઈ છે હવે તારું")
        }
    }
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={handleCount}>Increment</button>
            <button onClick={decre}>Decrement</button>
        </div>
    )
}
export default Us2;