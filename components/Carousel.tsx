import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const CarouselDemo = (props: any) => {
  return (
    <div className="carousel-demo  w-full mt-5">
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-wrap ">
          <div
            className={`flex h-full md:col-6 xl:col-4 justify-content-end align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500 ${
              props.default_language === "ar" && "text-right"
            }`}
          >
            {props.default_language === "ar"
              ? [
                  <i
                    key={1}
                    className="pi pi-arrow-right text-pink-500 text-4xl ml-5"
                  />,
                  <div key={2}>
                    <span className="text-900 font-medium text-xl">
                      {props.lan.features[0].title}
                    </span>
                    <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                      {props.lan.features[0].description}
                    </p>
                  </div>,
                ].reverse()
              : [
                  <i
                    key={1}
                    className="pi pi-arrow-right text-pink-500 text-4xl mr-5"
                  />,
                  <div key={2}>
                    <span className="text-900 font-medium text-xl">
                      {props.lan.features[0].title}
                    </span>
                    <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                      {props.lan.features[0].description}
                    </p>
                  </div>,
                ]}
          </div>

          <div
            className={`flex h-full md:col-6 xl:col-4 justify-content-end align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500 ${
              props.default_language === "ar" && "text-right"
            }`}
          >
            {props.default_language === "ar"
              ? [
                  <i
                    key={1}
                    className="pi pi-shopping-cart text-blue-500 text-4xl ml-5"
                  />,
                  <div key={2}>
                    <span className="text-900 font-medium text-xl">
                      {props.lan.features[1].title}
                    </span>
                    <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                      {props.lan.features[1].description}
                    </p>
                  </div>,
                ].reverse()
              : [
                  <i
                    key={1}
                    className="pi pi-shopping-cart text-blue-500 text-4xl mr-5"
                  />,
                  <div key={2}>
                    <span className="text-900 font-medium text-xl">
                      {props.lan.features[1].title}
                    </span>
                    <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                      {props.lan.features[1].description}
                    </p>
                  </div>,
                ]}
          </div>
          <div
            className={`flex h-full md:col-6 xl:col-4 justify-content-end align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500 ${
              props.default_language === "ar" && "text-right"
            }`}
          >
            {props.default_language === "ar"
              ? [
                  <i
                    key={1}
                    className="pi pi-shield text-orange-500 text-4xl ml-5"
                  />,
                  <div key={2}>
                    <span className="text-900 font-medium text-xl">
                      {props.lan.features[2].title}
                    </span>
                    <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                      {props.lan.features[2].description}
                    </p>
                  </div>,
                ].reverse()
              : [
                  <i
                    key={1}
                    className="pi pi-shield text-orange-500 text-4xl mr-5"
                  />,
                  <div key={2}>
                    <span className="text-900 font-medium text-xl">
                      {props.lan.features[2].title}
                    </span>
                    <p className="text-600 line-height-3 p-0 mt-3 mb-0">
                      {props.lan.features[2].description}
                    </p>
                  </div>,
                ]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDemo;

/* 

            <i className="pi pi-shopping-cart text-blue-500 text-4xl mr-5" />

            <i className="pi pi-arrow-right text-pink-500 text-4xl mr-5" />
*/
