import React, {useState} from 'react';
import Theme from '../styles/theme';
import {AppProps} from 'next/app';

import AppContext from '../context/AppContext';

const App = ({ Component, pageProps }: AppProps) => {
  const [ language, setLanguage ] = useState("English");
  return (
    <AppContext.Provider value={{language, setLanguage}}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </AppContext.Provider>
  );
}

export default App;

// root file, renders all the pages