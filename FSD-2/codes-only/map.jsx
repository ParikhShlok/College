function Map(){
const arr=[1,2,3,4,5];
    const arr1=["a","b","c","d"]
    return(
        <div>
            {
                arr.map((value)=>{
                   return <h1> Array Element={value}</h1>
                   

                })
            }
             {
                arr.map((value)=>{
                   if(value>3){return <h1> Array Element={value}*5={value}</h1>} 
                   

                })
            }
            <h1> Array of Uppercase</h1>
            {
                arr1.map((value)=>{
                 return <h1> Array Element={value.toUpperCase()}</h1>
                   

                })
            }
            <h1> Filter </h1>
            <h1> {arr.join(",")}</h1>
            {
                arr.filter((value)=>{
                    return <h2> Array for filter {value}</h2> 
                })
            }
            <h1> Combined map and filter</h1>
            {
                arr.filter((value)=>value<=4).map((value)=>{return <h1> Array ={value}</h1>})
            }

        </div>
    )
}
export default Map