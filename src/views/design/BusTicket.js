import React from 'react'

function BusTicket({amount, onClick, disabled}) {
    return (
       
<svg height={35} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.4 70.9">
    <path class="bus-st0" disabled={disabled} d="M7.8 69.8c-3.6 0-6.4-2.9-6.4-6.4V18.8c0-3.6 2.9-6.4 6.4-6.4h87.1c3.6 0 6.4 2.9 6.4 6.4v44.5c0 3.6-2.9 6.4-6.4 6.4H7.8z"/>
    <path class="ticket-st1" d="M100.9 2.2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-5.5 0-10-4.5-10-10S95.4 2.2 100.9 2.2M100.9 1.5c-5.9 0-10.7 4.8-10.7 10.7S94.9 23 100.9 23c5.9 0 10.7-4.8 10.7-10.7S106.8 1.5 100.9 1.5L100.9 1.5z"/>
    <g>
		<path class="ticket-st1" d="M65.5,46.8c-1.9,0-3.5,1.6-3.5,3.5c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5C69,48.4,67.4,46.8,65.5,46.8z
			 M65.5,52.2c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9s1.9,0.8,1.9,1.9C67.3,51.4,66.5,52.2,65.5,52.2z"/>
		<path class="ticket-st1" d="M34.2,46.8c-1.9,0-3.5,1.6-3.5,3.5c0,1.9,1.6,3.5,3.5,3.5c1.9,0,3.5-1.6,3.5-3.5
			C37.8,48.4,36.2,46.8,34.2,46.8z M34.2,52.2c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9
			C36.1,51.4,35.3,52.2,34.2,52.2z"/>
		<path class="ticket-st1" d="M78.4,31.2c-0.1-0.3-0.4-0.6-0.8-0.6h-2.8l-0.4-1.3v0l-0.3-0.9c0,0,0,0,0-0.1c-0.6-1.7-2.3-2.9-4.1-2.9H25.2
			c-1.2,0-2.1,1-2.1,2.1v21.4c0,1.2,1,2.1,2.1,2.1h2.9c0.4,3,3,5.4,6.2,5.4s5.8-2.4,6.2-5.4h18.9c0.4,3,3,5.4,6.2,5.4
			s5.8-2.4,6.2-5.4h4.2c1.2,0,2.1-1,2.1-2.1v-5.7v-0.1c0-2.1-0.4-4.1-1.1-6l-1.5-5H77l1.1,3.4c0.1,0.4,0.4,0.6,0.8,0.6
			c0.6,0,1-0.5,0.8-1.1L78.4,31.2z M76.2,42.6h-4.5c-0.3,0-0.7-0.1-1-0.3c-1.3-1-2.8-2.2-4.1-3.3c-0.2-0.1-0.4-0.3-0.5-0.4v-8.2h7
			c0.2,0.7,1.9,6.5,2.2,7.4C75.3,38.1,76.1,39.9,76.2,42.6L76.2,42.6z M55.6,38.2v-1.9c0-0.5-0.4-0.8-0.8-0.8
			c-0.5,0-0.8,0.4-0.8,0.8v1.9h-1.5v-7.8h1.5v2c0,0.5,0.4,0.8,0.8,0.8c0.5,0,0.8-0.4,0.8-0.8v-2h5.7v7.8H55.6z M45.1,38.2v-7.8h5.7
			v7.8H45.1z M34.6,38.2v-7.8h5.7v7.8H34.6z M24.7,38.2v-7.8h5.1v7.8H24.7z M31.5,30.4H33v7.8h-1.5V30.4z M42,30.4h1.5v7.8H42V30.4z
			 M62.9,30.4h1.5v7.8h-1.5V30.4z M24.7,27.6c0-0.3,0.2-0.5,0.5-0.5H70c1.1,0,2.1,0.6,2.5,1.6c-3.2,0-46,0-47.9,0L24.7,27.6
			L24.7,27.6z M34.2,54.9c-2.5,0-4.6-2-4.6-4.6c0-2.5,2-4.6,4.6-4.6s4.6,2,4.6,4.6C38.8,52.9,36.7,54.9,34.2,54.9z M65.5,54.9
			c-2.5,0-4.6-2-4.6-4.6c0-2.5,2-4.6,4.6-4.6c2.5,0,4.6,2,4.6,4.6C70,52.9,68,54.9,65.5,54.9z M75.8,49.5h-4.1
			c-0.4-3.1-3.1-5.4-6.2-5.4c-3.2,0-5.8,2.4-6.2,5.4H40.4c-0.4-3-3-5.4-6.2-5.4c-3.2,0-5.8,2.4-6.2,5.4h-2.9c-0.3,0-0.5-0.2-0.5-0.5
			v-6h22.9c0.5,0,0.8-0.4,0.8-0.8s-0.4-0.8-0.8-0.8H24.7v-1.5h39.9c0.3,0,0.7,0.1,1,0.3l1.5,1.2H51.4c-0.5,0-0.8,0.4-0.8,0.8
			s0.4,0.8,0.8,0.8h17.7l0.5,0.4c0.6,0.5,1.3,0.7,2,0.7h4.6v4.8C76.2,49.3,76,49.5,75.8,49.5L75.8,49.5z"/>
	</g>
    
    <path class="ticket-overlay" d="M7.8 69.8c-3.6 0-6.4-2.9-6.4-6.4V18.8c0-3.6 2.9-6.4 6.4-6.4h87.1c3.6 0 6.4 2.9 6.4 6.4v44.5c0 3.6-2.9 6.4-6.4 6.4H7.8z"/>
    <path class="ticket-st2" d="M100.9 22.6c-5.7 0-10.4-4.7-10.4-10.4s4.7-10.4 10.4-10.4 10.4 4.7 10.4 10.4S106.6 22.6 100.9 22.6z"/>
    <rect x="94" y="7.5"  class="ticket-st3" width="13.7" height="9.4"/><text text-anchor="middle"x="100" y="13"  alignment-baseline="central" class="ticket-st1 ticket-st4 ticket-st5">  {amount}</text>
    </svg>

            
       
    )
}

export default BusTicket