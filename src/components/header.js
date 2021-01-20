import React,{Component} from "react";  //destructring props
import '../css/styles.css';
class Header extends Component{    //Class Based component

    state = {
        active: 'active',
        keyword: 'Hello'
    }
    inputChangeHandler(event){
        const value = event.target.value === '' ? 'active': 'non-active';
        this.setState({
            active: value,
            keyword: event.target.value
        })
    }
    render(){
        return(
            <header 
            //style= {{background:`${this.state.active ? 'red' : 'blue'}`}}
            className = {this.state.active}
            > 
            {/* in above line, we are checking if active is false, background should be blue or else red */}
                <div className="logo">Logo</div>
                
                <input type="text" onChange
                = {this.inputChangeHandler.bind(this)}/> 
            </header>
        )
    }
}

export default Header;