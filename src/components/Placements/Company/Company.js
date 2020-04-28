import React from 'react'
import classes from './Company.module.css';
import adobe from '../../../assets/companies/Adobe.png'
import amazon from '../../../assets/companies/amazon.png'
import walmart from '../../../assets/companies/walmart.png'
import vmware from '../../../assets/companies/vmware.png'
import qubole from '../../../assets/companies/qubole.png'
import paytm from '../../../assets/companies/paytm.png'
import paysafe from '../../../assets/companies/paysafe.png'
import OYO from '../../../assets/companies/OYO.png'
import microsoft from '../../../assets/companies/microsoft.png'
import intuit from '../../../assets/companies/intuit.png'
import GS from '../../../assets/companies/GS.png'
import google from '../../../assets/companies/google.png'
import flipkart from '../../../assets/companies/flipkart.png'
import DI from '../../../assets/companies/DI.png'
import arcesium from '../../../assets/companies/arcesium.png'


const Company = (props) => {
    const names = [adobe, amazon, arcesium, DI, flipkart, google, GS, intuit, microsoft, OYO, paysafe, paytm, qubole, vmware, walmart]
    return names.map(company => (
        <img className={classes.image} src={company} alt={company} />
    ))
}

export default Company