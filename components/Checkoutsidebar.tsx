import { Sidebar } from "primereact/sidebar";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { setMaxListeners } from "events";
import CheckoutSidebarItem from "./subcomponent/CheckoutSidebarItem";
import { formatter } from "../utils/Money_formatter";
import Order_details from "./dialogs/Make_order";

export default function Checkoutsidebar(props: any) {
  const [showcheckoutmodal, setshowcheckoutmodal] = useState(false);
  const [selecteditems, setselecteditems] = useState("");
  const [visible, setVisible] = useState(false);
  const [deleted, setdeleted] = useState(false);
  useEffect(() => {
    setdeleted(false);
  }, [deleted]);

  return (
    <>
      <Order_details
        showcheckoutmodal={showcheckoutmodal}
        setshowcheckoutmodal={setshowcheckoutmodal}
      />
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
                  .map((item1: any, index1: number) => ({
                    product_name: item1.product_name,
                    category: item1.category,
                    color: item1.color,
                    size: item1.size,
                    price: item1.price,
                    quantity: item1.quantity,
                    image: item1.image,
                  }))
                  .map((item: any, index: any) => {
                    return (
                      <CheckoutSidebarItem
                        key={index}
                        settotal={props.settotal}
                        total={props.total}
                        item={item}
                        index={index}
                        list={props.list}
                        setlist={props.setlist}
                        setdeleted={setdeleted}
                      />
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
                <span className="text-900 font-bold">
                  {formatter.format(props.total)}
                </span>
              </div>

              <button
                onClick={() => {
                  console.log(props.list);
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
