import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';
import homeCSS from './Home.css'

const Home = () => {
    const [team, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))

    }, [])
    return (
        <div className='main'>
            <Header></Header>
            <div className='container'>
            <div className='row card-style'>
            {
                team.map(team => <Team team={team}></Team>)
            }
            </div>

            </div>
            
        </div>
    );
};

export default Home;