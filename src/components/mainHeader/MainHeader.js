import { Link } from 'react-router-dom';
import nuts1 from '../resources/img/mainPage/nuts1.png'
import nuts2 from '../resources/img/mainPage/nuts2.png'
import './mainHeader.scss'

const MainHeader = () => {
    return (
        <div className='mainBg'>
            
            <nav className='mainBg__nav'>
                <div>
                    <img src={nuts1} alt="nut1" />
                    <Link to='/'>Coffy house</Link>
                </div>

                <Link to='/ourcoffee'>Our coffee</Link>
                <Link to='/'>For your pleasure</Link>
            </nav>

            <div className='mainBg__text'>

                <div className='mainBg__grid'>
                    <h1>Everything You Love About Coffee</h1>
                    <div className='mainBg__text__span'>
                        <span></span>
                        <img src={nuts2} alt="nuts2" />
                        <span></span>
                    </div>
                </div>

                <div className='mainBg__grid'>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>

                    <button>More</button>
                </div>

            </div>
        </div>
    )
}

export default MainHeader