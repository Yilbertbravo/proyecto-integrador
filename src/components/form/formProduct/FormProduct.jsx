import { useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./formProduct.scss";

import validationSchema from "./formProduct.validate.js";

import InputField from "../inputField/InputField.jsx";
import InputFile from "../inputFile/InputFile.jsx";

import Button from "../../button/Button.jsx";
import Switch from "../switch/Switch.jsx";
import Alert from "../../alert/Alert.jsx";

import { IMAGES_URL, IMAGE_DEFAULT_NAME } from "../../../constants/api.js";
import { JPG, PNG } from "../../../constants/general.js";

const FormProduct = (props) => {
    const { initialValues } = props;

    const { createProduct, updateProduct, uploadProductImage } = useProducts();
    const [ openAlert, setOpenAlert ] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (values?.files) {
                const response = await uploadProductImage(values.files[0]);
                values.imageFileName = response?.data?.filename ? response.data.filename : IMAGE_DEFAULT_NAME;
            }
            console.log(values);

            values.id ? updateProduct(values) : createProduct(values);
            setOpenAlert(true);
        },
    });

    return (
        <Box
            component="form"
            className="form-product"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
                inputProps={{ maxLength: 25 }}>
            </InputField>

            <InputField
                label="Precio"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                errorMessage={formik.touched.price && formik.errors.price}
                inputProps={{ maxLength: 12 }}>
            </InputField>

            <InputField
                label="Stock"
                name="stock"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                errorMessage={formik.touched.stock && formik.errors.stock}
                inputProps={{ maxLength: 6 }}>
            </InputField>

            {/* <InputField
                label="Marca"
                name="brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                errorMessage={formik.touched.brand && formik.errors.brand}
                inputProps={{ maxLength: 25 }}>
            </InputField>

            <InputField
                label="Categoría"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                errorMessage={formik.touched.category && formik.errors.category}
                inputProps={{ maxLength: 25 }}>
            </InputField> */}

            <InputField
                label="Descripción"
                name="description"
                multiline
                rows={5}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                errorMessage={formik.touched.description && formik.errors.description}
                inputProps={{ maxLength: 150 }}/>

            <InputFile
                label="Imagen"
                name="files"
                accept={[ JPG, PNG ]}
                formik={formik}
                error={formik.touched.files && Boolean(formik.errors.files)}
                errorMessage={formik.touched.files && formik.errors.files}/>

            <Box
                className="form-product__image"
                component="img"
                src={ `${IMAGES_URL}/${formik.values.imageFileName}` ?? `${IMAGES_URL}/${IMAGE_DEFAULT_NAME}`}
                alt="Fotografía del producto"/>

            <Switch
                label="Está en promoción"
                name="isPromotion"
                value={formik.values.isPromotion}
                onChange={formik.handleChange}/>

            <Button type="submit">Guardar</Button>
            <Button
                component={NavLink}
                to="/"
                type="button"
                color="danger">
                        Cancelar
            </Button>
            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="El producto se ha procesado correctamente"
                redirectUrl="/"/>
        </Box>
    );
};

FormProduct.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPromotion: PropTypes.bool.isRequired,
    }),
};

FormProduct.defaultProps = {
    initialValues: {
        name: "",
        description: "",
        image: "/images/home/products/default.jpg",
        stock: 1,
        price: 0,
        isPromotion: false,
    },
};

export default FormProduct;