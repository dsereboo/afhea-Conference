import { IconContext } from "react-icons"
import {FaTwitter} from "react-icons/fa"

const TweetCard=({data})=>{
    return(
        <div className="card">
            <div className="card-content"> 
            <IconContext.Provider value={{size:"1em", color:"#EE596D"}}>
                 <FaTwitter/> 
            </IconContext.Provider>
            
                 <p>
                    {data}
                 </p>
            </div>
        </div>
    )
}

export default TweetCard