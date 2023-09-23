import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ourCoffeeFilter.scss'
import coffyService from '../../service/coffyService'

const OurCoffeeFilter = () => {
    const [valueFilt, setValueFilt] = useState('')
    const [filter, setFilter] = useState('all')

    const buttonsData = [
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' }
    ];

    const searchCoffee = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    const buttons = buttonsData.map(({ name, label }) => {
        const active = filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    const filterCoffee = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items
        }
    }

    const onFilterSelect = (name) => {
        if (filter === name) {
            setFilter('all')
        } else {
            setFilter(name)
        }
    }

    const onUpdateSearch = (e) => {
        setValueFilt(e)
    }

    const visibleData = filterCoffee(searchCoffee(coffyService, valueFilt), filter);

    const content = visibleData.map((coffy) => {
        return (
            <Link key={coffy.id} to={`/ourcoffee/${coffy.id}`}>
                <div  className="coffy">
                    <img src={coffy.img} alt={coffy.name} />
                    <p>{coffy.name}</p>
                    <div>
                        <p>{coffy.country}</p>
                    </div>
                    <div>
                        <p><b>{coffy.price}</b></p>
                    </div>
                </div>
             </Link>

        )
    })

    return (
        <div className='filter'>
            <div className='filter__f'>
                <div>
                    <label htmlFor="filter">Lookiing for</label>
                    <input
                        type="text"
                        name='filter'
                        id='filter'
                        placeholder='start typing here...'
                        onChange={(e) => onUpdateSearch(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="">Or filter</label>
                    <div>
                        {buttons}
                    </div>

                </div>
            </div>
            <div className='filter__coffy'>
                {content}
            </div>
        </div>
    )
}

export default OurCoffeeFilter;