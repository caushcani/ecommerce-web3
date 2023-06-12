import OwnedProducts from '@/components/owned-products';
import Web3Provider from '@/utils/web3provider';

const OwnedProductsPage = () => {
  return (
    <>
      <Web3Provider>
        <OwnedProducts />
      </Web3Provider>
    </>
  );
};

export default OwnedProductsPage;
