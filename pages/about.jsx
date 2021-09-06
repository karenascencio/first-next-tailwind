import React, { useState } from 'react'
import classnames from 'classnames'
//My components
import Button from '../components/Button'
import Card from '../components/Card'
//Data
import Devs from '../config/devs.json'

export default function about() {
    return (
        <div>
            <h1> Acerca de nosotros </h1>
            <div className={classnames('bg-pink-100')}>
                <Button text='click me'/>
            </div>
            <div>
                {
                    Devs.devs.map((dev, index) => ( 
                        <Card 
                            key={`dev-${index}`}
                            name={dev.name}  
                            email={dev.email} 
                            phone={dev.phone} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
