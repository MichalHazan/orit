import styles from "./Recommends.module.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UniverseButton from "../buttons/Button"
import result1 from "../../images/mindexample.jpg"
import result2 from "../../images/mindfull.jpg"
import result3 from "../../images/Meditiaion-Image.jpg"

const Reccomends=()=>{




  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 550 ? 1 :
                  window.innerWidth <= 850 ? 2 :
                  window.innerWidth <= 1050 ? 2 : 2,
    slidesToScroll: window.innerWidth < 550 ? 1 :
                    window.innerWidth <= 850 ? 2 :
                    window.innerWidth <= 1050 ? 2 : 2,
                    height: "auto"
  };
    const content = [
    
          {
            type: 'image',
            src: result1,
          },
          {
            type: 'image',
            src: result2,
          },
    
          {
            type: 'image',
            src: result3,
          },
     
    
      ];

 
return <>
<div className={styles.title} id="ביקורות"> ביקורות </div>


<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`  לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>
<UniverseButton/>
</>
}
export default Reccomends
