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
import Languages from "./sub_components/languages";

export default function Checkoutsidebar(props: any) {
    const [showcheckoutmodal, setshowcheckoutmodal] = useState(false);
    const [localtotal, setlocaltotal] = useState(props.total);
    const [selecteditems, setselecteditems] = useState("");
    const [visible, setVisible] = useState(false);
    const [deleted, setdeleted] = useState(false);
    useEffect(() => {
        setdeleted(false);
    }, [deleted]);



    const go_to_checkout_page = () => {

        setVisible(false);
        // hna ndir total = localtotal
        props.settotal(localtotal)
        setshowcheckoutmodal(true);
    }

    const comp_array = [
        <Languages
            key={1}
            default_language={props.default_language}
            setdefault_language={props.setdefault_language}
        />,

        <div
            key={2}
            onClick={(e) => setVisible(true)}
            className="flex align-items-center p-3 "
        >
            <i className="pi pi-shopping-cart mr-2 text-xl  p-overlay-badge">
                {props.total ? (
                    <span className="p-badge p-component p-badge-dot" />
                ) : (
                    ""
                )}
            </i>
            <p className="font-semibold">{props.lan.header.cart}</p>
            <span role="presentation" className="p-ink" />
        </div>,
    ];

    return (
        <>
            <Order_details
                showcheckoutmodal={showcheckoutmodal}
                setshowcheckoutmodal={setshowcheckoutmodal}
                total={props.total}
                nombre_de_produit={props.list.length}
                list={props.list}
            />
            <Sidebar
                style={{ width: "30em", textAlign: "center" }}
                className="surface-ground"
                visible={visible}

                position="right"
                onHide={() => {
                    setVisible(false)
                    props.settotal(localtotal)
                }}
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
                                {props.lan.checkout_sidebar.title}
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
                                                //settotal={props.settotal}
                                                setlocaltotal={setlocaltotal}
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
                                {props.default_language === "ar"
                                    ? [
                                        <span key={1} className="text-900 font-medium">
                                            {props.lan.checkout_sidebar.total_amount_title} {""}
                                            <span className="text-600 text-sm">
                                                {props.lan.checkout_sidebar.note}
                                            </span>
                                        </span>,
                                        <span key={2} className="text-900 font-bold">
                                            {formatter.format(localtotal)}
                                        </span>,
                                    ].reverse()
                                    : [
                                        <span key={2} className="text-900 font-medium">
                                            {props.lan.checkout_sidebar.total_amount_title} {""}
                                            <span className="text-600 text-sm">
                                                {props.lan.checkout_sidebar.note}
                                            </span>
                                        </span>,
                                        <span key={3} className="text-900 font-bold">
                                            {formatter.format(localtotal)}
                                        </span>,
                                    ]}
                            </div>

                            <button
                                onClick={go_to_checkout_page}

                                aria-label="Check Out"
                                className="p-button p-component p-button-success mb-3 w-full"
                            >
                                <span className="p-button-label p-c">
                                    {props.lan.checkout_sidebar.button_label}
                                </span>
                                <span role="presentation" className="p-ink" />
                            </button>
                            <button
                                aria-label="Continue Shopping"
                                className="p-button p-component p-button-outlined p-button-secondary w-full"
                            >
                                <span className="p-button-label p-c">
                                    {props.lan.checkout_sidebar.second_button_label}
                                </span>
                                <span role="presentation" className="p-ink" />
                            </button>
                        </div>
                    </div>
                </div>
            </Sidebar>
            <div className="">
                <div className="flex align-items-center p-3 ">
                    {props.default_language === "ar" ? comp_array.reverse() : comp_array}
                </div>
            </div>
        </>
    );
}
