
import { shoe8 } from "../assets/images";
import Button from "../components/Buttons";

const SuperQuality = () => {
    return (
        <section id="sobre-nosotros"
            className="flex justify-between items-center max-lg:flex-col
        gap-10 w-full max-container">
            <div className="flex flex-1 flex-col ">
                <h2 className="font-palanquin text-4xl capitalize font-bold
            lg:max-w-lg"> {/*max-sm:leading-[82]*/}
                    te proporcionamos {" "}
                    <span className="text-coral-red inline-block
                    mt-3"> Zapatos </span>{" "}
                    de súper calidad
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Nuestro calzado meticulosamente elaborado, que garantiza comodidad y 
                    estilo de primer nivel, está diseñado para mejorar su experiencia, 
                    brindándole calidad inigualable, innovación y un toque de elegancia.
                </p>
                <p className="mt-4 lg:max-w-lg info-text">
                    Nuestra dedicación al detalle y la excelencia 
                    garantiza su satisfacción.
                </p>
                <div className="mt-11">
                    <Button label="Ver detalles" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8"
                width={570}
                height={522}
                className="object-contain" />
            </div>
        </section>
    );
}

export default SuperQuality;
