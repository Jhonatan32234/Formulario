import Select from "../atoms/Select";
import Label from "../atoms/Label";

function Field2(props){
    return (
    <div style={{with:"80%"}}>
        <div>
            <Label text={props.text}></Label>
        </div>
        <div>
           <Select val={props.val} fnVal={props.fnVal}></Select>
        </div>
      
        </div>)
}
export default Field2;