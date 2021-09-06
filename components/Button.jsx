import classNames from 'classnames'
import React, { useState } from 'react'

export default function Button({text = '', setShow}) {
    const handleClick = () => {
        setShow(false)
    }
    return (
        <button className={classNames(
            'bg-blue-300',
            'px-4 py-2',
            'rounded'
        )}
            onClick={ handleClick }>
            {text}
        </button>
    )
}
