import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const CarouselDemo = () => {
  return (
    <div className="carousel-demo  w-full mt-5">
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="flex md:col-6 xl:col-4 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500">
            <i className="pi pi-arrow-right text-pink-500 text-4xl mr-5" />
            <div className="">
              <span className="text-900 font-medium text-xl">
                Commandez facilement
              </span>{" "}
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Commandez facilement avec un site Web au design moderne
              </p>
            </div>
          </div>
          <div className="flex md:col-6 xl:col-4 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500">
            <i className="pi pi-shopping-cart text-blue-500 text-4xl mr-5" />
            <div>
              <span className="text-900 font-medium text-xl">
                Expédition rapide
              </span>
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Votre produit sera livré le plus rapidement possible
              </p>
            </div>
          </div>
          <div className="flex md:col-6 xl:col-4 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500">
            <i className="pi pi-shield text-orange-500 text-4xl mr-5" />
            <div>
              <span className="text-900 font-medium text-xl">
                Identité anonyme
              </span>
              <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                Commandez sans révéler votre identité
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDemo;
