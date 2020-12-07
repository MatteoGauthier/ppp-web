import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VBLSFN8C21"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-VBLSFN8C21');`,
            }}
          />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" href="/images/icons/favicon.svg" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="PPP" />
          <meta name="apple-mobile-web-app-title" content="PPP" />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="description"
            content="Présentation de métiers du numérique, Vanon Borget et Mattèo Gauthier allons vous présenter le métier de Product Designer, Motion Designer et Vidéaste"
          />
          <link rel="preload" href="/fonts/subset-RadioGrotesk-Bold.woff" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/subset-RadioGrotesk-Bold.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/subset-RadioGrotesk-Bold.svg" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
