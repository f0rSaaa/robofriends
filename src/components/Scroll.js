import React from 'react';


const Scroll = (props) => {
    return(
        <div className="hidden" style={{ overflowY: "scroll", height:"457px" }}>
            {props.children}
        </div>
    );
}

export default Scroll;