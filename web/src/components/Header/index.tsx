import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header: React.FC = () => {

    return (
        <header className="main-header">
            <Link to="/" id="logo">hangory</Link>
        </header>
    )

}

export default Header;