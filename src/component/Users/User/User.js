import React from 'react';
import './User.css'

const User = (props) => {
    console.log(props)
    const { name, email, phone, picture } = props.user;

    return (
        <div style={{width: '500px'}} className="d-flex border m-3 rounded-3">
            <div className="p-2 rounded">
                <img className="img-thumbnail rounded" src={picture.large}/>
            </div>
            <div className="p-2">
                <h5>Name : {name.title + '.' + name.first + ' ' + name.last}</h5>
                <p>Email : {email}</p>
                <p>Learn about me</p>
                <p>Phone : </p>
                <button className="btn btn-info">ADD</button>
            </div>
        </div>
    );
};

export default User;