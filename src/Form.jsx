

function handleForm( event){
    // if console msg show always then use event.preventdefault function 
    event.preventDefault(); // 

    console.log(" form was submitted") // now this msg show  for mili seconds 
}

export default function Form(){
    return (
        <>
         <form>
         <input type="text" name="Name" id=""  placeholder="Enter your name "/>
         <input type="number" name="Phone no" id=""  placeholder="Enter your Number"/>
         <input type="text" name="" id=""  placeholder="tell me something"/>
        <button type="submit" onClick={handleForm}>
            submit
        </button>
         </form>
        </>
    )
};