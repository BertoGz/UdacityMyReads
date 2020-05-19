import React, {Component} from 'react';
import Book from './Book';
class Shelf extends Component{

    constructor(props){
      super(props);
      this.state = {
      books:[]
      }
      
      
    }  
  

render(){
  
  const {shelfName, booksOnShelf} = this.props;
 
	return(
    
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
<div className="bookshelf-books">
<ol className="books-grid">

{booksOnShelf.length>0 && booksOnShelf.map((dbook) => (
  <li key={dbook.id} >
  <Book book={dbook} onHandleChangeShelf={this.props.onHandleChangeShelf}  key={dbook.id} />

</li>
))}



</ol>
</div>
</div>
    
    
    
    )



}

}

export default Shelf