import Link from "next/link";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import styles from "../styles/tweetCard.module.css" 
import { Share } from "react-twitter-widgets";

const TweetCard = ({ data }) => {
  return (
    <div className={"card "}>
      <div className="card-content">
        <IconContext.Provider value={{ size: "1em", color: "#EE596D" }}>
          <FaTwitter />
        </IconContext.Provider>
        <p>{data}</p>
        <div className="mt-2">
            <Share options={{size:"large", text:`${data}`}}/>
        </div>
      
        {/* <Link  href={"https://twitter.com/intent/tweet?text="+`${data}`}>
        <button className={"button is-success is-normal mt-2 "+`${styles.twitterButton}`}>
           <FaTwitter />
          <p className="ml-2 has-text-weight-bold">Tweet</p>
        </button>
        </Link> */}
      </div>
    </div>
  );
};

export default TweetCard;
