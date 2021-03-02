import React, { useEffect, useState } from 'react';
import User from './User/User';

const Users = () => {
    const [userData, setUserData] = useState([])
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
            .then(res => res.json())
            .then(data => setUserData(data.results))
    }, [])

    const addMember = (name) => {
        setTeam([...team, name])
    }
    return (
        <div className="container">
            <h3>Team Build</h3>
            <div style={{width: '45%'}} className="border rounded ">
                <ul className="list-group">
                    {
                        team.map(man => <li className="list-group-item">{man}</li>)
                    }
                </ul>
            </div>
            <div className="row">
                {
                    userData.map(user => <User addMember={addMember} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;