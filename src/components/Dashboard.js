import React from 'react'
import '../App.css'
import Icons from './Icons'

function Dashboard() {
    return (
        <div>
            <h1 style={{textAlign:"center",margin:"20px"}}>Shop By Category</h1>
            <div className="categoryBlock">
                <div className="categoryDiv">
                <div>
                    <div className="box"></div>
                    <p>Protection</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Frames</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Best Selling</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Print</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Gift</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Teddy Bear</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Table De...</p>
                </div>
                <div>
                    <div className="box"></div>
                    <p>Photo...</p>
                </div>
                </div>
                <div className="seemore">
                    <h3 >See More</h3>
                <div/>
            </div>

        </div>
        <Icons />
        </div>
    )
}

export default Dashboard
