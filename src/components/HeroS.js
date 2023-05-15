import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Imageaccueil from '../images/accueil_pat1.webp'
import Imageaccueils from '../images/accueil_pat.webp'
import Imageaccueil1 from '../images/patchouli nails.jpg'
import Imageaccueil2 from '../images/patchoulipedicure.jpg'
import Services from '../components/Services'
import Aos from 'aos'
import 'aos/dist/aos.css';




const HeroS = () => {
    const Accueilcontaint= styled.p`
    font-size: 1.2rem;
    padding: 1rem 2rem;
    @media only screen and (max-width:400px) {
        font-size:1rem;
        padding: 0.6rem 1rem;
    }
    `;
    
    
    const ImageA= styled.img`
    height:300px;
    width:250px;
    padding:6px;
    margin:6px;
    @media only screen and (max-width:424px) {
    height:120px;
    width:100px;
    padding: 2px;
    margin:2px;
    };
     @media only screen and (min-width:1024px) {
    height:200px;
    width:200px;
    padding: 2px;
    margin:2px;
    }
    `;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    Aos.init({duration:1000}, [])
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });


    return (
       <>
       
       {/*windowWidth < 800 ? (<img src="https://res.cloudinary.com/wil/image/upload/v1684073393/Institut_patchouli_slymyc.webp"
 className="img-fluid"
 alt="couverture patchouli"></img>):
 (<img src="https://res.cloudinary.com/wil/image/upload/v1684167463/Beige_Minimaliste_Art_Banni%C3%A8re_dkdjoi.webp"
 className="img-fluid"
 alt="couverture patchouli"></img>)
    */}
<img src="https://res.cloudinary.com/wil/image/upload/v1684073393/Institut_patchouli_slymyc.webp"
 className="img-fluid"
 alt="couverture patchouli"></img>

<div className="jumbotron">
<h1 className="text-justify text-center" data-aos="zoom-in" style = {{
    fontSize:'1.8rem'
}}>institut de beauté patchouli Douala  </h1>
                    <div className="row" data-aos="zoom-in">
                    <div className= "col-md-6 col-lg-6 ">
                        <Accueilcontaint >Nous sommes un institut de beauté offrant une gamme complète de services en esthétique, coiffure et soin du corps. 
                            Notre équipe de professionnels hautement qualifiés est là pour vous aider à vous sentir bien 
                            mais aussi, pour faire votre
                            shopping près de chez vous à prix discount.
                        </Accueilcontaint>
                        <h3 className="mb-2 text-center">Nos produits</h3>
                        <Accueilcontaint >
    Nous utilisons uniquement les meilleurs produits pour nos services de beauté, y compris des marques renommées 
    dans l'industrie de la beauté et des produits naturels de qualité supérieure.<br></br>
    Vous pouvez réserver facilement un rendez-vous via 699504975 | 676974410
    </Accueilcontaint>
                    </div>
                    <div className="col-md-6 col-lg-6"
                     >
            <ImageA  src="https://res.cloudinary.com/wil/image/upload/v1684069728/patchoulinails_hxoxpm.jpg" alt="acceuil" />
            <ImageA  src="https://res.cloudinary.com/wil/image/upload/v1636025439/consultation_nszmkt.jpg" alt="acceuil" />
            <ImageA  src={Imageaccueil} alt="acceuil" />
            <ImageA  src={Imageaccueils} alt="acceuil" />
            <ImageA  src={Imageaccueil1} alt="patchouli manicure" />
            <ImageA  src={Imageaccueil2} alt="patchouli pedicure" />
                    </div>
                    </div>
                </div>
                <Services />
 
 
       </> 
    )
} 

export default HeroS
