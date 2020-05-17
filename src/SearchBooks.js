import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book'
import { Link } from 'react-router-dom';
class SearchBooks extends Component{
  
  state={
  searchValue:"",
  books:[ ]
  }
  
 componentDidMount() {

  }





 handleValueChange = event => {
	this.setState({books: []}) ; // clear book list
    const query = event.target.value; 
    this.setState({ searchValue: query }); // update searchValue
	BooksAPI.search(query.trim()).then((data)=>{this.setState({books:data})}) // update book list
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
					{this.state.books.length>0 && this.state.books.map((book) => (
                      <li>
					<Book book={book} />

					/*<Book title={book.title} bookImage={"url(" + book.imageLinks.thumbnail + ")"} />*/
                    </li>
                    ))}
				</ol>
              </div>
            </div>    

      ) 

  }

}
export default SearchBooks