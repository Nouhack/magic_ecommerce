import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";

import { InputTextarea } from "primereact/inputtextarea";
import React, { useState } from "react";

type Props = {};

export default function Order_details(props: any) {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = ["New York", "New York", "New York", "New York"];
  const onCityChange = (e: any) => {
    setSelectedCity(e.value);
  };

  return (
    <Dialog
      header="Checkout"
      visible={props.showcheckoutmodal}
      maximizable
      modal
      style={{ width: "90vw" }}
      onHide={() => props.setshowcheckoutmodal(false)}
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
                <label htmlFor="surname2" className="text-900 font-medium mb-3">
                  Surname
                </label>
                <input type="text" className="p-inputtext w-full mb-3" />
              </div>
              <div className="col-12 field mb-0">
                <label htmlFor="address3" className="text-900 font-medium mb-3">
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
                <label htmlFor="phone" className="text-900 font-medium mb-3">
                  City
                </label>
                <Dropdown
                  value={selectedCity}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel=""
                  placeholder="Select a City"
                />
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
  );
}
