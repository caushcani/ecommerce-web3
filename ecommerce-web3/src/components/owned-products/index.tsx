import { useWeb3Provider } from '@/utils/web3provider';
import { useEffect, useState } from 'react';
import SampleProduct from '../../sample-products/index.json';

const OwnedProducts = () => {
  const { contract, web3Provider, account } = useWeb3Provider();
  const [myProductsState, setMyProductsState] = useState<any>(null);
  const allProducts = [
    {
      id: '96YC510',
      name: 'hero Product',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      info: 'This is the latest and greatest product from Derp corp.',
      hero: 'OMG This just came out today!',
      image: 'http://placehold.it/300x300/999/CCC',
    },
    {
      id: 'Z9G4410',
      name: 'Product 1',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      info: 'This is the latest and greatest product from Derp corp.',
      image: 'http://placehold.it/300x300/999/CCC',
    },
    {
      id: 'VL4KS10',
      name: 'Product 2',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      offer: 'BOGOF',
      info: 'This is the latest and greatest product from Derp corp.',
      image: 'http://placehold.it/300x300/999/CCC',
    },
    {
      id: '2P2SV10',
      name: 'Product 3',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      image: 'http://placehold.it/300x300/999/CCC',
      info: 'This is the latest and greatest product from Derp corp.',
    },
    {
      id: 'D43YB10',
      name: 'Product 4',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      info: 'This is the latest and greatest product from Derp corp.',
      offer: 'No srsly GTFO',
      image: 'http://placehold.it/300x300/999/CCC',
    },
    {
      id: '9P4LP10',
      name: 'Product 5',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      info: 'This is the latest and greatest product from Derp corp.',
      image: 'http://placehold.it/300x300/999/CCC',
    },
    {
      id: '323A98DB',
      name: 'Product 6',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      info: 'This is the latest and greatest product from Derp corp.',
      offer: 'info with offer',
      image: 'http://placehold.it/300x300/999/CCC',
    },
  ];

  const getOwnedProducts = async () => {
    let myProducts: any = [];
    console.log(allProducts);
    if (contract && web3Provider && allProducts) {
      for (let index = 0; index < allProducts.length; index++) {
        const hexIdProduct = web3Provider.web3.utils.utf8ToHex(
          allProducts[index].id
        );
        const productHash = web3Provider.web3.utils.soliditySha3(
          {
            type: 'bytes16',
            value: hexIdProduct,
          },
          {
            type: 'address',
            value: account,
          }
        );

        const res = await contract.methods.getProductByHash(productHash).call();

        if (res && res.owner !== '0x0000000000000000000000000000000000000000') {
          myProducts.push(res);
        }
      }
      setMyProductsState(myProducts);
    }
  };

  useEffect(() => {
    allProducts && getOwnedProducts();
  }, []);

  console.log('myProductsState', myProductsState);
  return (
    <>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          My products list
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {myProductsState &&
            myProductsState.map((el: any) => {
              return <>{JSON.stringify(el)}</>;
            })}
        </div>
      </div>
    </>
  );
};

export default OwnedProducts;
