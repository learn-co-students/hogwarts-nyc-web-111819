import React from 'react';

const imgHelper = (name) => {
    return '/hog-imgs/' + name.toLowerCase().split(' ').join('_') + '.jpg'
}

class HogTile extends React.Component{
    
    state = {
        show: false
    }

    // renderHogTiles = () => {
    //     const { name, specialty, weight, greased } = this.props;

    //     return (
    //   <div className="HogTile">
    //       <div>Name: {name}</div>
    //       <div>Specialty: {specialty}</div>
    //       <div>wight: {weight}</div>
    //       <div>greased={greased} </div> 
    //   </div>
    // )
    // }
    handleClick=()=>{
        this.setState({show: !this.state.show})
    }
    render(){
        
         let greasyBoy = ""
        console.log("mad props", this.props.greased)
        if (this.props.greased === true){
            greasyBoy = "greased"
        }else{
            greasyBoy = "ungreased"
        }

        return(
        <div className="pigTile">
        <div><img src={imgHelper(this.props.name)}/></div>
                <div>Name: {this.props.name}</div>
                <div><button onClick={this.handleClick}> {this.state.show ? "Hide Details" : "Show Details"}</button></div>
                {this.state.show?
     <div className="hog-details">
          <div>Specialty: {this.props.specialty}</div>
          <div>weight: {this.props.weight}</div>
          <div>medal: {this.props.highestHonor}</div>
                <div> {greasyBoy} </div>
                </div>
                : null}
                    </div>

        )
                }
                
    //    return this.renderHogTiles

}

export default HogTile