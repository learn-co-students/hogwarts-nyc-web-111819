import React from 'react'

const imgHelper = (name) => {
    return '/hog-imgs/' + name.toLowerCase().split(" ").join("_") + '.jpg'
    
}
class PigTile extends React.Component {

    state = {
        viewDetails: false
    }

    handleClick = () => {
        this.setState({
            viewDetails: !this.state.viewDetails
        })
    }

    render() {
       
        return (
            <div className="pigTile" onClick={this.handleClick} > 
                    <h3>{this.props.name}</h3>
                    <img alt="picture of a pig" src={imgHelper(this.props.name)}/>
                    {this.state.viewDetails && <div className="hog-details">
                        <div>Specialty: {this.props.specialty}</div>
                        <div>{this.props.greased === true ? "Greased" : "Not Greased"}</div>
                        <div>Weight: {this.props.weight}</div>
                        <div>Highest Medal Achieved: {this.props['highest medal achieved']}</div>
                    </div>}
                </div>
        )
    }
}

export default PigTile
