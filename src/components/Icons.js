import React from 'react'
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

function Icons() {
    return (
        <div className="icons">
            <div>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p style={{textAlign:"center",marginTop:"10px"}}>Call</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faWhatsapp} className="icon"  />
            <p style={{textAlign:"center",marginTop:"10px"}}>WhatsApp</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faMapMarker} className="icon" />
            <p style={{textAlign:"center",marginTop:"10px"}}>Map</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faShare} className="icon" />
            <p style={{textAlign:"center",marginTop:"10px"}}>Share</p>
            </div>


        </div>
    )
}

export default Icons
