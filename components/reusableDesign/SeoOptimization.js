import Head from "next/head";
import React from "react";

const SeoOptimization = ({ contentDescription, contentTitle, title }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : "Eydean"}</title>

        <meta name="description" content={contentDescription} />
        <meta property="og:title" content={contentTitle} />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dhxccll9e/image/upload/v1662526656/Icon/favicon_2_qjtzzo.ico"
        />
      </Head>
    </div>
  );
};

export default SeoOptimization;
