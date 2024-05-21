import { AccordionItem } from "./Accordionitem";
import { list } from "./list";
import "./style.css";

export const ACCORDION = ()=> {
    return (<div>
        {list.map((item, index)=>
        <AccordionItem key={index} title={item.title} content = {item.content}/>
   )}
    </div>
)}

