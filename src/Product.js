import React from 'react'
import StarRating from './StarRating';
import Comments from './Comments';
import AddComment from './AddComment'
import PropTypes from 'prop-types'
import {addComment, rateProduct} from './store/actionCreators'
const Product = ({id, name="", rating=0, comments=[]}, {store}) => (
      <div>
        <h1>{name}</h1>
        <StarRating starsSelected={rating} 
                    onRate={(rate)=>store.dispatch(rateProduct(id, rate))}/>
        <Comments comments={comments}/>
        <AddComment onSub={(comment)=>store.dispatch(addComment(id, comment))}/>
      </div>
    
)

Product.contextTypes = {
  store: PropTypes.object
}

export default  Product;