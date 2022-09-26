import React, {Component}  from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component{
    render(){
        return(
            <div>
                <h2 style={{color:"black",fontsize:"x-larger"}}> CONTACT ME</h2>
                <p style={{color:"black",fontsize:"x-larger"}}>This is my contact if u have queries contact me.</p>
                <p style={{ marginBottom:"2rem",color:"black",fontsize:"x-larger"}}> You can email me at pctharun890@gmail.com or click on the below links.</p>
                
                <FontAwesomeIcon icon={["fab","instagram"]} size="4x" color="green"/>
                
                <a
                href="https:instagram.com/tharunpc"
                style={{
                    textShadow :"0 4px 0 rgba(0,0,0,0.1)",
                    margin:"0rem 3rem 0rem 0.5rem",
                    textDecoration: "none",
                    color:"whitesmoke",
                    fontsize:"x larger",
                    color:"Black",
                    fontStyle:"Bold",
                
                 }}
                >Instagram</a>
                
                <FontAwesomeIcon icon={["fab","Linkedin"]} size="10x" color="blue"/>
            </div>
        )
    }
}
export default Contact;