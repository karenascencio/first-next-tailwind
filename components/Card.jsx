import React, { useState } from 'react'
import classnames from 'classnames'
//My components
import Button from './Button'

export default function Card({name, email, phone}) {
    const [show, setShow] = useState(true)
    return (
        <>
            { show &&
                <div className={classnames( "border border-black-600", "m-2 p-2 inline-block")}>
                <h2 className={classnames("text-lg text-center")}></h2>
                <p>{ email }</p>
                <p>{ phone }</p>
                <Button text='delete' setShow={setShow} />
            </div>
            }
        </>
    )
}
