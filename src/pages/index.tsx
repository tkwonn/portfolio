import React, {FC, useContext} from 'react';
// import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import HeroJapanese from '../components/Hero/HeroJapanese';
import Projects from '../components/Projects/Projects';
import ProjectJapanese from '../components/Projects/ProjectJapanese';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import AppContext from '../context/AppContext';

const Home: FC = () => {
  const { language } = useContext(AppContext);
  return (
    <Layout>
      <Section grid>
        {language === "English" ?
          <Hero />
          :
          <HeroJapanese />
        }
      </Section>
      {language === "English" ?
        <Projects />
        :
        <ProjectJapanese />
      }
      
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;

// home page