import React from 'react';
import PropTypes from 'prop-types';

const SwitcherButton = ({season, switcherButtonClickHandler}) =>
    <button
        data-season={season}
        onClick={switcherButtonClickHandler}>
        {season}
    </button>;

SwitcherButton.propTypes = {
    season: PropTypes.string.isRequired,
    switcherButtonClickHandler: PropTypes.func.isRequired,
};

export default SwitcherButton;