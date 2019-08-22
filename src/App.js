import React from 'react';
import Product from './Product'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
    this.changeRating=this.changeRating.bind(this);
    this.addComment=this.addComment.bind(this);
    this.addProduct=this.addProduct.bind(this);
  }


  changeRating(rating){

    this.setState({rating})
  }
  addComment(comment){
    const {comments} = this.state 
    this.setState({comments: [...comments, comment.value]})
  }

  addProduct(product){
    const {products} = this.state;
    this.setState([...products, product]) 
  }

  render(){
    return <Product name="Redmi" />
  }
}

export default App;
