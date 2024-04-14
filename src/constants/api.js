const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PRODUCTS_URL = `${BACKEND_URL}/api/products`;
const IMAGES_URL = `${BACKEND_URL}/public/images`;
const SHOPPING_CARTS_URL = `${BACKEND_URL}/api/shopping-carts`;
const CONSULTS_URL = `${BACKEND_URL}/api/consults`;

const IMAGE_DEFAULT_NAME = "default.jpg";

export {
    BACKEND_URL,
    PRODUCTS_URL,
    IMAGES_URL,
    IMAGE_DEFAULT_NAME,
    SHOPPING_CARTS_URL,
    CONSULTS_URL,
};