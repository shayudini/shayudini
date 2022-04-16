import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-stone-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
