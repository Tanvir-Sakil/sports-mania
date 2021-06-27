import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from './Male.jpg'
import Female from './Female.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import './LeagueDetail.css'

const LeagueDetail = () => {

    

   
    const {idLeague} = useParams();

    const[league,setLeague] =useState([])

    useEffect(() => {
        
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]));
    }, [idLeague])

    const {strLeague,intFormedYear,strTrophy,strSport,strCountry,strBadge,strGender,strBanner,strDescriptionEN}=league;
    
    let genderImg;


    if(league.strGender==='Male')
    {

        genderImg = Male;
    }

    else
    {
        genderImg = Female;
    }


    return (
        <div className ="LeagueDetail">

        <div className = "banner-badge">
        <div className = "banner-dynamic" style= {{backgroundImage: `url(${strBanner})`}}>
        <img alt= "Badge" src ={strBadge}/>
        <img alt = "trophy" src ={strTrophy}/>

        </div>
        </div>

        <div className = "main-div">

        <div className = "explore-details">
        
        <div className = "top-detail">

          <div className = "details">
                <h2>{strLeague}</h2>
                <p> <FontAwesomeIcon icon={faThumbtack}/> Founded: {intFormedYear}</p>
                <p> <FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
                <p> <FontAwesomeIcon icon={faFutbol}/> Sport type:{strSport}</p> 
                <p> <FontAwesomeIcon icon={faMars}/> Gender:{strGender}</p>
            </div>
           <div>
                <img alt = "" className = "genderImage" src= {genderImg}/>
           </div>
        </div>
            <div className="description">
                 <p>{strDescriptionEN}</p>
                <p>{strDescriptionEN}</p>
             </div>        

           <div className="icons" >
               <div className="icon-sizing" >
                     <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare}/></a>           
               </div>
               <div className="icon-sizing">
                     <a href="https://www.youtube.com/"> <FontAwesomeIcon icon={faYoutube}/></a>
               </div>
               <div className="icon-sizing">
                     <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook}/></a>
               </div>      
           </div>

         
           </div>
         </div>  
     </div>
            
    );
};

export default LeagueDetail;