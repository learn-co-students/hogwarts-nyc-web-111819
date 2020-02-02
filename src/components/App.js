import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogTile from './HogTile';
import hogs from '../porkers_data';


class App extends Component {

  state = {
    hogInfo: hogs,
     onlyGreased: false,
    sort: 'no sort'
  }

  toggleGreased = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased })
  }

  changeSort = (sortType) => {
    this.setState({ sort: sortType })
  }  



// getHogs = ()=>{
  //   hogs.forEach(hog)
  //   {
    
    //   } 
    // }
    
    render() {
      let availableHogInfo = [...this.state.hogInfo]
      
      if (this.state.sort === 'name') {
        availableHogInfo.sort((pigOne, pigTwo) => pigOne.name.toLowerCase() > pigTwo.name.toLowerCase() ? -1 : 1)
      }
      if (this.state.sort === 'weight') {
        availableHogInfo.sort((a, b) => a.weight - b.weight)
      }
        
        // console.log("yo Ed", availableHogInfo)
        if (this.state.onlyGreased) {
          availableHogInfo = availableHogInfo.filter(pig => pig.greased)
        }
          
          
          
          return (
            <div className="App">
          < Nav
          toggleGreased={this.toggleGreased}
          changeSort={this.changeSort}
          sort={this.state.sort}
          greased={this.state.onlyGreased} 
          />
       {availableHogInfo.map((hoggy=>
          // {console.log(hoggy)}
          < HogTile  
          name={hoggy.name}
          key = {hoggy.name}
          specialty={hoggy.specialty}
          weight={hoggy.weight}
          greased={hoggy.greased}
          highestHonor={hoggy["highest medal achieved"]}
          />
          ))}
          </div>
    )
}
}

export default App;
