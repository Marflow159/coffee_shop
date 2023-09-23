import { Link } from 'react-router-dom';

import './footer.scss'
import nuts4 from '../resources/img/mainPage/nuts4.png'
import nuts3 from '../resources/img/mainPage/nuts3.png'


const Footer = () => {
    return (
        <div className='footer'>
            <nav className='mainBg__nav'>
                <div>
                    <img src={nuts4} alt="nut1" />
                    <Link to='/'>Coffy house</Link>
                </div>

                <Link to='/ourcoffee'>Our coffee</Link>
                <Link to='/'>For your pleasure</Link>
            </nav>

            <div className='mainAu__span'>
                <span></span>
                <img src={nuts3} alt="nuts3" />
                <span></span>
            </div>
        </div>
    )
}

export default Footer;