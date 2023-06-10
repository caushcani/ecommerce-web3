import { useWeb3Provider } from '@/utils/web3provider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MENU_ITEM = [
  {
    page: 'Home',
    link: '/',
  },
  {
    page: 'Products',
    link: '/products',
  },
  {
    page: 'Profile',
    link: '/profile',
  },
];

const Navbar = () => {
  const { web3Provider, account }: any = useWeb3Provider();
  const [accountSelected, setAccountSelected] = useState(
    account ? account : null
  );
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(router.pathname);

  const handleConnectWallet = async () => {
    if (window?.ethereum) {
      const res = await window?.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (res) {
        setAccount(res[0]);
      }
    }
  };

  return (
    <nav className='fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='' className='flex items-center'>
          <img
            src='https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png'
            className='mr-3 h-8'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
            EthCommerce
          </span>
        </a>
        <div className='flex md:order-2'>
          <button
            type='button'
            onClick={() => {
              if (!account) {
                handleConnectWallet();
              }
            }}
            className='mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0'
          >
            {account ? 'Connected' : 'Connect Wallet'}
          </button>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
            {MENU_ITEM.map((item: { page: string; link: string }) => {
              return (
                <li>
                  <Link
                    onClick={() => setActiveRoute(item.link as any)}
                    href={item.link}
                    className={`block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 ${
                      activeRoute === item.link
                        ? 'md:text-blue-700'
                        : 'md:text-blue-100'
                    } md:dark:text-blue-500`}
                  >
                    {item.page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
