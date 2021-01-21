import React from "react";
import classes from '../css/styles.css';

const NewsItem = ({ item }) => { //destructuring, we are bringing only item from props

    return ( 
        <div>
        <h3> { item.title } </h3>  
        <div> { item.feed } </div>  
        </div>
    )
}

export default NewsItem;