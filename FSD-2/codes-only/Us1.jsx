import { useState } from "react";
function Us1() {
    const [count, setCount] = useState(0);
    function handleCount() {
        if (count < 10) {
            setCount(count + 1)
        }
        else {
            alert("you'r are too much")
        }
    }
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={handleCount}>Click me</button>
        </div>
    )
}
export default Us1;