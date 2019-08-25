import {createStore} from 'redux';
import products from './reducers';

import {addComment, addProduct, rateProduct} from './actionCreators';

const store = createStore(products)
store.dispatch(addProduct("Redmi"));
store.dispatch(rateProduct(store.getState()[0].id, 6));


console.log(store.getState());

export default store;