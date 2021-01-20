import React from "react";
import NewsItem from "./news_list_items";

const NewsList = (props)=>{
    const items = props.news.map((item)=>{
        return(
            <NewsItem key = {item.id}  item ={item}/>
        )
    });
    return(
        <div>
            {items}
            {props.children}  
            {/* //We will get Hello dudes, since we passed Hello dudes into NewsList Props */}
        </div>  //You cannot pass object in the return

    )
}
export default NewsList;