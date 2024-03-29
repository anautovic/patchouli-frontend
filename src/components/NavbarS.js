import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo_pat from '../images/logo_pat.webp'

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  border-bottom: 3px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
 
  .logo {
    padding: 3px 0;
  }
  
`

const NavbarS = () => {
  return (
    <Nav>
      <div className="logo">
      <div style={{position:"position"}}> 
      
      <img
        src={Logo_pat}
        width="80"
        height="80"
        style={{
          position:'absolute',
          left:'2rem',
          zIndex:'-2'
        }}
        
        alt="patchouli_logo"
      />
      </div>
      </div>
      <Burger />
    </Nav>
  )
}

export default NavbarS