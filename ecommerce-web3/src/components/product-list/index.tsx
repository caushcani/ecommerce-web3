import SampleProduct from '../../sample-products/index.json';
import Footer from '../footer';
import Navbar from '../navbar';
import Product from '../product';

const ProductList = () => {
  console.log('sample', SampleProduct);

  return (
    SampleProduct && (
      <div className='bg-white'>
        <Navbar />
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Product list
          </h2>

          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {SampleProduct.map((product: any) => {
              return (
                // <div className='group relative'>
                // <div className='aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                <Product product={product} />
                // </div>
                // </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  );
};

export default ProductList;
