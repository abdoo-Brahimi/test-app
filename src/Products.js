import Product from './Product';
import React from 'react';
const Products = ({listProducts=[]})=>(
    <section className="Products">
        {
            [...listProducts].map((value, ind)=>{
                    let {id ,name, rating, comments} = value;
                    return (<Product name={name} 
                                    rating={rating} 
                                    comments={comments} 
                                    id={id}  
                                    key={ind}
                                     />)
                }
            )
        }
    </section>
)

export default Products;