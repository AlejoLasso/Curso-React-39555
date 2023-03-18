import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrecio = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.precio,
    0
  );

 const clear = () => {
  setCart([]);
 }

 const elimarItem = (itemId) =>{
  const items = cart.filter(item=> item.id!== itemId);
  setCart([...items]) }
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <tr>
                <td className="text-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      clear();
                    }}
                  >
                    Vaciar Carrito
                  </button>
                </td>

                {cart.map((manga) => (
                  <tr key={manga.id}>
                    <td className="text-start">
                      <img src={manga.imagen} />
                    </td>
                    <td>{manga.name}</td>
                    <td>
                      {manga.quantity}x ${manga.precio}
                    </td>
                    <td>${manga.quantity * manga.precio}</td>
                    <Link
                      onClick={() => {
                        elimarItem(manga.id);
                      }}
                      title="eliminar producto"
              
                    >
                      <td>
                        <button> X </button>
                      </td>
                    </Link>
              
                  </tr>
                ))}

                <td>Total a pagar ${totalPrecio}</td>
              </tr>
            </table>
          </div>
          <Link to ="/sendOrder">
        <button>Proceder al pago</button>
        </Link> 
        </div>
      </div>
    </>
  );
};
