import DevGrid from './DevGrid';
import React from 'react';
import Head from 'next/head'
import Split from '../layouts/Split';
import Full from '../layouts/Full';
import Minimal from '../layouts/Minimal';

const Layouts = {
  split: Split,
  full: Full,
  minimal: Minimal
};

function getLayout(name, props) {
  if (typeof Layouts[name] !== "undefined") {
    return React.createElement(Layouts[name], props);
  }
}

const Layout = props => {

  const { user, loading } = props;

  if (loading) {
    return <>Loading...</>
  }
  const layout = getLayout(props.layout, props);

  return (
      <div className={`layout-${props.layout}`}>
        <Head>
          <title title="title">Gravity Zero IO</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest.json" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content={process.env.ENVIRONMENT === 'production' ? "index, follow" : "noindex, nofollow" } title="robots"/>
          <meta name="googlebot" content={process.env.ENVIRONMENT === 'production' ? "index, follow, archive" : "noindex, nofollow, noarchive" } title="googlebots"/>
          <meta name="env" content={process.env.ENVIRONMENT} />         
          <meta name="color-scheme" content="dark light"></meta>
        </Head>

        
        {layout}

        {/*
       * Display a grid during development.
       * Press `control + option g` to toggle.
       */}
        {process.env.ENVIRONMENT === 'dev' ? <DevGrid /> : null}

      </div>

  );
};

export default Layout;
