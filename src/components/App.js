import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard';

class App extends Component {

  state = {
    hogs: hogs,
    filter: "name",
    view: true
  }

  resetView = () => {
    console.log('before firing:', this.state.view)
    this.setState({
      view: true
    }, () => console.log('after firing:', this.state.view))
  }

  renderHogs = () => {
    // this.state.hogs.forEach(hog => console.log(hog.weight))
    let hogs = this.filterHogs()
    return hogs.map((hog, index) =>  {return <HogCard key={index} hog={hog} view={this.state.view} />})
  }
  
  changeFilter = (filter) => {
    console.log('before change:', filter)
    this.setState({
      filter: filter
    }, () => console.log("after change:", filter))
  }
  
  filterHogs = () => {
    switch (this.state.filter.toLowerCase()) {
      case "weight":
        return this.state.hogs.sort(function(a, b){return a.weight - b.weight})
        
      case "name":
        return this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))

      case "greased":
        return this.state.hogs.filter(hog => hog.greased)
    
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
          < Nav resetView={this.resetView} changeFilter={this.changeFilter} />
          <div className="ui grid container">
            {this.renderHogs()}
          </div>
      </div>
    )
  }
}

export default App;
