import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult'


function SearchPage() {
    return (
        <div className='searchpage'>
           <div className='searchPage__info'>

               <p> 62 stays . 26 august to 30 august . 2 guest</p>
               <h1>Stays Nearby </h1>
               <Button variant='outlined'>Cancellation Flexibility</Button>
               <Button variant='outlined'>Type of place</Button>
               <Button variant='outlined'> Price</Button>
               <Button variant='outlined'>Rooms and beds</Button>
               <Button variant='outlined'>More filters</Button>
           </div>

           <SearchResult 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQStLSMKRJ3hmGNWMtO5UrsaGqNMQGcRrN2xg&usqp=CAU'
            location='Private room in London'
            title='Stay at this spacious Edwardian House'
            description='1 guest。 1 bed 。 1.5 shared bathrooms. wifi . Kitchen . Free parking. Washing Machine'
            star={4.72}
            price='$30/night'
            total='$117 total'
            />
            
            <SearchResult 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtcBSDHjiAhC2IVN43SKAzPNVtEyRq3gqEdg&usqp=CAU'
            location='Independant luxury studio appartment'
            title='Stay at this spacious Edwardian House'
            description='1 guest。 1 bed 。 1.5 shared bathrooms. wifi . Kitchen . Free parking. Washing Machine'
            star={4.72}
            price='$60/night'
            total='$117 total'
            />

            <SearchResult 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJD-MDHdFg8ixYsoStZ2OghnqINvT0V-qTeg&usqp=CAU'
            location='Private room in London'
            title='The blue room in London'
            description='1 guest。 1 bed 。 1.5 shared bathrooms. wifi . Kitchen . Free parking. Washing Machine'
            star={4.72}
            price='$55/night'
            total='$117 total'
            />
            

            
        </div>
    )
}

export default SearchPage
