import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Navbar from '@/components/navbar';
import Web3Provider, { useWeb3Provider } from '@/utils/web3provider';
import WelcomeCard from '@/components/welcome-card';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Web3Provider>
      <Layout>
        <Seo />
        <main>
          <Navbar />
          <WelcomeCard />
        </main>
      </Layout>
    </Web3Provider>
  );
}
