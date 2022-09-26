import react,{Component} from "react";
import{Route,NavLink,Link,HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {library} from "@fortawesome/fontawesome-svg-core";
import{
    fab,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab,
    faLinkedin,
    faInstagram,);
class Main extends Component{
    render(){
        return(
            <HashRouter>
        <div>
        <div>
            <Link className="logo" to="/">THARUN P C</Link>
            </div>
            <ul className="header">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Contact" component={Contact}/>
             </div>
        </div>
        </HashRouter>
        );
        
    }
}
export default Main;