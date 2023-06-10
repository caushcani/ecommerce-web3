import { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

const Web3Context: any = createContext(null);

const Web3Provider = ({ children }: any) => {
  const [web3Provider, setweb3Provider] = useState<any>(null);
  const [account, setAccount] = useState<any>(null);

  const initializeProvider = async () => {
    let provider = null;
    if (window?.ethereum) {
      provider = window?.ethereum;
      const res = await provider.request({ method: 'eth_requestAccounts' });
      if (res) {
        setAccount(res[0]);
      }
    } else if (window?.web3) {
      provider = window.web3.currentProvider;
    } else {
      provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    setweb3Provider({
      web3: new Web3(provider),
    });
  };

  useEffect(() => {
    initializeProvider();
  }, []);

  return (
    account && (
      <Web3Context.Provider
        value={{
          web3Provider,
          account,
          isAdmin: account === '0xf97f4906af0170043e089ae4a53be8f5d86bd4d8',
        }}
      >
        {children}
      </Web3Context.Provider>
    )
  );
};

export const useWeb3Provider = () => {
  return useContext(Web3Context);
};

export default Web3Provider;
