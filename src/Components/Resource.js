import React from 'react'
import "./Dashboard_css.css"
import Popup from 'reactjs-popup';
import { useState, useCallback } from 'react';

import "./Profile_new.js"
import logo from "./download.png"
export default function Resource() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = useCallback(() => {
        setIsPopupOpen((isOpen) => !isOpen);
    }, []);



    const resources = [
        {
            "name": "Gagan Bankey",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey1",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey2",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey3",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey4",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey5",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey6",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey7",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey8",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey9",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey10",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        },
        {
            "name": "Gagan Bankey11",
            "email": "gagan@gmail.com",
            "phone": "1234567890",
            "role": "Software Engineer",
            "bio": "feel free to contact i will be happy to help",
        }
    ]


    return (
        <>

            <hr style={{ marginTop: '0px' }} />

            <div className='elements card-grid'>


                {resources.map((val, key1) => {
                    return <div key={key1} className='new_card card-grid'>



                        <Popup trigger={<div className="card">

                            <div className="card-header">
                                <img src={logo} className="image" />
                                <h2>{val.name}</h2>
                            </div>
                            <div className="card-body">
                                <h3>{val.role}</h3>
                            </div>
                        </div>} modal position="right center">
                            <div className='popup'>

                                <div> <span className='name'>Name</span> : {val.name} </div>
                                <hr />
                                <div><span className='name'>Email</span>  : {val.email} </div>
                                <hr />

                                <div><span className='name'>Phone</span>  : {val.phone} </div>
                                <hr />

                                <div> <span className='name'>Role</span>  : {val.role} </div>
                                <hr />

                                <div> <span className='name'>Bio</span> : {val.bio} </div>

                            

                            </div>
                        </Popup>

                    </div>



                })}


            </div></>
    )
}
