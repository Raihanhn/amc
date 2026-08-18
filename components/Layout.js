// components/Layout.js

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  const pageTitle = title
    ? `${title} | AMC Dubai — Asdaq Management Consultancy`
    : "AMC Dubai | Asdaq Management Consultancy — European Immigration & Corporate Solutions";
  const pageDescription =
    description ||
    "Dubai-based, single-umbrella authority for European immigration, work permits, corporate setup, and workforce solutions. Powered by Amigos Global.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}