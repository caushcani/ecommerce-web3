import ProductList from '@/components/product-list';
import Web3Provider from '@/utils/web3provider';

const Products = () => {
  return (
    <Web3Provider>
      <ProductList />
    </Web3Provider>
  );
};

export default Products;
