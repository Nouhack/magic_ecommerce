import Carousel_component from "../components/Carousel";



import Hero from "../components/Hero";
import Productslist from "../components/Productslist";
import Header from "../components/Header";
import { useState } from "react";
import { ar_lan, en_lan, fr_lan } from "../utils/Language_data";

export default function WrapperComponent(props: any) {
    const [selectedProducts, setselectedProducts] = useState([]);
    const [total_sum, settotal_sum] = useState(0);
    const [default_language, setdefault_language] = useState("fr");

    return (
        <>
            <Header
                lan={default_language === "fr" ? fr_lan : default_language === "en" ? en_lan : ar_lan}
                default_language={default_language}
                list={selectedProducts}
                total={total_sum}
                settotal={settotal_sum}
                setlist={setselectedProducts}
                setdefault_language={setdefault_language}
                visible={props.visible}
                setVisible={props.setVisible}
            />
            <div className="">
                <div style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <video src='./brand.mp4' style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} autoPlay muted loop />
                </div>
                <Hero
                    lan={default_language === "fr" ? fr_lan : default_language === "en" ? en_lan : ar_lan}
                    default_language={default_language}
                />
                <Carousel_component
                    lan={default_language === "fr" ? fr_lan : default_language === "en" ? en_lan : ar_lan}
                    default_language={default_language}
                />
                <Productslist
                    lan={default_language === "fr" ? fr_lan : default_language === "en" ? en_lan : ar_lan}
                    default_language={default_language}
                    settotal={settotal_sum}
                    val={selectedProducts}
                    selected={setselectedProducts}
                />
            </div>
        </>
    );
}
