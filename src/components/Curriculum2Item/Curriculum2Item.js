import React from 'react'
import classes from './Curriculum2.module.css'
import './Curriculum2.css'

class Curriculum2Item extends React.Component{

    render() {

    let links = this.props.section.map(iterator => {
        return(
                <div className={classes.expand1}>
                        <div class="CurriculumLink">
                            <span>{iterator.link}</span>
                            <span class="accRotate">+</span>
                        </div>
                        <div class="CurriculumAnswer">{iterator.details}</div>
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
                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi.</p>

                    {links}
                </div>
            </div>
        </div>
    )
                }
}

export default Curriculum2Item
