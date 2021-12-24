import React, {FC} from 'react';
// import Acomplishments from '../components/Acomplishments/Acomplishments';
import HeroJapanese from '../components/Hero/HeroJapanese';
import ProjectJapanese from '../components/Projects/ProjectJapanese';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home: FC = () => {
  return (
    <Layout>
      <Section grid>
        <HeroJapanese />
      </Section>
      <ProjectJapanese />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;

// home page