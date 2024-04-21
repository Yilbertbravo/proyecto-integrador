import { useContext, useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import "./formShoppingCart.scss";

import validationSchema from "./formShoppingCart.js";

import InputField from "../inputField/InputField.jsx";

import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";
import ShoppingCartContext from "../../../context/ShoppingCartContext.jsx";

const FormShoppingCart = () => {

    const { shoppingCart, removeAllCartProducts, buyCartProducts, calculateTotal } = useContext(ShoppingCartContext);

    const [ openAlert, setOpenAlert ] = useState(false);
    const [ messageTitle, setMessageTitle ] = useState([]);

    const { updateProductStock, products } = useProducts();

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            factura:null },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("prueba");
            if (shoppingCart.length === 0) {
                setMessageTitle([ "Error:", "No hay productos en el carro", "error" ]);

                setOpenAlert(true);
            }
            if (shoppingCart.length > 0) {
                console.log("Comprador:", values);
                console.log("Productos:", products);
                console.log("Productos del carrito:", shoppingCart);
                setMessageTitle([ "Accepted:", "Compra satisfactoria", "success" ]);

                await buyCartProducts({ ...values, total: calculateTotal() });
                await updateProductStock();
                setOpenAlert(true);
            }},
    });

    const getRandomNumberFront = () => {
        return Math.floor(Math.random() * (999999 - 10 + 1) + 10);
    };

    return (
        <Box
            component="form"
            className="form-product-shoppingcart"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre y Apellido"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                errorMessage={formik.touched.fullname && formik.errors.fullname}
                inputProps={{ maxLength: 25 }}>
            </InputField>

            <InputField
                label="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorMessage={formik.touched.email && formik.errors.email}
                inputProps={{ maxLength: 50 }}/>

            <InputField
                label="Numero de Orden"
                name="factura"
                className="margin--input"
                value={Number(formik.values.factura=getRandomNumberFront())}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <Button
                type="submit">Comprar</Button>

            <Button
                component={NavLink}
                to={"/"}
                className="margin--button button-shoppingcar"
                color="danger"
                onClick={() =>removeAllCartProducts() }
            >Vaciar carrito</Button>
            <Alert
                variant="filled"
                severity={messageTitle[2]}
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message={messageTitle[1]}
                messageTitle={messageTitle[0]}
                navigateUrl="/"/>

        </Box>
    );
};

export default FormShoppingCart;