import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
            <ul className='flex justify-between font-bold text-5xl py-5'>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/Apropos">Apropos</Link></li>
                <li><Link to="/Faireundon">Faireundon</Link></li>

            </ul>
        </nav>
    )
}