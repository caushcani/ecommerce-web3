import { useWeb3Provider } from '@/utils/web3provider';
import Navbar from '../navbar';
import { useEffect, useState } from 'react';

const ProfileCard = () => {
  const { web3Provider, account }: any = useWeb3Provider();
  const [network, setNetwork] = useState(null);

  const getNetwork = async () => {
    if (web3Provider) {
      const res = await web3Provider.web3.eth.net.getId();
      if (res) {
        setNetwork(res);
      }
    }
  };

  useEffect(() => {
    getNetwork();
  }, [web3Provider]);
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className=' rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
          <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            Hello,
            {account}
          </h5>
          You are connected to {network}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
