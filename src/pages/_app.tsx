import Theme from '../styles/theme';
import {AppProps} from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default App;

// root file, renders all the pages