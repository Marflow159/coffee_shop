import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import nuts3 from '../resources/img/mainPage/nuts3.png'
import coffyService from "../../service/coffyService";
import Spinner from "../spinner/Spinner";

import './ourCoffeeAboutIt.scss'

const OurCoffeeAboutIt = () => {
    const { coffyId } = useParams();
    const [content, setContent] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        coffyService.forEach(e => {
            if (e.id === coffyId) {
                setContent(e)
            }
        })
        setLoading(false)
    }, [coffyId])

    return (
        <>
            {loading ? <Spinner /> : <View content={content} />}
        </>
    )
}

const View = ({ content }) => {
    return (
        <div className="ourCoffeeAI">
            <img src={`../${content.img}`} alt={content.name} />

            <div className="ourCoffeeAI__about">
                <h2>About it</h2>

                <div className='mainAu__span'>
                    <span></span>
                    <img src={nuts3} alt="nuts3" />
                    <span></span>
                </div>

                <div>
                    <p><b>Country:</b> {content.country}</p>
                    <p><b>Description:</b> {content.description}</p>
                    <p><b>Price:</b><span> {content.price} </span></p>
                </div>
            </div>
        </div>
    )
}
export default OurCoffeeAboutIt;