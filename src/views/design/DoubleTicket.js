import React from 'react'

function DoubleTicket({amount, onClick, disabled}) {
    return (
        <>
		<div className="numberCircle">{amount}</div>
       
<svg height={35} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.4 70.9">
    <path class="black-st0" disabled={disabled} d="M7.8 69.8c-3.6 0-6.4-2.9-6.4-6.4V18.8c0-3.6 2.9-6.4 6.4-6.4h87.1c3.6 0 6.4 2.9 6.4 6.4v44.5c0 3.6-2.9 6.4-6.4 6.4H7.8z"/>
    <g>
	<path class="tram-st0" d="M51.3,41.1l0-28.7h43.5c3.6,0,6.4,2.9,6.4,6.4v22.3H51.3z"/>
	<path class="bus-st0" d="M1.4,41.1V18.8c0-3.5,2.8-6.4,6.4-6.4h43.5v28.7H1.4z"/>
	<path class="train-st0" d="M101.3,41.1v22.3c0,3.5-2.8,6.4-6.4,6.4H51.4l0-28.7H101.3z"/>
	<path d="M51.3,41.1v28.7H7.8c-3.6,0-6.4-2.9-6.4-6.4V41.1H51.3z"/>
    </g>
    <path class="ticket-st1" d="M94.9,12.7c3.4,0,6.1,2.7,6.1,6.1v44.5c0,3.4-2.7,6.1-6.1,6.1H7.8c-3.4,0-6.1-2.7-6.1-6.1V18.8
	c0-3.4,2.7-6.1,6.1-6.1L94.9,12.7 M94.9,11.9H7.8C4.1,11.9,1,15,1,18.8v44.5c0,3.8,3.1,6.8,6.8,6.8h87.1c3.8,0,6.8-3.1,6.8-6.8V18.8
	C101.7,15,98.7,11.9,94.9,11.9L94.9,11.9z"/>
    <g>
	<rect x="29" y="24.5" fill="none" width="58.8" height="33.1"/>
	<text transform="matrix(1 0 0 1 28.9784 54.5286)" class="st8 st9 st10">2x</text>
</g>
	
    <path class="ticket-overlay" d="M7.8 69.8c-3.6 0-6.4-2.9-6.4-6.4V18.8c0-3.6 2.9-6.4 6.4-6.4h87.1c3.6 0 6.4 2.9 6.4 6.4v44.5c0 3.6-2.9 6.4-6.4 6.4H7.8z"/>
    </svg>
    </>

            
       
    )
}

export default DoubleTicket
