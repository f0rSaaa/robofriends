import React from 'react';
import './Card.css'
const Card = ({ id, name, username, email, }) => {
    return (
        <div className="tc bg-light-blue br3 pa3 ma2 dib grow b--black-30 shadow5 br bb cardColor">
            <img src = {`https://robohash.org/set_set3/bgset_bg1/${id}?size=200x200`} alt = "robots" />
            {/* https://robohash.org/set_set1/bgset_bg1/123?size=200x200 */}
            <div>

                <h2> {username} </h2>
                <h4> {name}  </h4>
                <p> {email} </p>
            </div>    
        </div>
    );
}


export default Card;

