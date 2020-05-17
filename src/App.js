import React from 'react'
import * as BooksAPI from './BooksAPI'
import {getAll} from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks:[],
    read:[],
    want:[],
    reading:[]
   
  };

async componentDidMount(){

const Books = await getAll();
this.setState({allBooks:Books}) // update book list
console.log(Books);
const readingBooks = this.state.allBooks.filter(book => book.shelf === 'currentlyReading');
this.setState({reading:readingBooks})

const wantBooks = this.state.allBooks.filter(book => book.shelf === 'wantToRead');
this.setState({want:wantBooks})

const readBooks = this.state.allBooks.filter(book => book.shelf === 'read');
this.setState({read:readBooks})
};

handleChange = e => {

};



  render() {

    return (
      <div className="app">
       
       <Route exact path='/' 
       render={(props) => <ListBooks 
    booksReading={this.state.reading} booksRead={this.state.read} booksWant={this.state.want}  />}
      	/>

       <Route exact path='/search' 
    
    component={SearchBooks}/>
       
      </div>
    )
  }
}

export default BooksApp
