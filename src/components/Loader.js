import React, { Component } from 'react'
import "./Loader.css"

class Loader extends Component {
    render() {
        return (
            <div>
            <div className="overlay"> </div>
                <div>
<div className="absolute w-1/4 top-50 p-3 text-center left-50 bg-white">
 <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
 <div>Loading</div>
 </div>
            </div>
           
            </div>
        )
    }
}

export default Loader
