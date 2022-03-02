import Link from "next/link";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import styles from "../styles/tweetCard.module.css" 

const TweetCard = ({ data }) => {
  return (
    <div className={"card "}>
      <div className="card-content">
        <IconContext.Provider value={{ size: "1em", color: "#EE596D" }}>
          <FaTwitter />
        </IconContext.Provider>
        <p>{data}</p>
        <Link  href="https://twitter.com/intent/tweet?text=Hello%20world">
        <button className={"button is-success is-normal mt-2 "+`${styles.twitterButton}`}>
           <FaTwitter />
          <p className="ml-2 has-text-weight-bold">Tweet</p>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TweetCard;
