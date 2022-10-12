import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h3>React Simple Website</h3>
            </div>

            <nav>
                <ul>
                    <li className='first'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='last'>
                        <a href='#'>SNS</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header