import React from 'react';
import Company from './Company/Company'
import classes from './Placements.module.css';

const Placements = (props) => {
    const newArr=Array(15)
    
    return(
        <div className={classes.divImages}>
            <div className={classes.divBG}>
                <Company />
            </div>

        </div>
    )
}

export default Placements;