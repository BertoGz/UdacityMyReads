import React from 'react'
import {getAll} from './BooksAPI';
import {update} from './BooksAPI';
import {get} from './BooksAPI';
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



const readingBooks = this.state.allBooks.filter(book => book.shelf === 'currentlyReading');
this.setState({reading:readingBooks});

const wantBooks = this.state.allBooks.filter(book => book.shelf === 'wantToRead');
this.setState({want:wantBooks})

const readBooks = this.state.allBooks.filter(book => book.shelf === 'read');
this.setState({read:readBooks});
}


   async onHandleChangeShelf(book,currentShelf,targetShelf){
    const shelfFrom = currentShelf;
     const shelfTo = targetShelf;
    await update(book,targetShelf)
	const newBook = await get(book.id)

    if (shelfTo==='currentlyReading'){
	this.setState({ reading: [...this.state.reading, newBook] })
    }
	else if (shelfTo==='wantToRead'){
	this.setState({ want: [...this.state.want, newBook] })
    }
	else if (shelfTo==='read'){
    this.setState({ read: [...this.state.read, newBook] })
    }

	if (shelfFrom === 'currentlyReading')
    {
		const readingBooks = this.state.reading.filter(b => b.id !== book.id);
		this.setState({reading:readingBooks});
    }
	else if (shelfFrom === 'wantToRead')
    {
		const wantBooks = this.state.want.filter(b => b.id !== book.id);
		this.setState({want:wantBooks});
    }
	else if (shelfFrom === 'read')
    {
		const readBooks = this.state.read.filter(b => b.id !== book.id);
		this.setState({read:readBooks});
    }

}

  render() {


    return (
      <div className="app">
       
       <Route exact path='/'
		render={(props) => <ListBooks booksReading={this.state.reading}
		booksRead={this.state.read} booksWant={this.state.want} onHandleChangeShelf={this.onHandleChangeShelf.bind(this)}  />}/>

       <Route exact path='/search' 
component={() => <SearchBooks onHandleChangeShelf={this.onHandleChangeShelf.bind(this)}  />} />
       
      </div>
    )
  }
}

export default BooksApp
