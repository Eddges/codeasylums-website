import React from 'react'
import classes from './PhoneBottom.module.css'
import ModalPhone from '../ModalPhone/ModalPhone'
import ModalPhoneBottom from '../ModalPhone/ModalPhoneBottom'

const PhoneBottom  = (props) => {
    return(
        <div className={classes.Container}>
            <a className={classes.Phone} href="tel:8116029289" >
                <ion-icon name="call"></ion-icon>
                <span className={classes.LabelCall}>Call</span>
            </a>
            <div className={classes.Callback}>
                <ion-icon name="chatbubbles"></ion-icon>
                {/* <span className={classes.LabelCallback}>Request Callback</span> */}
                <ModalPhoneBottom />
            </div>
            
        </div>
    )
}

export default PhoneBottom