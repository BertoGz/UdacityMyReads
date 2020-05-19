import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import {get} from './BooksAPI';
import Book from './Book'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
class SearchBooks extends Component{
  
  state={
  searchValue:"",
  bookList:[],
  searchedBooks:[]
  }
  

async searchBooks(query){
	await BooksAPI.search(query.trim()).then(books => {
        if (books.length > 0)
        { this.setState({bookList: books }); this.setBooksOnShelf(books)  }
          else{ this.setState({ bookList: [] }); }
         }) // update book list

}

 setBooksOnShelf= data=>{
   const tempBooksOnShelf=[];
   if (data.length>0){
data.forEach(item => { get(item.id).then( (d)=>{ tempBooksOnShelf.push(d);  this.setState({searchedBooks:tempBooksOnShelf });   } )}  )
     
    
   }
}

 handleValueChange = event => {
	this.setState({bookList: []}) ; // clear book list
   this.setState({searchedBooks: []}) ; // clear book list
    const query = event.target.value; 
    this.setState({ searchValue: query }); // update searchValue
   	if (query!=="")
   {
	this.searchBooks(query)
   }

  };



render(){



  	
      return(
      <div className="search-books">
              <div className="search-books-bar">
                <Link to='/' className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">

                  <input type="text" placeholder="Search by title or author"
onChange={this.handleValueChange} value={this.state.searchValue} />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
					{this.state.searchedBooks.length>0 && this.state.searchedBooks.map((dBook) => (
                      <li key={dBook.id}>
					
					<Book key={dBook.id} book={dBook} shelf={dBook.shelf} onHandleChangeShelf={this.props.onHandleChangeShelf}/>
                    </li>
                    ))}
				</ol>
              </div>
            </div>    

      ) 

  }

};

SearchBooks.propTypes = {
  onHandleChangeShelf: PropTypes.func.isRequired
};
export default SearchBooks