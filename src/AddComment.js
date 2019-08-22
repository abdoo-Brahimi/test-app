import React from 'react'

const AddComment = ({onSub=f=>f}) => {
    let _commtext
    return (
        <div className="addcomment">
            <input className="commentinput" ref={input => _commtext = input} placeholder="New comment....." type="text" />
            <button className="commentsubmit" onClick={()=>{onSub(_commtext); _commtext.value=''}}>ADD</button>        
        </div>
    )
}

export default AddComment;