import React, {useContext, useEffect} from 'react';
import Link from 'next/link';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCodeigniter } from 'react-icons/di';
import { FormControlLabel, Switch } from '@material-ui/core';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import AppContext from '../../context/AppContext';

const Header = () =>  {
  const { language, setLanguage } = useContext(AppContext);
  const toggleLanguage = (e) => {
    e.preventDefault();
    setLanguage(language === "English" ? "Japanese" : "English");
  }

  useEffect(() => {
    console.log(language);
  }, [language]);

  return(
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
        {/* <li>
          <Link href='#acomplishments'>
            <NavLink>Acomplishments</NavLink>
          </Link>
        </li> */}
      </Div2>
      <Div3>
        <FormControlLabel control={<Switch color="primary" onChange={toggleLanguage}/>} label="English / Japanese" />
        <SocialIcons href="https://github.com/tkwonn">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://www.linkedin.com/in/taesok-kwon-a61796226/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons> */}
      </Div3>
    </Container>
  )
}

export default Header;
