import React, { Component } from 'react';



class Search extends Component {
 state = {
   query: '',
 }

 handleChange = () => {
   this.setState({
     query: this.state.value
   })
 }

 render() {
   return (
     <form>
       <input placeholder="Search by species..." onChange={this.handleChange} value={this.state.query}/>
       // <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Search
