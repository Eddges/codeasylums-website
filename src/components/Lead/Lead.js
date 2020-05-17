import React from 'react'
import axios from 'axios'

class Lead extends React.Component{
    state={
        value : null
    }

    clickHandler = () => {
        axios.get("https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r9b4f434d7930c6a4a01ee95d25f49860&secretKey=5fa328205477ae3e74ea80f5e6f225be1ba6e2cf")
        .then((response, reject) => {
            console.log(response)
        })
    }

    render(){
        return(
            <button onClick={this.clickHandler}>Get</button>
        )
    }
}

export default Lead