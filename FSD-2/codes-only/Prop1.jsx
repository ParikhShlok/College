import Prop2 from './Prop2'//this is child component for prop1
function Prop1(){//parent component
    return(
        <div>
            <Prop2 name="vansh" rollnumber="101" marks={25} />
            <Prop2 name="rahul" rollnumber="102" marks={15} />
            <Prop2 name="keval" rollnumber="103" marks="2" />

        </div>
    )
}
export default Prop1;