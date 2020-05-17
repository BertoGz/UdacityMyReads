import React, {Component} from 'react';


class Book extends Component{
  
  
  constructor(props){
    super(props);

    
  }
  

  render(){
    
        // add fallbacks for missing cover images and title
  const coverImg =
    this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
      ? this.props.book.imageLinks.thumbnail
      : "";
  const title = this.props.book.title ? this.props.book.title : 'No title available';
  
    
   return(
  <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.title}</div>
                          <div className="book-authors">{this.props.book.author}</div>
   	</div>
   
   
   ) 
  }
}
export default Book