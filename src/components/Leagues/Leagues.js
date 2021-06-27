import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './Leagues.css'

const Leagues = (props) => {
    const {strLeague,strSport,idLeague }=props.leagues
    
    const [league, setLeague] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then (data => setLeague(data.leagues[0]))
    }, [idLeague])

    const {strLogo}=league;


    return (

        
        <div>
        <Card style={{ width: '18rem' ,margin : '10px' ,border:'3px solid gray' ,backgroundColor : '#C19A6B' }}>
        <Card.Img variant="top" src={strLogo} />
        <Card.Body>
          <Card.Title style= {{color : 'white'}}>{strLeague }</Card.Title>
          <Card.Text style= {{color : 'white'}}>
            Sports type:{strSport} 
          </Card.Text>
          <Button variant="outline-success" style= {{background :'#FFEF00'}}>  <Link to={`/leagues/${idLeague}`} >Explore <FontAwesomeIcon icon={faArrowRight}/></Link>  </Button>
      
        </Card.Body>
      </Card>
        
            
        </div>
    );
};

export default Leagues;