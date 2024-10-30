
import './Category.css'
import { useScrollContext } from './ScrollContext';
import cat1 from '/assets/images/cat1.jpg'
import cat2 from '/assets/images/cat2.jpg'
import cat3 from '/assets/images/cat3.jpg'
import vid1 from '/assets/videos/main-video1.mp4'
import vid2 from '/assets/videos/proposal.mp4'
import vid3 from '/assets/videos/engagement.mp4'
 

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
// import { useEffect } from 'react'


export default function Category() {

  
  const isBlackSectionVisible = useScrollContext();
    /*
      useEffect(() => {
          const categorySection = document.querySelector(".categorySection");
      
          const handleScroll = () => {
            const targetSection = document.querySelector(".categorySection");
            const sectionTop = targetSection.getBoundingClientRect().top;
      
            if (sectionTop < window.innerHeight && sectionTop >= 0) {
              categorySection.style.backgroundColor = "#f6f6f2"; // Change to your color
            } else {
              categorySection.style.backgroundColor = "#000000"; // Revert to original color
            }
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
     */

    
    return (
        <div className="categorySection" style={{
          backgroundColor: isBlackSectionVisible ? "#000000" : "#ffffff",
          color: isBlackSectionVisible ? "#ffffff" : "#000000"
      }}>
            <ParallaxProvider>
            <div className="container position-relative" >
                <div className='catDiv1'>
                    <Parallax speed={-10}>
                    <div className="catCard">
                      <img src={cat1} alt="Engagements" className="catImage" />
                      <video className="catVideo" autoPlay muted loop>
                        <source src={vid1} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <h3>Weddings</h3>
                    </div>
                    </Parallax>
                </div>
                <div className='catDiv2'>
                    <Parallax speed={-20}>
                    <div className="catCard">
                      <img src={cat3} alt="Engagements" className="catImage" />
                      <video className="catVideo" autoPlay muted loop>
                        <source src={vid3} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <h3>Engagements</h3>
                    </div>
                    </Parallax>
                </div>
                <div>
                <span className='catSpan2'>Always Catch The Moments...</span>
                <span className='catSpan'>Never Stop Believing in love &lt;3</span>
                
                </div>
                <div className='catDiv3'>
                <div className="catCard">
                      <img src={cat2} alt="Engagements" className="catImage" />
                      <video className="catVideo" autoPlay muted loop>
                        <source src={vid2} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <h3>Proposals</h3>
                    </div>
                </div>

             </div> 
             </ParallaxProvider>
        </div>
    )
}