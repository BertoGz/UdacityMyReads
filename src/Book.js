import React, {Component} from 'react';
import {get} from './BooksAPI';
class Book extends Component{
  


	updateShelf = event =>{
    this.props.onHandleChangeShelf(this.props.book, event.target.value);
    }
	
	async componentDidUpdate(){
      
    }



  render(){
    

   
  const coverImg =
    this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
      ? this.props.book.imageLinks.thumbnail
      : ``;
  const title = this.props.book.title ? this.props.book.title : 'No title available';
  const author = this.props.book.authors ? this.props.book.authors : 'Unknown Author';


    
    
   return(
  					<div className="book">
                    	<div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, 
     							backgroundImage: `url(${coverImg})` }}>
							</div> 

                            <div className="book-shelf-changer">
                              <select onChange={this.updateShelf} defaultValue="">
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
}
export default Book