
 import Price from "./Price"
 import "./Card.css"
 export default function Amazoncard( {ProductTitle ,des , idx} ){
    let old = ["12,999","15,000" , "45,650" ,"42,200"];  
    let  New = ["10,999","10,000" , "25,650" ,"12,000"] ; 


    return (
        <>
        <div className="card1">
            <h3>{ProductTitle}</h3>
            <p>{des}</p>
            <Price old={old[idx]} New ={New[idx]}/>
        </div>
        
        </>
    )

};