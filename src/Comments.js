import React from 'react'
import Comment from './Comment'

const Comments = ({comments=[]}) => (
    <section className="comments">
        {   
            [...comments].map((value, id)=>{
                return <Comment text={value} key={id}/>
                
            }

            )
        }
    </section>
)

export default Comments;