import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";

export const Item = ({ id, name, precio, category, imagen, stock }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, precio }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <h1>{name}</h1>
      <img src={imagen} />
      <div>Editorial: {category}</div>
      <div className="item-price">${precio}</div>
      <button className="item-descripcion">
        <Link to={`/item/${id}`}>Descripcion</Link>
      </button>
      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Agregar al carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + Agregar mas
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};
