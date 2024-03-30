import { useState } from "react";

import Button from "../components/Buttons";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images";

import ShoeCard from "../components/ShoeCard";

const Hero = () => {

    const[bigShoeImg, setBigShoeImg] = useState(bigShoe1);


    return (
        <section id="home" className="w-full flex xl:flex-row flex-col
        justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col jutify-center
            items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Nuestra colección de verano</p>
                <h1 className="mt-10 font-palanquin text-8xl
                max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white
                    xl:whitespace-nowrap relative z-10 pr-10">La nueva llegada</span>
                    <br />
                    Tenis {" " /*Quitar max-sm:leading-[82]*/}
                    <span className="text-coral-red inline-block
                    mt-3">Nike</span>
                </h1>
                <p className="font-montserrat text-slate-gray 
                  text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Descubre novedades Nike con estilo,
                    comodidad de calidad e innovación
                    para tu vida activa.
                </p>
                <Button label="Compra ahora" iconUrl={arrowRight} />
                <div className="flex justify-stars items-start flex-wrap
                w-full mt-20 gap-16">
                    {statistics.map((sat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palanquin font-bold">{sat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{sat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center
                 items-center xl:min-h-screen max-xl:py-40 bg-primary
                 bg-hero bg-cover bg-center">
                <img src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />

                <div className="flex sm:gap-6 gap-4 
                absolute -bottom-[5%] sm:left-[10%] 
                max-sn:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={index}>
                            <ShoeCard imgUrl={shoe}
                                changeBingshoImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImage={bigShoeImg} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
