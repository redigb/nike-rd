import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
    return (
        <section id="products" 
        className="max-container">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">
                    Nuestros productos <span className="text-coral-red">Populares</span>
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat
                text-slate-gray">Experimente la mejor calidad y estilo con nuestras codiciadas selecciones. 
                   Descubra un mundo de comodidad, diseño y valor.
                </p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
            sm:grid-cols-2 grid-cols-1
            sm:gap-4 gap-14">
                {products.map((product) => (
                    <PopularProductsCard key={product.name} {...product}/>
                ))}
            </div>
        </section>
    );
}

export default PopularProducts;
