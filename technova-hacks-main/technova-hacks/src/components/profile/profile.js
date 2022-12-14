import React, {useState} from "react";
import './profile.scss';
import button from './Subtract.svg';
import addedButton from './add.svg';

const Profile = ({ name, school, email, year, program, add }) => {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        console.log(added);
        setAdded(!added)

    };
    
        
    return (
        <div className='profile'>
            {add && <button onClick={handleClick} className="__button">
            {added ? <img className='__button' src={addedButton} alt="add"></img> : 
                        <img className='__button' src={button} alt="add"></img>
            }

               </button> }
            <div className='__name'>{name}</div>
            <div className='__text'>{school}</div>
            <div className='__text'>{email}</div>
            <div className='__text'>{year} Year {program}</div>

        </div>
    );
};

export default Profile;

{/* <Profile
        name={'Maryam'}
        school={'University of Waterloo'}
        email="m5afsh@uwaterloo.ca"
        year="2nd"
        program="Computer Science"
        add='true'
       
        ></Profile> */}