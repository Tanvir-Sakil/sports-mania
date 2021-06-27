import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css';
import background from './UEFA1.jpg'
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {


    const [leagues,setLeagues] = useState([])

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')

        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(2,14)))
    }, [])

   return (

 
        <div>

        <div className = "banner" style = {
              {
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
            
              }
            }>
            <div className ="heading">
                 <h1>UEFA CHAMPIONS LEAGUE</h1>
            </div>
          </div>

        <div className = "Home">
        
        {

            leagues.map(leagues => <Leagues leagues ={leagues}></Leagues>)
        }
        
        
        
        </div>
        </div>
   );


};

export default Home;