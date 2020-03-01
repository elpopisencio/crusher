import React from 'react'

export default function Tab({ animated, type, name }) {
    const time = .3
    return (
        <div style={{ width: '20vw', height: '20vw', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={name} style={{ width: '70%', height: '70%', animation: `fall ${time}s ease-in 0s` }} />
        </div>
    )
}
