 

 export default  function Price({old ,New}){
  let style = {textDecorationLine : " line-through"};

    return(

        <>
        <span style={style}>{old} </span>
        &nbsp;
        <span>{New}</span>
        
        </>
    )
 };