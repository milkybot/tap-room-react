import React from 'react';
import PropTypes from 'prop-types';

function Beers(props){
    const beersInformation =
        <div>
            <h3>{props.name}</h3>
            <h4>{props.brand}</h4>
            <h5>$ {props.price}</h5>
            <h5>{props.alcoholContent}%</h5>
            <h6><button onClick="javascript:(function(){Object.keys(props.beersList).delete({props.selectedBeers.key})})()"></button></h6>

        </div>;
    if (props.currentRouterPath === '/admin') {
        return (
            <div>
                {beersInformation}
            </div>
        );
    } else {
        return (
            <div>
                {beersInformation}
            </div>
        );
    }
}

Beers.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alcoholContent: PropTypes.number.isRequired,
    currentRouterPath: PropTypes.string,
    onBeersSelection: PropTypes.func,
    beersId: PropTypes.string.isRequired
};

export default Beers;