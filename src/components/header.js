import React,{Component} from "react";  //destructring props
import '../css/styles.css';
class Header extends Component{    //Class Based component

    inputChangeHandler(event){
        console.log(event.target.value);
    }
    render(){
        return(
            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange
                = {(e) => this.inputChangeHandler(e)}/>
            </header>
        )
    }
}

export default Header;