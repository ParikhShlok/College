function Event3(){
    function handleChange(event){
        console.log(event.target.value)
    }
    return (
        <div>
            <center>
                Enter Name:
                <input type="text" name="firstname" onChange={handleChange} />
            </center>
        </div>
    )
}
export default Event3