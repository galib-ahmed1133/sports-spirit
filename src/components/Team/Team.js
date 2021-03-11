import React from "react";
import { CardDeck, Card, Container, Row, Col } from "react-bootstrap";
import leagueStyle from './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";

const League = (props) => {
  const { idTeam, strTeam, strSport, strTeamBadge } = props.team;
  const history = useHistory();
  const exploreDetails = id =>{
    const url = `team/${idTeam}`;
    history.push(url);
  }
  return (
        <Col md={3}>
        <Card className='card-style text-center'>
          <Card.Body>
            <Card.Img variant="top" src={strTeamBadge} /> 
            <Card.Title className='card-title'>{strTeam}</Card.Title>
            <Card.Text>
             Sports Type : {strSport}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button onClick={() => exploreDetails() } className='btn' > <span> Explore </span> <span> <FontAwesomeIcon icon={faLongArrowAltRight} /> </span> </button>
          </Card.Footer>
        </Card>
        </Col>
  );
};

export default League;
