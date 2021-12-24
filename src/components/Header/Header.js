import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCodeigniter } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import AppContext from '../../context/AppContext';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Header = () =>  {
  const { language, setLanguage } = useContext(AppContext);
  const router = useRouter();

  const handleChange = (event, newLanguage) => {
    event.preventDefault();
    setLanguage(newLanguage);
    if(language === "english") router.push('/');
    else router.push('/ja');
  };

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
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="english" style={{ color: "white", borderColor: "white"}}>ENG</ToggleButton>
          <ToggleButton value="japanese" style={{ color: "white", borderColor: "white"}}>JPN</ToggleButton>
        </ToggleButtonGroup>
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
