import React from "react";
import {css} from 'glamor';

const NewsItem = ({item}) =>{   //destructuring, we are bringing only item from props
    
    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey'
    })
    return(
        <div {...news_item}>  
        {/* We are passing class in above code. Whatever is in the
        mentioned name, please pass all these elements into
        the div. This is ESX */}
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>
    )
} 

export default NewsItem;