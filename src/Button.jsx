
function Print(){
    console.log("hello Dear")
};

function MouseOver(){
    console.log("Have a Good day!")
};

export default function Button(){
    return (
        <>
        <div>
        <button onClick={Print}> click me </button>
        <p onMouseOver={MouseOver}> click me & see the magic</p>
        </div>
        
        </>
    )
};