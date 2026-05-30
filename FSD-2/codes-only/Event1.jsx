function Event1(){
    function handleCheck(){
        alert ("Welcome to LJU")
    }
    return (
        <div>
            <center>
                {/* onDoubleClick for double click to trigger event */}
                <button onClick={handleCheck} style={
                    {
                        color:"teal",
                        background:"coral"
                }
                }>Click Me</button>
            </center>
        </div>
    )
}
export default Event1