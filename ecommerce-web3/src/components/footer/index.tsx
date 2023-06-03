const Footer = () => {
  return (
    <footer className='m-4 rounded-lg bg-white  dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='mb-4 flex items-center sm:mb-0'>
            <img
              src='https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png'
              className='mr-3 h-8'
              alt='Flowbite Logo'
            />
            <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              EthCommerce
            </span>
          </div>
          <ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                About
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                Licensing
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © {new Date().getFullYear()}. Less trust, more truth.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
