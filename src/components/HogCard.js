import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../hog-imgs', false, /\.(png|jpe?g|svg)$/));

let greaseIcon = "data:image/png;base64,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"



class HogCard extends React.Component {

    state = {
        view: this.props.view
    }
    
    showHide = () => {
        this.setState({
            view: !this.state.view
        })
    }

    render() {

        let {name, specialty, greased, weight, "highest medal achieved": medal } = this.props.hog
        // console.log(medal)
        let hogImgName = name.split(' ').join('_').toLowerCase() + ".jpg"


        return (
            <div style={{display: this.state.view ? null : "none"}} className="ui eight wide column">
                <div className="ui card">
                    <div className="image">
                    {/* <img src={cherub} /> */}
                    <img src={images[hogImgName]} />
                    {/* <img src="/images/avatar2/large/kristy.png" /> */}
                    </div>
                    <div className="content">
                    <a className="header">{name}</a>
                    <div className="meta">
                        <span className="date">Specialty: {specialty}</span>
                    </div>
                    <div className="description">
                        Highest Medal Earned: {medal}
                    </div>
                    </div>
                    <div className="extra content">
                    <a>
                        <i className="left floated balance scale icon"></i>
                        <span className="left floated">{weight} lbs </span>
                        <button className="ui middle aligned" onClick={this.showHide}>Hide</button>
                        {greased ? <img className="right floated" id="grease-icon" width="30" height="30" src={greaseIcon}/> : <i className="right floated tint icon"></i>} <br/>
                    </a>
                    </div>
                </div>
            </div>
        );
        }
}

export default HogCard;
