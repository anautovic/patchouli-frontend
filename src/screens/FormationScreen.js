import React, { useEffect} from 'react'
//import '../css/formation.css'
import NavbarS from '../components/NavbarS'
import { Helmet } from "react-helmet";
import { Row, Col, Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../css/formation.css'
import '../css/service.css'
import styled from 'styled-components'
import Imageaccueil from '../images/patchouliaca1.jpg'
import Imageaccueil1 from '../images/academy_pat.webp'
import Imageaccueil2 from '../images/cosmetologie.jpeg'
import { FaAngleDoubleRight } from 'react-icons/fa';




 



 


const FormationScreen = () => {
  const ImageA= styled.img`
  height:300px;
  width:auto;
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

    
    useEffect(() =>{
        Aos.init({duration:2500})
    }, [])
    return (
        <>
        <Helmet>
        <title>Centre de Formation en Esthetique-Cosmétique-Bonamoussadi-Douala|Institut patchouli </title>
        <meta property="og:image" content="https://res.cloudinary.com/wil/image/upload/v1624495958/formationInst_uzgfxm.jpg" />
    <link rel="apple-touch-icon" href="../src/images/logo_pat.webp" />
    <meta property="robots" content="index, follow" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="Institut de beaute patchouli | centre de formation esthetique, cosmetique bonamoussadi|Douala " />
        <meta property="og:url" content="https://www.institutpatchouli.org/formation" />
        <meta name='keyword' content="Formation, institut de beauté, Pédicure Manicure, Hammam, esthetique, patchouli,Centre de formation douala bonamoussadi, antenne Kotto" />
        <meta name="description" content="Tu souhaites devenir une professionnelle de la beauté et tu ne sais pas où te former ? 
        L’Institut de beauté patchouli est un centre de formation professionnel à douala offrant des formations 
        dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.
        En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat." />
      </Helmet>
      <NavbarS />

<Container fluid="lg xl ">  
<Row className="mt-5">
<Col md={6}>
<Card className="card_ct" >
  <Card.Img variant="top" 
  src="https://res.cloudinary.com/wil/image/upload/v1624501215/WhatsApp_Image_2021-06-24_at_03.17.24_kdqdzl.jpg" 
  alt= "promotrice"/>
  </Card>
</Col>


<Col md={6}>
       
    <h3 className="mb-2">PATCHOULI BEAUTY ACADEMY </h3>
    <p className=" mb-auto">
    L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
    dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.<br></br>
    En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat.
    </p>
    <br></br>
    N'hésitez pas à nous contacter si vous avez des questions ou si vous souhaitez en savoir plus sur nos services. 
    Nous avons hâte de vous voir à l'Institut de Beauté Patchouli!
    <button type="button" className="btns" ><a href="tel:+237 690915116" style= {{
        textDecoration:"none"
        }}>Appelez nous</a>
        
      </button>

      
</Col>
</Row>

<div className="row" data-aos="zoom-in">
                    <div className= "col-md-6 col-lg-6 ">
                    <p className='mb-auto'>Séance pratique du cours d'esthétique plus précisément manucure dispensé 
                    par Mme Nken Paulette Rachelle</p>
                        <h3 className="mb-2 text-center">Nos formations</h3>
                        <div className='underline'></div>
                        <div  className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight><p>Esthétique (manucure, pédicure) Vous êtes passionnés par le domaine de l’esthétique et plus particulièrement par la beauté des ongles ? Pour transformer cette passion en métier, devenez prothésiste ongulaire ! Afin de travailler dans les meilleurs conditions, 
                  la prothésiste ongulaire doit s’équiper du matériel nécessaire pour exercer ses missions.</p>
              </div>
              <div  className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight><p>Cosmétologie : ayant suivi cette formation vous serez chargé
                   de la création et de la formulation de produits cosmétiques (produits capillaires, produits corporels), que ce soit du maquillage ou des soins du corps. 
                  </p>
              </div>
              <div  className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight><p>Make-up</p>
              </div>
              <div  className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight><p>Coiffures</p>
              </div>
                        
                    </div>
                    <div className="col-md-6 col-lg-6"
                     >
           
            <ImageA  src={Imageaccueil} alt="acceuil" />
            <ImageA  src={Imageaccueil1} alt="acceuil" />
            
           
                    </div>
                    </div>
      </Container>





      <div className="album py-5 bg-light">
    <Container fluid='xl lg'>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "12rem"}}>
  <img src={Imageaccueil2} className="card-img-top" alt="Cosmetologie_flyer" />
 </div>

            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href=" https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg" download >télécharger</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "12rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/esthetique_v2kual.jpg"
   className="card-img-top" alt="coiffure_complete_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link type="button" className="btn btn-sm btn-outline-secondary"
                  to="https://res.cloudinary.com/wil/image/upload/v1624547771/esthetique_v2kual.jpg" download>view</Link>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "12rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/make-up_nbjri1.jpg" className="card-img-top" alt="make-up_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href="https://res.cloudinary.com/wil/image/upload/v1624547771/make-up_nbjri1.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "12rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547782/Coiffure_fyi0wh.jpg"
   className="card-img-top" alt="coiffure_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href= "https://res.cloudinary.com/wil/image/upload/v1624547782/Coiffure_fyi0wh.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "12rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/coiffure_complete_lsvfu9.jpg" 
  className="card-img-top" alt="formation_complete_flyer" style={{width:'12rem'}} />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href= "https://res.cloudinary.com/wil/image/upload/v1624547771/coiffure_complete_lsvfu9.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "12rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg"
   className="card-img-top" alt="Onglerie_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        </Container>
        </div>



</>
        
    )
}

 export default FormationScreen
