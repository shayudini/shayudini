import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { GTM_ID } from 'base/config/gtm';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-stone-600">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
