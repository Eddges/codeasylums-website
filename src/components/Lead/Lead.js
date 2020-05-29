import React from 'react'
import axios from 'axios'

class Lead extends React.Component{
    state={
        value : null
    }

    clickHandler = () => {
        axios.get("http://ace.codeasylums.com:4001/api/saveLead?fname=Saurav&lname=Suman&email=jnu.saurav@ggmail.com&phone=8505885571&course=fullstaack&exp=1-2")
        .then((response, reject) => {
            console.log(response.data)
        })
    }

    render(){
        return(
            <button onClick={this.clickHandler}>Get</button>
        )
    }
}

export default Lead