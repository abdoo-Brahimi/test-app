import React from 'react';
import {addProduct} from './store/actionCreators';
import PropTypes from 'prop-types'
const AddProduct = (props, {store})=>{
    let _name;
   return (<form>
                <input ref={input=>_name=input} type="text" placeholder="Add name.."/>
                <button  onClick={(e)=>{e.preventDefault();
                                        store.dispatch(addProduct(_name.value))}}>ADD</button>
          </form>
   )
}
AddProduct.contextTypes = {
    store: PropTypes.object
}
export default AddProduct;