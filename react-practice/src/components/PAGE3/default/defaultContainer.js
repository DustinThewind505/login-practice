import React, { useState, useEffect } from 'react';
import Form1 from './forms/username';




function DefaultFormContainer(props) {
    // ========== STATE ==========
    


    // ========== FUNCTIONS ==========



    // ========== COMPONENTS ==========
    return (
        <>
        <img src='https://miro.medium.com/max/1000/1*4Apu-JRlee0VEJbQDplgPg.png' alt='yup logo' />
        <div className='forms-page-container'>
            <Form1 setDisplayForm={props.setDisplayForm}/>
        </div>
        </>
    )
}

export default DefaultFormContainer;