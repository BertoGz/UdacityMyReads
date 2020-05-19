import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component{

    constructor(props){
      super(props);
      this.state = {
      books:[]
      }
      
      
    }  
  

render(){
  

 
	return(
    
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelfName}</h2>
<div className="bookshelf-books">
<ol className="books-grid">

{this.props.booksOnShelf.length>0 && this.props.booksOnShelf.map((dbook) => (
  <li key={dbook.id} >
  <Book book={dbook} shelf={dbook.shelf} onHandleChangeShelf={this.props.onHandleChangeShelf}  key={dbook.id} />

</li>
))}



</ol>
</div>
</div>
    
    
    
    )



}

};
Shelf.propTypes={
	booksOnShelf: PropTypes.array.isRequired,
	shelfName: PropTypes.string.isRequired,
	onHandleChangeShelf: PropTypes.func.isRequired,
}

export default Shelf