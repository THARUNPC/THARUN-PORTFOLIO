import React, {Component}  from "react";
import { Link } from "react-router-dom";
import "./About.css"
class About extends Component{
    render(){
        return(
            <div className="about">
                <h2> ABOUT ME</h2>
                <div className="border"></div>
                <p> I am studying in SJCIT college Chickballapur, studying in Information science and Engineering.If anybody requires  Information about the contact me. </p>
                
            </div>
        )
    }
}
export default About;