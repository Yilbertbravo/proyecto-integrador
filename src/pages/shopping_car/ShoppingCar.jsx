
import { Box } from "@mui/material";
import "../shopping_car/shoppingCar.scss";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import ShoppingCartContext from "../../components/context/ShoppingCartContext";

const ShoppingCar = () => {
    const [ shoppingCar2, setShoppingCar2 ] = useState();
    const { shoppingCart, subtractProductCart, addProductCart, vaciarProductCart, saveProductCart } = useContext(ShoppingCartContext);

    useEffect(() => {
        if (shoppingCart?.length === 0 ){
            setShoppingCar2([]);

        } else if (shoppingCart?.length > 0) {
            setShoppingCar2(shoppingCart);
        }
    }, [shoppingCart]);

    const multiplyPrice = (a, b) => {
        return a * b;
    };

    return (
        <Box className="shoppingCar">
            <h2>Lista de productos</h2>

            <table className="shoppingCar__table">
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>

                    {shoppingCar2?.map((product) => (
                        <tr
                            key={product.id}
                        >
                            <td>
                                <Button
                                    className="margin--button button-shoppingcar"
                                    color="danger"
                                    onClick={() =>
                                        subtractProductCart(product) }
                                ><RemoveIcon/></Button>
                                {product.amount}
                                <Button
                                    onClick={() => addProductCart(product)}
                                    className="margin--button button-shoppingcar"><AddIcon/></Button>
                            </td>
                            <td> {product.name} </td>
                            <td>  {product.price} </td>
                            <td>  {multiplyPrice(product.price, product.amount)} </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="final"></td>
                        <td className="final"></td>
                        <th className="final">Total a pagar</th>
                        <th className="final">{ shoppingCar2?.reduce((acumulador, actual) => acumulador + (actual.price * actual.amount), 0)}</th>

                    </tr>
                </thead>
            </table>

            <Button
                className="margin--button button-shoppingcar"
                color="danger"
                onClick={() =>
                    vaciarProductCart() }
            >Vaciar carrito</Button>
            <Button
                onClick={() => saveProductCart()}
                className="margin--button button-shoppingcar"
            >Comprar</Button>
        </Box>
    );
};

export default ShoppingCar;