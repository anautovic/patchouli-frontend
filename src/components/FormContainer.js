import React from 'react'
import { Row, Col} from 'react-bootstrap'

const FormContainer = ({children}) => {
    return (
        <div>
           <div className='container-fluid'>
               <Row className = 'justify-content-md-center'>
                   <Col xs= {12} md = {6}>
                       {children}
                   </Col>
               </Row>
               </div> 
        </div>
    )
}

export default FormContainer
