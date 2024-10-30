
import './BlackSection.css'
import blackBannerVideo from '/assets/videos/main-video.mp4'
import { useScrollContext } from './ScrollContext';
import img1 from '/assets/images/black1.jpg'
import img2 from '/assets/images/black2.jpg'
import img3 from '/assets/images/black3.jpg'
import img4 from '/assets/images/black4.jpg'
import img5 from '/assets/images/black5.jpg'


export default function BlackSection() {

    const isBlackSectionVisible = useScrollContext();

    return(
        <>
            <div className='blackSection' style={{
                    backgroundColor: isBlackSectionVisible ? "#000000" : "#ffffff",
                    color: isBlackSectionVisible ? "#ffffff" : "#000000"
                }} >
                <div className='container'>
                    <div className='BH1'>
                    <span className='blackHeader'>Want your wedding photos to be 
                     </span>
                    </div>
                   <div className='BH1-2'>
                   <span>
                   More than the typical wedding photos?
                   </span>
                   </div>
                </div>
                <div className='blackBanner' style={{
                    backgroundColor: isBlackSectionVisible ? "#000000" : "#ffffff",
                    color: isBlackSectionVisible ? "#ffffff" : "#000000"
                }}>
                <video autoPlay muted loop id="blackBannerVideo" style={{ padding: 0 }}>
                    <source src={blackBannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>

                    <div className="row blackGridRow" >
                        <div className="col-lg-2 col-4 p-lg-2 p-1  blackCol">
                            <img src={img1} alt="" className='blackGrid'/>
                        </div>
                        <div className="col-lg-2 p-lg-2 col-4 p-1 blackCol">
                             <img src={img2} alt="" className='blackGrid'/>
                        </div>
                        <div className="col-lg-2 p-lg-2 col-4 p-1 blackCol">
                             <img src={img3} alt="" className='blackGrid'/>
                        </div>
                        <div className="col-lg-2 col-4 p-lg-2 p-1 blackCol">
                             <img src={img4} alt="" className='blackGrid'/>
                        </div>
                        <div className="col-lg-2 col-4 p-lg-2 p-1 blackCol">
                             <img src={img5} alt="" className='blackGrid'/>
                        </div>
                        <div className="col-lg-2 col-4 p-lg-2 p-1 blackCol">
                             <img src={img1} alt="" className='blackGrid'/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}