
import "bootstrap/dist/css/bootstrap.css";

function Summary({ dataF, setDataF, viewer, setViewer, cart, setCart, cartTotal, setCartTotal }) {
    const updateHooks = () => {
        setViewer(0);
        setDataF([]);
        setCart([]);
        setCartTotal(0);
    };

    const cartItems = cart.map((el, index) => (
        <div key={index}>
          <img className="img-fluid" src={el.image} width={150} alt={el.title} />
          {el.title} ${el.price} x {el.quantity}
        </div>
      ));

    return (<div>
        <div className="card-body">
            <div>{cartItems.length > 0 ? cartItems : <p>Cart is Empty!</p>}</div>
            <div className="text-end">
                <strong>Total: ${cartTotal.toFixed(2)}</strong>
            </div>
        </div>
        <h1>Payment summary:</h1>
        <h3>{dataF.fullName}</h3>
        <p>{dataF.email}</p>
        <p>{dataF.creditCard}</p>
        <p>{dataF.address}</p>
        <p>{dataF.city},{dataF.state} {dataF.zip} </p>

        <button onClick={updateHooks} className="btn btn-secondary">Confirm and Browse</button>

    </div>);
};

export default Summary;