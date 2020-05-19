import React, {Component} from 'react';
import Shelf from './Shelf';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
class ListBooks extends Component{
  


  constructor(props){
    super(props);
    this.state = {
      reading:[],
      want:[],
       read:[]
    }
    
   
  }
  

	
  render(){
    

    
    return(
      
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
  				<Shelf shelfName={"Currently Reading"} booksOnShelf={this.props.booksReading} onHandleChangeShelf={this.props.onHandleChangeShelf}  />
    			<Shelf shelfName={"Want To Read"} booksOnShelf={this.props.booksWant} onHandleChangeShelf={this.props.onHandleChangeShelf} />
				<Shelf shelfName={"Read"} booksOnShelf={this.props.booksRead} onHandleChangeShelf={this.props.onHandleChangeShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
    
    )
    
  }
};

ListBooks.propTypes = {
	booksReading: PropTypes.array.isRequired,
	booksWant: PropTypes.array.isRequired,
	booksRead: PropTypes.array.isRequired,
	onHandleChangeShelf: PropTypes.func.isRequired
};
export default ListBooks