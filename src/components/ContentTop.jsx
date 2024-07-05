import { iconsImgs } from "../utils/images";
import "../components/ContentTop.css";
import { useContext, useState,useEffect } from "react";
import { SidebarContext } from "../context/sidebarContext";


export const ContentTop = () => {
    

    const { toggleSidebar } = useContext(SidebarContext)
    const [date, setDate] = useState(new Date());
   
    useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    
      const getGreeting = () => {
        const hours = date.getHours();
        if (hours < 12) return 'Good morning';
        if (hours < 18) return 'Good afternoon';
        return 'Good evening';
      };
    
      const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      };
    
      const formatTime = (date) => {
        return date.toLocaleTimeString();
      };
    
  
    return (
        <div className="main-content-top">
            
        <div>

            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>

            <div className="content-top-left">
             <h2 className="text-white">{getGreeting()}</h2>
            </div>
            
             <div>
             <p  className="text-silver-v1">{formatDate(date)}</p>
             <p  className="text-silver-v1">{formatTime(date)}</p>
             </div>
             
        </div>
            
        {/* <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
        </div> */}
    </div>    
  )
}




export default ContentTop
