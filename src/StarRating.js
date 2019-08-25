import Star from './Star'
import React from 'react'



const StarRating = ({starsSelected=0, totalStars=6, onRate=f=>f}) => (
    <section className="rating">
        <div className="ratingstars">
        {
            [...Array(totalStars)].map((value, id)=>(
                <Star key={id} selected={id<starsSelected} onRate={()=>onRate(id+1)}/>   
            ))
        }
        </div>
        <div className={(starsSelected===0)?"ratingtext":"ratingtext full"}>
            <p className="ratingof">{starsSelected}/{totalStars}</p>
            {
                (starsSelected === 0) ?
                "":
                <p className="ratingtitle">
                    {
                        (starsSelected < 3) ?
                            "bad" : 
                            (starsSelected < 5) ?
                                "average" :
                                (starsSelected < 6) ?
                                "good":
                                "excellent"
                    }
                </p>

            }
        </div>
    </section>
)

export default StarRating;