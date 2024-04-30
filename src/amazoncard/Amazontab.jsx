
import Amazoncard from "./Amazoncard"
import "./Card.css";


export default function Amazonatab (){
    return (
        <>
         <div className="card">
            <Amazoncard ProductTitle ="laptop sony" des=" good"  idx ={0}/>
            <Amazoncard ProductTitle ="laptopn lenovo" des=" fantastic" idx ={1} />  
            <Amazoncard ProductTitle ="laptop apple" des=" MindBlowing" idx ={2}/>
            <Amazoncard ProductTitle ="laptop acer" des=" awsome" idx ={3} />

            </div>
        
        </>
    );
};