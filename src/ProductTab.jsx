
import Product from "./product"

function ProductTab (){
     let options = [ " high-tech", "fantastice" ,"mind- blowing" ] // array part
     let opt = { a: "high", b: "tech" }  // object part
    return (
        <>
      <Product  title="Phone" price={20000}  models={options}/>
      <Product title="telephone" price= {300000} models={opt.a} />
      <Product title= " laptop" price = {50000} />
    </>
    )
}

 export default ProductTab;
