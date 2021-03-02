import React, { useEffect, useState } from 'react';
import User from './User/User';

const Users = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => setUserData(data.results))
        
    }, [])
    return (
        <div>
            <h3>Team Build</h3>
            {
                userData.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Users;