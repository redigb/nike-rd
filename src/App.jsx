import Nav from "./components/Nav";

import {Hero,
  PopularProducts,
  CustomersReviews,
  SpecialOferts,
  SuperQuality,
  Subcribe,
  Services,
  Footer } from "./sections";


const App = () =>(
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
     <section className="padding">
      <SuperQuality  />
    </section>
     <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOferts />
    </section>
    <section className="bg-pale-blue padding">
      <CustomersReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);


export default App; 