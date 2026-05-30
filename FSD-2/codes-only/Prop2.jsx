function Prop2(props){
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.rollnumber}</li>
                <li>{props.marks+1}</li>
            </ul>
        </div>
    )
}
export default Prop2