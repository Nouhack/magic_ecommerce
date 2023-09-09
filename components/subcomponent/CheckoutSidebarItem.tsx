import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";
import React, { useEffect, useState } from "react";
import { formatter } from "../../utils/Money_formatter";

type Props = {};

export default function CheckoutSidebarItem(props: any) {
    const [quantity, setquantity] = useState(props.item.quantity);

    const Delete_item = () => {
        // set the new list after deleting the item
        let new_array = props.list;
        new_array.splice(props.index, 1);
        props.setlist((prev: any) => new_array);

        //props.settotal((prev: number) => prev - props.item.price * quantity);

        props.setlocaltotal((prev: number) => prev - props.item.price * quantity);
        console.log(new_array);
        props.setdeleted(true);
    };

    const add_quantity = () => {
        // modify the item
        let modified_item = props.item;
        modified_item.quantity += 1;
        // delete the old item from the list
        let new_list = props.list;
        new_list.splice(props.index, 1);
        // insert the modified value instead of the old one
        new_list.splice(props.index, 0, modified_item);

        props.setlist(new_list);
        setquantity((prev) => prev + 1);
        //props.settotal((prev: number) => prev + props.item.price);
        props.setlocaltotal((prev: number) => prev + props.item.price);
    };

    const sub_quantity = () => {
        if (quantity > 1) {
            // modify the item
            let modified_item = props.item;
            modified_item.quantity -= 1;
            // delete the old item from the list
            let new_list = props.list;
            new_list.splice(props.index, 1);
            // insert the modified value instead of the old one
            new_list.splice(props.index, 0, modified_item);

            props.setlist(new_list);
            setquantity((prev) => prev - 1);
            //props.settotal((prev: number) => prev - props.item.price);
            props.setlocaltotal((prev: number) => prev - props.item.price);
        }
    };

    return (
        <li key={props.index} className="flex align-items-center mb-4">
            <img src={props.item.image} className="w-6rem sm:w-8rem flex-shrink-0" />

            <div className="flex-auto px-3">
                <div className="flex align-items-center justify-content-between mb-3">
                    <span className="text-900 font-medium">
                        {props.item.product_name}
                    </span>
                    <span className="text-900 font-bold">
                        {formatter.format(props.item.price)}
                    </span>
                </div>
                <div className="text-600 text-sm mb-3">{props.item.category}</div>
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
                            value={quantity}
                        />
                        <button
                            type="button"
                            className="p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component p-button-text py-1 px-1"
                            tabIndex={-1}
                            onClick={() => {
                                add_quantity();
                            }}
                        >
                            <span className="p-button-icon pi pi-plus" />
                            <span role="presentation" className="p-ink" />
                        </button>
                        <button
                            type="button"
                            className="p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component p-button-text py-1 px-1"
                            tabIndex={-1}
                            onClick={() => {
                                sub_quantity();
                            }}
                        >
                            <span className="p-button-icon pi pi-minus" />
                            <span role="presentation" className="p-ink" />
                        </button>
                    </span>
                    <button
                        className="p-button p-component p-button-danger p-button-text p-button-rounded p-button-icon-only"
                        onClick={() => {
                            console.log("rani hna");
                            Delete_item();
                        }}
                    >
                        <span className="p-button-icon p-c pi pi-trash" />
                        <span className="p-button-label p-c">&nbsp;</span>
                        <span role="presentation" className="p-ink" />
                    </button>
                </div>
            </div>
        </li>
    );
}
