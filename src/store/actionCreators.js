import {constants as C} from './constants';

export const addComment = (id, text) => (
    {
        type: C.ADD_COMMENT,
        id: id,
        text: text
    }
)

export const addProduct = (name) => (
    {
        type: C.ADD_PRODUCT,
        name: name
    }
)

export const rateProduct = (id, rating) => (
    {
        type: C.RATE_PRODUCT,
        id: id,
        rating: rating
    }
)