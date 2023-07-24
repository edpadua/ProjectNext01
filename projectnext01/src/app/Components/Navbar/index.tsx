import React from 'react'

import tw from "tailwind-styled-components"

const Nav = tw.nav`
    bg-red-900
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-5
`;

const NavContainer = tw.div`
    px-16 
    flex

`;

function Navbar() {
    return (
        <Nav>
            <NavContainer className='px-16 flex'>

            </NavContainer>
        </Nav>
    )
}

export default Navbar
