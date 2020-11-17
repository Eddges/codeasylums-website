import React from 'react'
import classes from './Curriculum2.module.css'
import './Curriculum2.css'

class Curriculum2Item extends React.Component{

    render() {

    let links = this.props.section.map((iterator, index) => {
        return(
                <div key={index} className={classes.expand1}>
                        <div className="CurriculumLink">
                            <span>{iterator.link}</span>
                            <span className="accRotate">+</span>
                        </div>
                        <div className="CurriculumAnswer">{iterator.details}</div>
                    </div>
        )
    })


    return(
        <div className={classes.Container}>
            <div className={classes.item}>
                <div className={classes.left}>
                    <div className={classes.circle}></div>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.right}>
                    <p className={classes.title}>{this.props.title}</p>
                    <p className={classes.description}>{this.props.description}</p>

                    {links}
                </div>
            </div>
        </div>
    )
                }
}

export default Curriculum2Item
