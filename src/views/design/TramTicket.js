import React from 'react'

function TramTicket({amount, onClick, disabled}) {
    return (
        <>
        <div className="numberCircle">{amount}</div>
       
<svg height={35} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.4 70.9">
    <path class="tram-st0" disabled={disabled} d="M7.8 69.8c-3.6 0-6.4-2.9-6.4-6.4V18.8c0-3.6 2.9-6.4 6.4-6.4h87.1c3.6 0 6.4 2.9 6.4 6.4v44.5c0 3.6-2.9 6.4-6.4 6.4H7.8z"/>
    <path class="ticket-st1" d="M79.7 46C79.7 46 79.7 46 79.7 46 79.7 46 79.7 45.9 79.7 46c0-0.1 0-0.1 0-0.1 0 0 0 0 0-0.1 0 0 0 0 0 0l-1.1-4.3c-0.1-0.4-0.6-0.7-1-0.6 -0.4 0.1-0.7 0.6-0.6 1l0.8 3.2h-9.3v-8.3h7.1l0.4 1.7c0.1 0.4 0.6 0.7 1 0.6 0.4-0.1 0.7-0.6 0.6-1l-0.6-2.2v-3.2c0-0.5-0.4-0.8-0.8-0.8H57.2v-2.5c0-0.5-0.4-0.8-0.8-0.8h-1.9l4.7-2.9c0.5-0.3 0.7-0.8 0.7-1.3 0-0.5-0.3-1-0.7-1.3l-7-4.3c-0.5-0.3-1.1-0.3-1.6 0l-2 1.2c-0.4 0.2-0.5 0.8-0.3 1.1 0.2 0.4 0.8 0.5 1.1 0.3l1.9-1.2 6.7 4.1 -6.7 4.1 -6.7-4.1 1.9-1.2c0.4-0.2 0.5-0.8 0.3-1.1 -0.2-0.4-0.8-0.5-1.1-0.3l-2.1 1.3c-0.5 0.3-0.7 0.8-0.7 1.3 0 0.5 0.3 1 0.7 1.3l4.7 2.9h-1.9c-0.5 0-0.8 0.4-0.8 0.8v2.5H26.4c-0.5 0-0.8 0.4-0.8 0.8v3.2L23 45.8c0 0 0 0 0 0 0 0 0 0 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0v13.3c0 0.5 0.4 0.8 0.8 0.8h4.7c0.9 2 2.8 3.3 5.1 3.3s4.2-1.3 5.1-3.3h1.7c0.9 2 2.8 3.3 5.1 3.3 2.2 0 4.2-1.3 5.1-3.3h1.7c0.9 2 2.8 3.3 5.1 3.3 2.2 0 4.2-1.3 5.1-3.3h1.7c0.9 2 2.8 3.3 5.1 3.3 2.2 0 4.2-1.3 5.1-3.3h4.7c0.5 0 0.8-0.4 0.8-0.8L79.7 46C79.7 46 79.7 46 79.7 46zM47.2 30.2h4.1c0 0 0 0 0 0s0 0 0 0h4.1v1.7h-8.3V30.2zM27.3 33.6h48.2v1.7H27.3C27.3 35.2 27.3 33.6 27.3 33.6zM66.9 36.9v8.3h-9.2v-8.3H66.9L66.9 36.9zM56 36.9v8.3h-9.2v-8.3H56L56 36.9zM27.1 36.9h7.1v8.3h-9.3L27.1 36.9zM33.6 61.8c-1.3 0-2.5-0.6-3.2-1.7h6.4C36.1 61.2 34.9 61.8 33.6 61.8zM45.4 61.8c-1.3 0-2.5-0.6-3.2-1.7h6.4C47.9 61.2 46.7 61.8 45.4 61.8zM57.3 61.8c-1.3 0-2.5-0.6-3.2-1.7h6.4C59.8 61.2 58.6 61.8 57.3 61.8zM69.1 61.8c-1.3 0-2.5-0.6-3.2-1.7h6.4C71.6 61.2 70.5 61.8 69.1 61.8zM78.1 58.5H24.7v-1.7h53.4V58.5zM78.1 55.2H24.7v-8.3h13.1c0.5 0 0.8-0.4 0.8-0.8 0-0.5-0.4-0.8-0.8-0.8h-1.9v-8.3h9.2v8.3h-3.8c-0.5 0-0.8 0.4-0.8 0.8 0 0.5 0.4 0.8 0.8 0.8h36.8V55.2z"/>
    <path class="ticket-st1" d="M94.9 12.7c3.4 0 6.1 2.7 6.1 6.1v44.5c0 3.4-2.7 6.1-6.1 6.1H7.8c-3.4 0-6.1-2.7-6.1-6.1V18.8c0-3.4 2.7-6.1 6.1-6.1H94.9M94.9 11.9H7.8C4.1 11.9 1 15 1 18.8v44.5c0 3.8 3.1 6.8 6.8 6.8h87.1c3.8 0 6.8-3.1 6.8-6.8V18.8C101.7 15 98.7 11.9 94.9 11.9L94.9 11.9z"/>
    <path class="ticket-overlay" d="M7.8 69.8c-3.6 0-6.4-2.9-6.4-6.4V18.8c0-3.6 2.9-6.4 6.4-6.4h87.1c3.6 0 6.4 2.9 6.4 6.4v44.5c0 3.6-2.9 6.4-6.4 6.4H7.8z"/>
    </svg>
    </>

            
       
    )
}

export default TramTicket
