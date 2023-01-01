import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const CarouselDemo = () => {
  const [products, setProducts] = useState([
    {
      name: 'product 1',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 10
    },
    {
      name: 'product 1',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 10
    },
    {
      name: 'product 1',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 10
    },
    {
      name: 'product 1',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 10
    },

  ]);
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];



  const productTemplate = (product: any) => {
    return (



      <div className="p-carousel-item p-carousel-item-active p-carousel-item-start">

        <div className="p-4 text-center">
          <img
            src={product.image}
            className="w-full border-round-lg overflow-hidden"
            alt="product"
            height={350}
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>


    );
  }

  return (

    <div className="carousel-demo  w-full mt-5">

      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500">
            <i className="pi pi-arrow-right text-pink-500 text-4xl mr-5" />
            <div>
              <span className="text-900 font-medium text-xl">
                Pay Later in 30 Days
              </span>
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Ullamcorper sit amet risus nullam eget felis eget nunc.
              </p>
            </div>
          </div>
          <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500">
            <i className="pi pi-shopping-cart text-blue-500 text-4xl mr-5" />
            <div>
              <span className="text-900 font-medium text-xl">Free Shipping</span>
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Ullamcorper sit amet risus nullam eget felis eget nunc.
              </p>
            </div>
          </div>
          <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500">
            <i className="pi pi-shield text-orange-500 text-4xl mr-5" />
            <div>
              <span className="text-900 font-medium text-xl">Secure Payment</span>
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Ullamcorper sit amet risus nullam eget felis eget nunc.
              </p>
            </div>
          </div>
          <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-cyan-500">
            <i className="pi pi-refresh text-cyan-500 text-4xl mr-5" />
            <div>
              <span className="text-900 font-medium text-xl">
                Money Back Guarantee
              </span>
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Ullamcorper sit amet risus nullam eget felis eget nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
        autoplayInterval={3000} itemTemplate={productTemplate} />

    </div>


  );
}

export default CarouselDemo 
