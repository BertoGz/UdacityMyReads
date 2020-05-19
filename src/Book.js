import React, {Component} from 'react';
import {get} from './BooksAPI';
import PropTypes from 'prop-types';

class Book extends Component{
  


	updateShelf = event =>{  // call a function running on main app to change shelf
    this.props.onHandleChangeShelf(this.props.book,this.props.shelf, event.target.value);
    }

  render(){
    

   
  const coverImg =
    this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
      ? this.props.book.imageLinks.thumbnail
      : ``;
	const title = this.props.book.title ? this.props.book.title : 'No title available';
	const author = this.props.book.authors ? this.props.book.authors : 'Unknown Author';
	const shelf = this.props.shelf;

    
    
   return(
  				<div className="book">
                    	<div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, 
     							backgroundImage: `url(${coverImg})` }}>
							</div> 

                            <div className="book-shelf-changer">
                              <select onChange={this.updateShelf} defaultValue={shelf}>
                                <option value="move" disabled >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                         	</div>

                        </div>
                         	<div className="book-title">{title}</div>
                      		<div className="book-authors">{author}</div>
   				</div>
   
   
   ) 
  }
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onHandleChangeShelf: PropTypes.func.isRequired
};

export default Book