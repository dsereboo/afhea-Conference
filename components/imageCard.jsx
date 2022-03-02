import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import image from "../public/images/test.png";
import {HiOutlineDownload} from "react-icons/hi"
import { IconBase } from "react-icons/lib";
import { IconContext } from "react-icons";
import styles from "../styles/imageCard.module.css"
import { saveAs } from "file-saver";

const ImageCard = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const saveFile=()=>{
    saveAs(
        "https://ahaic.org/wp-content/uploads/2021/03/AHAIC-2021_Session-template-1.png",
        "image.png"
    ) 
  }

  return (
    <div className="is-clickable">
      <Image src={image} onClick={handleClick}/>
      <div className={active?"modal is-active":"modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
        <Image src={image} onClick={handleClick}/>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleClick}></button>
       {/* <button className={"button "+ `${styles.download}`}> */}
       <div className={styles.download} onClick={saveFile}>
        <IconContext.Provider  value={{size:"2em", color:"#fff"}} >
            <HiOutlineDownload/>
        </IconContext.Provider>
        </div>
        {/* </button> */}
      </div>
    </div>
  );
};

export default ImageCard;
