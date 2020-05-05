import React from 'react'
import classes from './Curriculum2.module.css'
import './Curriculum2.css'

const Curriculum2Item = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.item}>
                <div className={classes.left}>
                    <div className={classes.circle}></div>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.right}>
                    <p className={classes.title}>{props.title}</p>
                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi.</p>
                    <div className={classes.expand1}>
                        <div class="CurriculumLink">
                            <span>{props.topic1}</span>
                            <span>+</span>
                        </div>
                        <div class="CurriculumAnswer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi
                        </div>
                    </div>

                    <div className={classes.expand1}>
                        <div class="CurriculumLink">
                            <span>{props.topic2}</span>
                            <span>+</span>
                        </div>
                        <div class="CurriculumAnswer">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum2Item
