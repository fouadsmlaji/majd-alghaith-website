import './Gallery.css'
import { useScrollContext } from './ScrollContext';
import gal1 from '/assets/images/gal1.jpg'
import gal2 from '/assets/images/gal2.jpg'
import gal3 from '/assets/images/gal3.jpg'
import gal4 from '/assets/images/gal4.jpg'
import gal6 from '/assets/images/gal6.jpg'


export default function Gallery() {

    const isBlackSectionVisible = useScrollContext();

    return(
        <>
            <div className="gallerySection" style={{
                    backgroundColor: isBlackSectionVisible ? "#000000" : "#ffffff",
                    color: isBlackSectionVisible ? "#ffffff" : "#000000"
                }} >
                <div className="container">
                    <h1>Wedding <br />
                    Photography <br />
                    and Film  <br />
                    Reimagined
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repellat voluptatum voluptate <br /> expedita rem facilis excepturi.</p>

                    <div className="images "  >
                    <div className="container images-container">
                    <div className="row" style={{position: "relative", display: "flex", justifyContent: "center", alignItems:"center"}}>
                        <div className="col-lg-3 col-4 mb-0  mb-lg-0 px-1 px-lg-2 ">
                            <img
                                src={gal1}
                                className="w-100 shadow-1-strong mb-2  mb-lg-4"
                                alt="Boat on Calm Water"
                            />
                        
                            <img
                                src={gal2}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                    
                        <div className="col-lg-3 col-4 mb-0  mb-lg-0 px-1 px-lg-2">
                            <img
                                src={gal3}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Mountains in the Clouds"
                            />
                        
                            <img
                                src={gal4}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Boat on Calm Water"
                            />
                        </div>
                    
                        <div className="col-lg-3 col-4 mb-0  mb-lg-0 px-1 px-lg-2">
                                <img
                                    src={gal1}
                                    className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                    alt="Waves at Sea"
                                />
                            
                                <img
                                    src={gal6}
                                    className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                    alt="Yosemite National Park"
                                />
                        </div>
                        <div className="col-lg-3 col-4 mb-0 mb-lg-0 px-1 px-lg-2 deletedGrid">
                            <img
                                src={gal3}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Mountains in the Clouds"
                            />
                        
                            <img
                                src={gal4}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Boat on Calm Water"
                            />
                        </div>

                    </div>
                    <div className="row" style={{position: "relative", display: "flex", justifyContent: "center", alignItems:"center"}}>
                        <div className="col-lg-3 col-4 mb-0 mb-lg-0 px-1 px-lg-2 ">
                            <img
                                src={gal1}
                                className="w-100 shadow-1-strong mb-2  mb-lg-4"
                                alt="Boat on Calm Water"
                            />
                        
                            <img
                                src={gal2}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                    
                        <div className="col-lg-3 col-4 mb-0  mb-lg-0 px-1 px-lg-2">
                            <img
                                src={gal3}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Mountains in the Clouds"
                            />
                        
                            <img
                                src={gal4}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Boat on Calm Water"
                            />
                        </div>
                    
                        <div className="col-lg-3 col-4 mb-0  mb-lg-0 px-1 px-lg-2">
                            <img
                                src={gal1}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Waves at Sea"
                            />
                        
                            <img
                                src={gal6}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Yosemite National Park"
                            />
                        </div>
                        <div className="col-lg-3 col-4 mb-0 mb-lg-0 px-1 px-lg-2 deletedGrid">
                            <img
                                src={gal3}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Mountains in the Clouds"
                            />
                        
                            <img
                                src={gal4}
                                className="w-100 shadow-1-strong  mb-2  mb-lg-4"
                                alt="Boat on Calm Water"
                            />
                        </div>

                    </div>
                    
                    
                    </div>
                  </div>  
                    
                </div>
            </div>
        </>
    )
}