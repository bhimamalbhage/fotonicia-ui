import React from 'react'
import '../App.css'
class Banner extends React.Component {
    

    render(){
    return (
        <div className="banner">
            <img src="https://previews.123rf.com/images/avgust01/avgust011903/avgust01190300076/124250674-summer-sale-advertisement-banner-horizontal-banner-with-realistic-glass-bottle-with-message-starfish.jpg"></img>
            {/* {this.state.images.slice(0,3).map((item)=>{
                return <img src={item}></img>
            })} */}
        </div>
    )
    }
}

export default Banner
