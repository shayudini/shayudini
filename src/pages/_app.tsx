import 'base/styles/main.css';
import type { AppProps } from 'next/app';
import { GlobalProvider } from 'lib/context';
import { ThemeProvider } from 'next-themes';
import Layout from 'base/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider attribute="class">
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
