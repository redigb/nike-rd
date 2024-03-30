import Button from "../components/Buttons"

const Subcribe = () => {
    return (
        <section className="max-container flex justify-between
        items-center max-lg:flex-col gap-10" id="contactanos">
            <h3 className="text-4xl leading-[68px]
            lg:max-w-md font-palanquin font-bold">Suscríbete para recibir <span className="
            text-coral-red">actualizaciones </span> & boletines.
            </h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5
            sm:border sm:border-slate-gray rounded-full">
                <input type="text" 
                placeholder="subscribe@nike.com"
                className="input"/>
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="inscribirse" fullWidth/>
                </div>
            </div>
        </section>
    );
}

export default Subcribe;
