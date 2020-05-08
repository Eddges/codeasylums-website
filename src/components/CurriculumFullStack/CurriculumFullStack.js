import React from 'react'
import Curriculum2Item from '../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumFullStack.module.css'

class CurriculumFullStack extends React.Component{
    render() {
        return(
            <div className={classes.CurriculumFullStack}>
                <p className={classes.title}>Course Curriculum</p>
                <Curriculum2Item title="Fundamentals" topic1="HTML and CSS" topic2="JavaScript" />
                <Curriculum2Item title="Frameworks" topic1="ReactJS" topic2="ExpressJS" />
                <Curriculum2Item title="Backend" topic1="NodeJS" topic2="MongoDB" />
            </div>
            
        )
    }
}

export default CurriculumFullStack