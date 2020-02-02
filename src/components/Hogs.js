import React, { Component } from 'react';
import HogTile from './HogTile'

class Hogs extends React.Component {


    render() {
        console.log(this.props.hogInfo)
       const hogTiles = this.props.hogInfo.map(hogInformation => {
           <HogTile hog={hogInformation} key={hogInformation.name}/>
       })
    
return <div className = "allHogs">{hogTiles}</div>;
}

}


export default Hogs