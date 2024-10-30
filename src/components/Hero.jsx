import './Hero.css' 
import mainvideo from '/assets/videos/main-video1.mp4'; 
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
      <div className="hero" style={{ display: "flex" }}>
             <video autoPlay muted loop id="background-video" style={{ padding: 0 }}>
          <source src={mainvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="col d-flex main-hero"
          style={{ textAlign: "center", padding: 0 }}
        >
          <div>
          <ReactTyped
          strings={['Timeless Frames: A Journey Through Photography']}
          typeSpeed={60}
          backSpeed={40}
          loop={false}
        >
          <h1/>
        </ReactTyped>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                Experience life through the lens. Our photography captures the
                essence of moments, blending artistry and reality to create
                timeless visuals.
              </p>
            </div>
          </div>
        </div>
   
      </div>
    );
  }
  