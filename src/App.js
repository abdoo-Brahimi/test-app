import React from 'react';
import Products from './Products'
import './App.css';
import v4 from'uuid/v4'
import AddProduct from './AddProduct'
import PropTypes from 'prop-types'
// import store from './store/store'
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     products: []
  //   };
  //   this.changeRating=this.changeRating.bind(this);
  //   this.addComment=this.addComment.bind(this);
  //   this.addProduct=this.addProduct.bind(this);
  // }

  getChildContext(){
    return {
      store: this.props.store
    }
  }

  componentWillMount(){
    this.unsubscribe = this.props.store.subscribe(
      ()=>this.forceUpdate()
    )
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

//   changeRating(idNew, ratingNew){
//     const {products} = this.state;
//     this.setState(
//       {
//         products: [...products].map((value)=>{
//           let {id, rating} = value;
//           return (idNew!==id) ? value : {...value, rating:ratingNew}  
//         }
//         )
//       }
//     )
//   }


//  addComment(idNew, comment){
//    const {products} = this.state;
//    this.setState(
//      {
//        products : [...products].map((value)=>{
//          let {id, comments} = value;
//          return (idNew!==id) ? value : {...value, comments: [...comments, comment]}  
//        })
//      }
//    )
//  }

    
  

//   addProduct(product){
//     const {products} = this.state
    
//     this.setState({products :[...products, {id: v4(), name: product, comments:[]}]}) 
    
//   }
//   componentDidUpdate(){
//     console.log(this.state.products);
//   }
  static propTypes ={
    store: PropTypes.object.isRequired
  }
  static childContextTypes = {
    store: PropTypes.object.isRequired
  }
  render(){
    return (<section>
              <AddProduct />
              <Products listProducts={this.props.store.getState()}/>
            </section>
    );
  }
}

export default App;
