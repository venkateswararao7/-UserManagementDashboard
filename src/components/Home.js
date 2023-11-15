import React from 'react';
import ".././styles/Home.css";
function Home() {
    function handleClik(e) {
        window.location.href = "/user";
    }
    function handleAccountClik(e) {
        window.location.href = "/account"
    }
    return (

        <div className='Home'>
            <div className='page-container'>
                <button onClick={handleClik}>User Details</button>
                <button onClick={handleAccountClik}>Account Creation</button>
            </div>

        </div>
    )
}

export default Home