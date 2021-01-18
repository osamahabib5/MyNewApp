import React,{Component} from "react";  //destructring props
import '../css/styles.css';

class Header extends Component{    //Class Based component
    render(){
        return(
            <header>
                <div className="logo">Logo</div>
                <input type="text"/>
            </header>
        )
    }
}

export default Header;