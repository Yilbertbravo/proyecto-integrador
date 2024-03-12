import useLocalStorage from "../../hooks/useLocalStorage";
import PropTypes from "prop-types";

import ShoppingCartContext from "./ShoppingCartContext";

const ShoppingCartProvider = (props) => {
    const { children } = props;
    const { items, setItem } = useLocalStorage({ shoppingCart: [] });

    const getProductCart = (id) => {
        return items.shoppingCart.find((item) => item.id === id);
    };

    const addProductCart = (product) => {
        const productQueEstaEnLS = getProductCart(product.id);
        if (productQueEstaEnLS && productQueEstaEnLS.amount < productQueEstaEnLS.stock) {
            // cuando existe en LS
            product.amount = productQueEstaEnLS.amount+1;
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            products.sort((a, b) => a.id-b.id);
            setItem("shoppingCart", products);

        } else if(!productQueEstaEnLS) {
            // cuando no existe en LS
            product.amount = 1;
            setItem("shoppingCart", [ ...items.shoppingCart, product ]);
        }

    };

    const subtractProductCart = (product) => {
        const productQueEstaEnLS = getProductCart(product.id);
        if (productQueEstaEnLS.amount >= 1) {
            // cuando existe en LS
            product.amount = productQueEstaEnLS.amount-1;
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            products.sort((a, b) => a.id-b.id);
            setItem("shoppingCart", products);
        } if (productQueEstaEnLS.amount === 0) {
            // eliminar de LS
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const productsEliminados = items.shoppingCart.toSpliced(index, 1);
            productsEliminados.sort((a, b) => a.id-b.id);

            setItem("shoppingCart", productsEliminados);
        }

    };

    const vaciarProductCart = () => {
        setItem("shoppingCart", []);

    };

    const saveProductCart = () => {
        console.log("guardar compra");
        setItem("shoppingCart", []);

    };

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCart: items.shoppingCart,
                getProductCart,
                addProductCart,
                subtractProductCart,
                vaciarProductCart,
                saveProductCart,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;