import Head from "next/head";

const HomeHero = ({ children }) => {
  return (
    <div>
        <Head>
<title>EYDEAN | HOMEPAGE</title>
    </Head>
        {children}
    </div>
  );
};

export default HomeHero;
