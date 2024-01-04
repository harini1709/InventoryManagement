import {React,useRef} from "react";
import '../Assets/Page.css'
import bg1 from '../Assets/1.jpg'
import bg2 from '../Assets/2.jpg'
import bg3 from '../Assets/3.jpeg'
import bg4 from '../Assets/4.jpg'
import bg5 from '../Assets/5.jpeg'
import bg6 from '../Assets/6.jpeg'
import bg7 from '../Assets/7.jpeg'

const Page=()=>
{

    let imageContainerRef=useRef(null)
    const images=[bg1,bg2,bg3,bg4,bg5,bg6,bg7]
    const prev=()=>imageContainerRef.current.scrollLeft -=250
    const next=()=>imageContainerRef.current.scrollLeft +=250
    return(
        <div className="page-container">
            <div className="prev" onClick={prev}></div>
            <div className="slide-panel" ref={imageContainerRef}>
                {images.map(image=>{return (<img src={image}/>)})}
            </div>
            <div className="next" onClick={next}></div>
        </div>
    )
}

export default Page;