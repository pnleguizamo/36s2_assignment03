
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

    return (<div >
        <h1>Confirm Purchase</h1>
        <div className="card">
            <div className="card-body">
                <div>{cartItems.length > 0 ? cartItems : <p>Cart is Empty!</p>}</div>
                <div className="text-end">
                    <strong>Total: ${cartTotal.toFixed(2)}</strong>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h1>User Info:</h1>
                                <p>Name: {dataF.fullName}</p>
                                <p>Email: {dataF.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h1>Payment and Shipping Info:</h1>
                                <p>Card : {dataF.creditCard.replace(/\d(?=\d{4})/g, "*")}</p>
                                <p>Address: {dataF.address}</p>
                                <p>{dataF.city}, {dataF.state} {dataF.zip}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <button onClick={updateHooks} className="btn btn-secondary">Confirm and Browse</button>

    </div>);
};

export default Summary;