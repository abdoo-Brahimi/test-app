import React from 'react'
import StarRating from './StarRating';
import Comments from './Comments';
import AddComment from './AddComment'

const Product = ({name="", rating=0, onRate=f=>f, comments=[]}, addComment=f=>f) => (
      <div>
        <h1>{name}</h1>
        <StarRating starsSelected={rating} onRate={onRate}/>
        <Comments comments={comments}/>
        <AddComment onSub={addComment}/>
      </div>
    
)

export default  Product;