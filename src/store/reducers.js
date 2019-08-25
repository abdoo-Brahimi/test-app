import {constants as C} from './constants';
import v4 from 'uuid/v4';
const product = (state={}, action)=>{
    switch(action.type){
        case C.ADD_PRODUCT:
            return {
                id: v4(),
                name: action.name,
                comments: [],
                rating: 0
            }
        case C.RATE_PRODUCT:
            return (state.id !== action.id) ? state: {...state, rating: action.rating}
        case C.ADD_COMMENT: 
            let {comments}=state;
            return (state.id !== action.id) ? state: {...state, comments: commentsr(comments, action)}
        default : break;
    }
}

const products = (state=[], action) =>{
    switch (action.type){
        case C.ADD_PRODUCT:
            return (
                    [...state, product({}, action)]
            );
        case C.RATE_PRODUCT:
            return [...state].map((value)=>product(value, action));
        case C.ADD_COMMENT:
            return [...state].map(value => product(value, action))
        default : 
            return state;

    }
}

const comment = (state="", action) =>{
    switch (action.type){
        case C.ADD_COMMENT:
            return action.text;
        default: 
            return state;
    }
}

const commentsr = (state=[], action) =>{
    switch(action.type){
        case C.ADD_COMMENT:
            return [...state, comment("",action)];
            // return (state.id!==action.id)? state: [...state, comment(action)]
        default: 
            return state;
    }
}

export default products;