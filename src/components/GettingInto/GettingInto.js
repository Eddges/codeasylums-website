import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'
import classes from './GettingInto.module.css'

const GettingInto = (props) => {
    return(
        <React.Fragment className={classes.center}>
            <div className={classes.container}>
                <div className={classes.bg}>
                    <div className={classes.advantage}>
                        <p >The CodeAsylums Advantage</p>
                    </div>
                
                    <div className={classes.left}>
                        <div className={classes.content}>
                            <p className={classes.Title}>Concept classes with mentors (live)</p>
                            <p>Live classes from our experts from scratch to advance level, to make sure no stone is left unturned.</p>
                        </div>
                        <div className={classes.circle}>
                        </div>
                        <div className={classes.blank}></div>
                    </div>
                    <Right title="Coding Contests with Kaggle Challenges" content="Interactive Coding rounds consisting of  problems posed in various global contests." />
                    <Left title="Pair Programming with Mentored Group Study" content="Coding in pairs and group discussions which greatly influence the approach to solving broader  problems, under guidance of mentors" />
                    <Right title="Contest Discussions and regular assignments" content="Regular and regressive discussions of assignments and contest questions helps to clear common doubts and thought process" />
                    <Left title="Mock Interviews with Counselling" content="Regular mock interviews and feedbacks will help you in getting acquainted with exact flavours of pressure" />
                    <Right title="Real world projects" content="Weekends are wrapped up with building solutions to some amazing real life based problems with latest stacks" />
                    <Left title="Addon mentorship with TA Support" content="Still got queries and still needs extra help?  We provide 1 month extra of TA support for revising concept and clearing doubts" />
                    <Right title="Coffee with Tech" content = "Getting to be a part of live stream of experts from top tech giants describing technologies like BigData, Devops, BlockChain etc." />
                    <Left content="Addon placement prep videos, study materials and a lot of  other cool stuff" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default GettingInto;