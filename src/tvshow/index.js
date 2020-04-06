import React, { Component } from 'react';
import "./tvshow.css";
import emailIcon from './Email.png';
import Inquiry from './Inquiry';

class tvshow extends Component {
    state = { inquiryShown: false }

    inquiryToggle = () => {
        this.setState({ inquiryShown: !this.state.inquiryShown })
      }

    render() {
        const tvshow = this.props.tvshow;
        const inquiry = this.state.inquiryShown ?
            <Inquiry tvshow={tvshow} /> : null;
        return (
        <div>
            <div className="row mt-2">
                <h3 className="col-md-12">{tvshow.name}</h3>
            </div>

            <div className="row">
                <div className="col-md-7">
                    <img src={tvshow.photo} width="100%" alt="Tv Show" />
                </div>
                <div className="col-md-5">
                    <p>Genre: {tvshow.genre}</p>
                    <p>Status: {tvshow.status}</p>
                    <p>Seasons: {tvshow.seasons}</p>

                    <p className="rating">{tvshow.rating}</p>
                    <p>{tvshow.description}</p>
                    <img className="email" src={emailIcon} height="50" alt="inquiry"
                        onClick={this.inquiryToggle} />
                    {inquiry}
                </div>
            </div>
        </div>
        )
    }
}

export default tvshow;
