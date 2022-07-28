import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8736587448479057"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
