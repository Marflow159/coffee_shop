import coffyService from "../../service/coffyService";

import './mainOurBest.scss'

const MainOurBest = () => {
    const content = coffyService.map((coffy) => {
        return (
            <div key={coffy.name} className="coffy">
                <img src={coffy.img} alt={coffy.name} />
                <p>{coffy.name}</p>
                <div>
                    <p><b>{coffy.price}</b></p>
                </div>
            </div>
        )
    })

    return (
        <div className="mainOb">
            <h2>Our best</h2>
            <div className="mainOb__coffy">
                {content}
            </div>
        </div>
    )
}

export default MainOurBest;