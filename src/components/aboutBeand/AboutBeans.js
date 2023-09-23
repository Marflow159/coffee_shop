import './aboutBeans.scss'
import girl from '../resources/img/ourCoffy/girl.jpg'
import nuts3 from '../resources/img/mainPage/nuts3.png'

const AboutBeans = () => {
    return (
        <>
            <div className='aboutBeans'>
                <img src={girl} alt="girl" />
                <div className='aboutBeans__text'>
                    <h2>About our beans</h2>
                    <div className='mainAu__span'>
                        <span></span>
                        <img src={nuts3} alt="nuts3" />
                        <span></span>
                    </div>

                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel<br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                        is song that held help face.</p>

                </div>
            </div>
            <div className='line'>
                <span></span>
            </div>
        </>

    )
}

export default AboutBeans;