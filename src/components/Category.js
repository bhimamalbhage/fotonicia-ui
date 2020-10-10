import React from 'react'
import '../App.css'
import Banner from './Banner'
function Category (props){

    return (
        <div>
        <div className="catBlock">
            <div className="catHeading">
                <p>{props.value.headerTitle} <span>Category no:- {props.catNo} </span> </p>
                <button className="btn-green">View All </button>
            </div>
            <div className="itemImg">
                {props.value.listItem.slice(0,2).map((item)=> {
                   return (
                       <div>
                           <img src={item.image}></img>
                       </div>
                   )
                })}
            </div>
        </div>
        <div>
            {props.catNo %2 ===0 && <Banner />}
        </div>
        </div>
    )
    
}

export default Category
