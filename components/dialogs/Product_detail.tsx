import React from "react";
import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { formatter } from "../../utils/Money_formatter";

type Props = {};

export default function Product_detail(props: any) {
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  return (
    <Dialog
      visible={props.openproductdetail}
      className="max-w-full md:w-8 "
      position="top"
      modal
      onHide={() => props.setopenproductdetail(false)}
      draggable={true}
      resizable={true}
    >
      <div
        id="pr_id_5_content"
        className="p-dialog-content "
        style={{ paddingTop: "1rem" }}
      >
        <div className="grid relative  overflow-y-auto overflow-x-hidden">
          <div className="col-12 lg:col-6  text-center ">
            <Galleria
              style={{ maxWidth: "640px" }}
              value={props.selecteditem?.imagesdetail}
              responsiveOptions={responsiveOptions}
              numVisible={3}
              item={(e, i) => {
                return (
                  <img
                    key={i}
                    src={e.image}
                    alt="none"
                    className="w-full "
                    style={{ objectFit: "cover", height: "400px" }}
                  />
                );
              }}
              thumbnailsPosition={"bottom"}
              thumbnail={props.thumbnailTemplate}
            />
          </div>
          <div className="col-12 lg:col-6 py-0 lg:pl-5  flex flex-column justify-content-between">
            <div className="flex align-items-center justify-content-between mb-3">
              <span className="text-xl font-medium text-900">
                {props.selecteditem?.name}
              </span>
            </div>
            <div className="flex align-items-center justify-content-between mb-3">
              <div className="text-xl text-900">
                {formatter.format(props.selecteditem?.price)}
              </div>
              <div className="flex align-items-center">
                <span className="mr-3 flex">
                  <i className="pi pi-star-fill text-yellow-500 mr-1" />
                  <i className="pi pi-star-fill text-yellow-500 mr-1" />
                  <i className="pi pi-star-fill text-yellow-500 mr-1" />
                  <i className="pi pi-star-fill text-yellow-500 mr-1" />
                  <i className="pi pi-star-fill text-yellow-500" />
                </span>
              </div>
            </div>
            <div className="">
              <p className=" p-0 mt-0 mb-3 line-height-3 text-700">
                {props.selecteditem?.description}
              </p>
            </div>
            <div
              className={`font-bold text-900  mb-3 ${
                props.default_language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {props.lan.product_details.colors}
            </div>
            <div className="flex align-items-center mb-5">
              {!props.selecteditem?.colors ? (
                <div
                  className="w-2rem h-2rem flex-shrink-0 border-circle mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300 flex align-items-center justify-content-center"
                  style={{
                    boxShadow:
                      "" === props.selectedcolor
                        ? "0 0 0 0.2rem var(--cyan-500)"
                        : "none",
                  }}
                  onClick={() => {
                    props.setselectedcolor("");
                  }}
                >
                  <i className="pi pi-ban"></i>
                </div>
              ) : (
                props.selecteditem.colors?.map((item: any, index: number) => {
                  return (
                    <div
                      className="w-2rem h-2rem flex-shrink-0 border-circle mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300"
                      key={index}
                      style={{
                        backgroundColor: item.color,
                        boxShadow:
                          item.color === props.selectedcolor ||
                          (props.selectedcolor === "" && index === 0)
                            ? "0 0 0 0.2rem var(--cyan-500)"
                            : "none",
                      }}
                      onClick={() => {
                        props.setselectedcolor(item.color);
                      }}
                    />
                  );
                })
              )}
            </div>
            <div
              className={`font-bold text-900  flex justify-content-between mb-3`}
            >
              {props.default_language === "ar"
                ? [
                    <span key={1} className="font-bold text-900">
                      {props.lan.product_details.sizes}
                    </span>,
                    <a
                      key={2}
                      tabIndex={0}
                      className="cursor-pointer text-600 text-sm flex align-items-center"
                    >
                      {props.lan.product_details.size_guide}
                      <i className="ml-1 pi pi-angle-right" />
                    </a>,
                  ].reverse()
                : [
                    <span key={1} className="font-bold text-900">
                      {props.lan.product_details.sizes}
                    </span>,
                    <a
                      key={2}
                      tabIndex={0}
                      className="cursor-pointer text-600 text-sm flex align-items-center"
                    >
                      {props.lan.product_details.size_guide}
                      <i className="ml-1 pi pi-angle-right" />
                    </a>,
                  ]}
            </div>
            <div className="flex align-items-center mb-3 text-base">
              {!props.selecteditem?.sizes ? (
                <div
                  className={`h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors ${
                    props.selectedsize === ""
                      ? " border-blue-500 border-2 text-blue-500"
                      : "none"
                  }`}
                  onClick={() => {
                    props.setselectedsize("");
                  }}
                >
                  <i className="pi pi-ban"></i>
                </div>
              ) : (
                props.selecteditem?.sizes?.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors ${
                        props.selectedsize === item.size ||
                        (props.selectedsize === "" && index === 0)
                          ? " border-blue-500 border-2 text-blue-500"
                          : "none"
                      }`}
                      onClick={() => {
                        props.setselectedsize(item.size);
                      }}
                    >
                      {item.size}
                    </div>
                  );
                })
              )}
            </div>

            <Button
              icon="pi pi-shopping-cart p-button-outlined p-button-secondary"
              label={props.lan.product_details.add_to_cart}
              className="p-button-rounded p-button-outlined p-button-secondary w-full text-center "
              style={{
                display: "inline-block",
              }}
              onClick={() => {
                const added_product = {
                  product_name: props.selecteditem.name,
                  category: props.selecteditem.category,
                  color:
                    props.selectedcolor === ""
                      ? props.selecteditem.colors
                        ? props.selecteditem.colors[0].color
                        : ""
                      : props.selectedcolor,
                  size:
                    props.selectedsize === ""
                      ? props.selecteditem.sizes
                        ? props.selecteditem.sizes[0].size
                        : ""
                      : props.selectedsize,

                  price: props.selecteditem.price,
                  quantity: 1,
                  image: props.selecteditem.image,
                };
                //console.log(selecteditem , 'hada hwa')
                props.addToCart(added_product);
                props.setopenproductdetail(false);
              }}
            ></Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
