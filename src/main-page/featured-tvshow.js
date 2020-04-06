import React from 'react';
import Tvshow from '../tvshow';

const FeaturedTvshow = (props) => {
    if (props.tvshow) return (
        <div>
            <div className="row featuredTvshow">
                <h3 className="col-md-12 text-center">
                    Featured TV show
                </h3>
            </div>
            <Tvshow tvshow={props.tvshow} />
        </div>)
    return (<div>No featured TV show at this time</div>)
}

export default FeaturedTvshow;
