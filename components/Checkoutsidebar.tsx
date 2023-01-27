import { Sidebar } from "primereact/sidebar";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";
import { useState } from "react";

export default function Checkoutsidebar(props: any) {
  const [showcheckoutmodal, setshowcheckoutmodal] = useState(false);

  const [selecteditems, setselecteditems] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Dialog
        header="Checkout"
        visible={showcheckoutmodal}
        maximizable
        modal
        style={{ width: "90vw" }}
        onHide={() => setshowcheckoutmodal(false)}
      >
        <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
          <div className="grid -mr-3 -ml-3">
            <div className="col-12 lg:col-8 p-4">
              <div className="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div className="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                  <div className="text-900 font-medium text-xl">
                    Contact Information{" "}
                  </div>
                  <div className="mt-3 lg:mt-0">
                    <span className="text-600 mr-2">
                      Already hava an account?
                    </span>
                    <a
                      tabIndex={0}
                      className="cursor-pointer text-900 hover:text-primary transition-duration-150"
                    >
                      Login
                    </a>
                  </div>
                </div>
                <div
                  className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3"
                  role="separator"
                >
                  <div className="p-divider-content" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                  <label htmlFor="name2" className="text-900 font-medium mb-3">
                    Name
                  </label>
                  <input type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                  <label
                    htmlFor="surname2"
                    className="text-900 font-medium mb-3"
                  >
                    Surname
                  </label>
                  <input type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 field mb-0">
                  <label
                    htmlFor="address3"
                    className="text-900 font-medium mb-3"
                  >
                    Apartment, Suite, etc.
                  </label>
                  <input type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                  <label htmlFor="pc2" className="text-900 font-medium mb-3">
                    Postal Code
                  </label>
                  <input type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                  <label htmlFor="city2" className="text-900 font-medium mb-3">
                    City
                  </label>
                  <input type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 field mb-0">
                  <label htmlFor="phone" className="text-900 font-medium mb-3">
                    Phone
                  </label>
                  <input type="text" className="p-inputtext w-full mb-3" />
                </div>
                <div className="col-12 field mb-0">
                  <label htmlFor="phone" className="text-900 font-medium mb-3">
                    Add notes
                  </label>

                  <InputTextarea
                    className="p-inputtext w-full mb-3"
                    rows={5}
                    cols={30}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 lg:col-4 p-4">
              <div className="surface-card border-round shadow-2 p-5">
                <div className="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                  <span className="text-900 font-medium text-lg lg:text-xl">
                    <i className="pi pi-shopping-cart text-xl mr-2" />
                    Your Order (1)
                  </span>
                  <a
                    tabIndex={0}
                    className="text-600 font-medium cursor-pointer hover:text-primary"
                  >
                    Edit Cart
                  </a>
                </div>
                <div className="py-2 mt-3 border-bottom-1 surface-border">
                  <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900">Subtotal</span>
                    <span className="text-900">$12.00</span>
                  </div>
                  <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900">Shipping</span>
                    <span className="text-900">Free</span>
                  </div>
                  <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900">Total</span>
                    <span className="text-900 font-bold">$12.00</span>
                  </div>
                </div>
                <button
                  aria-label="Place Order"
                  className="p-button p-component p-button-primary w-full mt-3"
                >
                  <span className="p-button-label p-c">Place Order</span>
                  <span role="presentation" className="p-ink" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Sidebar
        style={{ width: "30em", textAlign: "center" }}
        className="surface-ground"
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
      >
        <div
          id="slideover-cart"
          className="surface-overlay absolute top-0 right-0 shadow-2 w-full md:w-30rem h-full"
        >
          <div className="flex flex-column h-full">
            <div className="surface-100 p-3 flex">
              <button
                className="p-button p-component p-button-text p-button-rounded p-button-icon-only"
                onClick={() => setVisible(false)}
              >
                <span className="p-button-icon p-c pi pi-chevron-right" />
                <span className="p-button-label p-c">&nbsp;</span>
                <span
                  role="presentation"
                  className="p-ink"
                  style={{ height: 48, width: 48, top: 19, left: 41 }}
                />
              </button>
              <div className="border-right-1 border-300 mx-3" />
              <span className="text-900 text-xl font-medium inline-flex align-items-center ml-1">
                Produits ajoutés
              </span>
            </div>
            <div className="flex-auto overflow-y-auto py-5 px-3 md:px-5">
              <ul className="list-none p-0 m-0">
                {props.list
                  .map((item1: any) => ({
                    name: item1.name,
                    price: item1.price,
                    category: item1.category,
                    quantity: 1,
                    image: item1.image,
                  }))
                  .map((item: any, index: any) => {
                    return (
                      <li key={index} className="flex align-items-center mb-4">
                        <img
                          src={item.image}
                          className="w-6rem sm:w-8rem flex-shrink-0"
                        />

                        <div className="flex-auto px-3">
                          <div className="flex align-items-center justify-content-between mb-3">
                            <span className="text-900 font-medium">
                              {item.name}
                            </span>
                            <span className="text-900 font-bold">
                              {item.price}
                            </span>
                          </div>
                          <div className="text-600 text-sm mb-3">
                            {item.category}
                          </div>
                          <div className="flex flex-auto justify-content-between align-items-center">
                            <span className="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round">
                              <input
                                role="spinbutton"
                                className="p-inputtext p-component p-filled p-inputnumber-input w-3rem text-center py-2 px-1 border-transparent"
                                type="text"
                                inputMode="numeric"
                                min={0}
                                aria-valuemin={0}
                                aria-valuenow={1}
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component p-button-text py-1 px-1"
                                tabIndex={-1}
                              >
                                <span className="p-button-icon pi pi-plus" />
                                <span role="presentation" className="p-ink" />
                              </button>
                              <button
                                type="button"
                                className="p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component p-button-text py-1 px-1"
                                tabIndex={-1}
                              >
                                <span className="p-button-icon pi pi-minus" />
                                <span role="presentation" className="p-ink" />
                              </button>
                            </span>
                            <button className="p-button p-component p-button-danger p-button-text p-button-rounded p-button-icon-only">
                              <span className="p-button-icon p-c pi pi-trash" />
                              <span className="p-button-label p-c">&nbsp;</span>
                              <span role="presentation" className="p-ink" />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="border-top-1 surface-border p-3">
              <div className="flex align-items-center justify-content-between mb-3">
                <span className="text-900 font-medium">
                  Total Amount{" "}
                  <span className="text-600 text-sm">incl. VAT</span>
                </span>
                <span className="text-900 font-bold">$80.00</span>
              </div>
              <button
                onClick={() => {
                  setshowcheckoutmodal(true);
                  setVisible(false);
                }}
                aria-label="Check Out"
                className="p-button p-component p-button-success mb-3 w-full"
              >
                <span className="p-button-label p-c">Check Out</span>
                <span role="presentation" className="p-ink" />
              </button>
              <button
                aria-label="Continue Shopping"
                className="p-button p-component p-button-outlined p-button-secondary w-full"
              >
                <span className="p-button-label p-c">Continue Shopping</span>
                <span role="presentation" className="p-ink" />
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="">
        <div
          onClick={(e) => setVisible(true)}
          className="flex align-items-center p-3 "
        >
          <i className="pi pi-shopping-cart mr-2 text-xl  p-overlay-badge">
            <span className="p-badge p-component p-badge-dot" />
          </i>
          <p className="font-semibold">Panier</p>
          <span role="presentation" className="p-ink" />
        </div>
      </div>
    </>
  );
}
