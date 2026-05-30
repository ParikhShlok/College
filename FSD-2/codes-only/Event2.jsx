function Event2(){
    function handleSubmit(e){
        e.preventDefault();
        alert ("Welcome to LJU")
    }
    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    )
}
export default Event2