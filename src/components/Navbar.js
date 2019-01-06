import React, {Component} from 'react';
import Layer2 from '../Files/Layer 2.png';


class Navbar extends Component {
    render() {
        return (
            <div className='nav_div'>
                <div className='left_section'>
                    <div>Blog <b>Template</b></div>
                </div>
                <div className='central_section'>
                    <ul>
                        <li>Nature</li>
                        <li>People</li>
                        <li>Trips</li>
                        <li>Animals</li>
                        <li>Tech</li>
                    </ul>


                </div>
                <div className='right_section'>
                    <img src={Layer2} alt=""/>
                    <ul>
                        <li>About</li>
                        <li>Cooperation</li>
                        <li>Contakt</li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Navbar;