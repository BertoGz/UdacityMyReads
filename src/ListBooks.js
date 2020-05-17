import React, {Component} from 'react';
import Book from './Book';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
class ListBooks extends Component{
  


  constructor(props){
    super(props);
    this.state = {
      reading:[],
      want:[],
       read:[]
    }
    
   
  }
  
  componentDidMount(){
 this.setState({reading:this.props.booksReading})
    this.setState({reading:this.props.booksWant})
     this.setState({read:this.props.booksRead})
  }
	
  render(){
    
    return(
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
  				<Shelf shelfName={"Currently Reading"} booksOnShelf={this.props.booksReading}/>
    			<Shelf shelfName={"Want To Read"} booksOnShelf={this.props.booksWant}/>
				<Shelf shelfName={"Read"} booksOnShelf={this.props.booksRead}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
    
    )
    
  }
}
export default ListBooks