import PropTypes from 'prop-types';
import React from 'react';

const Menu = props => <AppBar
    title="Clarifai"
    onTitleClick={props.goHome}
    iconElementRight={<FlatButton label="Show stuff" />}
    onRightIconButtonClick={props.onClick}
/>
Menu.propTypes = {
 goHome: PropTypes.func.isRequired
}

Menu.defaultProps = {
 goHome: () => console.log('going home')
}

export default Menu;