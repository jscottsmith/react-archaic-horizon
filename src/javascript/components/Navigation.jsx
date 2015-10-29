import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Navigation extends React.Component {
    render () {
        var isActive = this.context.history.isActive;
        var homeClass = isActive('/') ? 'selected' : '';
        var aboutClass = isActive('/about') ? 'selected' : '';
        var releasesClass = isActive('/releases') ? 'selected' : '';
        return (
            <header>
                <h1>Archaic Horizon</h1>
                <nav>
                    <ul className="nav-links">
                        <li className={homeClass}><Link to="/">Home</Link></li>
                        <li className={aboutClass}><Link to="/about">About</Link></li>
                        <li className={releasesClass}><Link to="/releases">Releases</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

Navigation.contextTypes = {
    history: PropTypes.object.isRequired
};
