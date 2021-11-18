import React from 'react';
import Link from 'next/link';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCodeigniter } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCodeigniter size="3rem" />  <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#acomplishments'>
          <NavLink>Acomplishments</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href='#projects'>
          <NavLink>About</NavLink>
        </Link>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/tkwonn">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
