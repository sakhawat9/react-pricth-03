import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import './User.css'

const User = (props) => {
    const { name, email, phone, picture } = props.user;
    const addMember = props.addMember;
    const fullName = name.title + '.' + name.first + ' ' + name.last

    const [displayMobile, setDisplayMobile] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    const showPhoneNumber = () => setDisplayMobile(phone)
    // const 
    return (
        <div style={{width: '500px'}} className="d-flex border m-3 rounded-3">
            <div className="p-2 rounded">
                <img className="img-thumbnail rounded" src={picture.large}/>
            </div>
            <div className="p-2">
                <h5>Name : {fullName}</h5>
                <p>Email : {email}</p>
                <p>Learn about me</p>
                <p>Phone : {displayMobile}</p>
                
                <button onClick={showPhoneNumber} className="btn btn-info me-2">Sho Number</button>
                {/* <button onClick={() => addMember(fullName)} className="btn btn-info">ADD ME</button> */}
                <button disabled={isClicked} class=" btn btn-info" onClick={() => {
                        addMember(fullName)
                        setIsClicked(true)
                        }}>
                        {isClicked ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
                    </button>
                
            </div>
        </div>
    );
};

export default User;