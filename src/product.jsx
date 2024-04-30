import "./Product.css";

function Product({ title, price, models }) {
  console.log(models);
  let Discount = price > 200000   
let Style = { backgroundColor : Discount ? "5%"  : "blue"}
    return (
      <>
        <div className="Product" style={Style}>
          <h3>{title}</h3>
          <p>Price divide by 2:{price / 2}</p>
          <p>Price multiply by 2 :{price * 2}</p>
          <p>Price minus by 2 :{price - 2}</p>
          <p>Price add 2 :{price + 2}</p>
          
          
        </div>
      </>
    );
};

export default Product;
