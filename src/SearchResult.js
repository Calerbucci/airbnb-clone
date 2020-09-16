import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from '@material-ui/icons/Star'

function SeachResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
 }) {
    return (
        
        <div className='searchresult'>
            <img src={img} alt=''/>
            <FavoriteBorderIcon className='searchresult__heart'/>

            <div className='searchresult__info'>
                <div className='searchresult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>

                <div className='searchresult__infoBottom'>

                    <div className='searchresult__stars'> 
                        <StarIcon className='searchresult__star'/>
                            <p>
                                <strong> {star}</strong>
                            </p>
                    </div>
                        <div className='searchresult__price'>
                                <h2>{price}</h2>
                                <p>{total}</p>
                        </div>

                </div>

            </div>
            
        </div>
    )
}

export default SeachResult
