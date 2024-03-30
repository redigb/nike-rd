import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Buttons";

const SpecialOferts = () => {
    return (
        <section className="flex justify-wrap items-center 
        max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} alt="ofeta" 
                width={773}
                height={687}
                className="object-contain"/>
            </div>
            <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Especial</span> Oferta
        </h2>
        <p className='mt-4 info-text'>
            Embárcate en un viaje de compras que redefine tu experiencia con
            ofertas inmejorables. Desde selecciones de primer nivel hasta ahorros increíbles, nosotros
            ofrecer un valor incomparable que nos diferencia.
        </p>
        <p className='mt-6 info-text'>
           Navegue por un reino de posibilidades diseñado para satisfacer sus necesidades únicas.
           deseos, superando las expectativas más elevadas. Tu viaje con nosotros es
           nada menos que excepcional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Compra ahora' iconURL={arrowRight} />
          <Button
            label='Aprende más'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
        </section>
    );
}

export default SpecialOferts;
