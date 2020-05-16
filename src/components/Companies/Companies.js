import React from 'react'
import classes from './Companies.module.css'

import adobe from '../../assets/companies/Adobe.png'
import amazon from '../../assets/companies/amazon.png'
import walmart from '../../assets/companies/walmart.png'
import vmware from '../../assets/companies/vmware.png'
import qubole from '../../assets/companies/qubole.png'
import paytm from '../../assets/companies/paytm.png'
import paysafe from '../../assets/companies/paysafe.png'
import OYO from '../../assets/companies/OYO.png'
import microsoft from '../../assets/companies/microsoft.png'
import intuit from '../../assets/companies/intuit.png'
import GS from '../../assets/companies/GS.png'
import google from '../../assets/companies/google.png'
import flipkart from '../../assets/companies/flipkart.png'
import DI from '../../assets/companies/DI.png'
import arcesium from '../../assets/companies/arcesium.png'


const Companies = (props) => {

    const names = [adobe, amazon, arcesium, DI, flipkart, google, GS, intuit, microsoft, OYO, paysafe, paytm, qubole, vmware, walmart]
    const rounds = names.map((iterator, index) => {
        return(
            <div className={classes.Round} data-aos="zoom-in" >
                <img src={iterator} alt={adobe} />
            </div>
        )
    })
    return(
        <div className={classes.Container}>
            {/* <div className={classes.Line}></div> */}
            <div className={classes.Gradient}></div>
            <div className={classes.Companies}>
                <p>Our graduates are working at</p>
                <div className={classes.Line}></div>
                <div className={classes.Logos}>
                    {rounds}
                </div>
            </div>
        </div>
        
    )
}

export default Companies