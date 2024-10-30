import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <div>
  
      <div className="text">
      <ParallaxProvider> {/* Wrap your content with ParallaxProvider */}
        <div className="container">
          <div className="d-flex flex-column w-full" style={{ justifyContent: "center" }}>
            <div className=" between-text">
              <Parallax speed={-10}> {/* Apply parallax effect */}
                <h2>
                  There’s nothing more incredible than finding the one person
                  you can’t live without. Your true best friend. You two are on
                  fire together.
                </h2>
              </Parallax>
            </div>
            <div className=" between-text2 justify-content-end w-full">
              <p>
                I want you two to soak this up because out of every human on
                planet earth, you found each other and said, no one else but
                you. That’s pretty powerful.
              </p>
            </div>
          </div>
        </div>

        <div className='ourWedding'>
        <h1><span>Great </span> STORY IS A STORY WELL TOLD</h1>
         </div>
        </ParallaxProvider>
      
      </div>

    
    </div>
 
  );
}
