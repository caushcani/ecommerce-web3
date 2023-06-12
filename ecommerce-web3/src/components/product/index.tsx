import { useWeb3Provider } from '@/utils/web3provider';

interface IProduct {
  id: any;
  name: string;
  info: string;
  price: number;
  image: string;
}

const ETHEREUM_PRICE = 1715;

interface IProductProps {
  product: IProduct;
}
const Product = (props: IProductProps) => {
  const { id, name, info, price, image } = props.product;
  const { web3Provider, contract, account } = useWeb3Provider();

  const handleBuyProduct = async (id: string, price: number) => {
    if (contract && web3Provider) {
      const hexIdProduct = web3Provider.web3.utils.utf8ToHex(id);
      const orderHash = web3Provider.web3.utils.soliditySha3({
        type: 'bytes16',
        value: hexIdProduct,
      });

      await contract.methods.buyProduct(hexIdProduct, orderHash).send({
        from: account,
        value: price,
      });
    }
  };

  return (
    <div className='max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
      <a>
        <img className='rounded-t-lg' src={image} alt='' />
      </a>
      <div className=' p-5 '>
        <div className='align-center flex justify-between'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>

          <p className='text-sm font-medium text-gray-900'>
            {(price / ETHEREUM_PRICE).toFixed(2)} ETH
          </p>
        </div>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {info}
        </p>
        <button
          // href={`/products/${id}`}
          onClick={() => handleBuyProduct(id, price)}
          className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Buy
          <svg
            aria-hidden='true'
            className='-mr-1 ml-2 h-4 w-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
