import ProductDetail from '@/components/product-detail/ProductDetails';
import Web3Provider from '@/utils/web3provider';
import { useRouter } from 'next/router';

const Details = () => {
  const { id } = useRouter().query;
  return (
    <Web3Provider>
      <ProductDetail id={id} />
    </Web3Provider>
  );
};

export default Details;
