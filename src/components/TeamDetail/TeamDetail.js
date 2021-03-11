import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faTransgender, faFutbol } from '@fortawesome/free-solid-svg-icons'
import img from './img/male.png'
import facebook from './img/Facebook.png'
import twitter from './img/Twitter.png'
import youtube from './img/YouTube.png'

const TeamDetail = () => { 
    const [teamDetail, setTeamDetail] = useState([])
    const {teamId} = useParams()
    useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setTeamDetail(data.teams[0]));
    }, [teamId])
    
    return (
        <div>
            <div className='team-detail-container'>
            <img className='team-badge' src={teamDetail.strTeamBadge} alt=""/>
            </div>
            <div className='container bg-color'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='m-3 p-3 card-title'>{teamDetail.strTeam}</h1>
                        <h6 className='m-3'><span className='m-3'><FontAwesomeIcon icon={faMapMarkerAlt} /></span> <big> Founded : {teamDetail.intFormedYear}</big></h6>
                        <h6 className='m-3'><span className='m-3'><FontAwesomeIcon icon={faFlag} /></span> <big> Country : {teamDetail.strCountry}</big></h6>
                        <h6 className='m-3'><span className='m-3'><FontAwesomeIcon icon={faFutbol} /></span> <big> Sport Type : {teamDetail.strSport}</big></h6>
                        <h6 className='m-3'><span className='m-3'><FontAwesomeIcon icon={faTransgender} /></span> <big> Gender : {teamDetail.strGender}</big></h6>
                    </div>
                    <div className='col-md-6 team-img'>
                        <img className='imd-fluid' src={img} alt=""/>
                    </div>

                </div>
            </div>
            <div className='container team-description mt-3'>
                    <p className='text-white'>{teamDetail.strDescriptionEN}</p>

                </div>
            <div className='container social-icons'>
                <a href={teamDetail.strFacebook}><img src={facebook} alt=""/></a>
                <a href={teamDetail.strTwitter}><img src={twitter} alt=""/></a>
                <a href={teamDetail.strYoutube}><img src={youtube} alt=""/></a>
            </div>    
        </div>
    );
};

export default TeamDetail;