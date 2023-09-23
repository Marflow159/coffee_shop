import { Link } from 'react-router-dom';

import nuts1 from '../resources/img/mainPage/nuts1.png'
import './ourCoffeeHeader.scss'

const OurCoffeeHeader = () => {
    return(
        <div className='ocHeader'>
            <nav className='mainBg__nav'>
                <div>
                    <img src={nuts1} alt="nut1" />
                    <Link to='/'>Coffy house</Link>
                </div>

                <Link to='/ourcoffee'>Our coffee</Link>
                <Link to='/'>For your pleasure</Link>
            </nav>
            <h1>Our Coffee</h1>
        </div>
    )
}

export default OurCoffeeHeader;