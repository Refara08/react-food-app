import heroImg from "../../img/hero-img.jpg";

const HeaderHero = () => {
  return (
    <main className="container mx-auto p-8">
      <div className="grid lg:grid-cols-2 place-items-center">
        <div className="text py-8 px-16">
          <h3 className="block text-4xl -mb-4 font-semibold">what</h3>
          <h2 className="text-6xl font-bold mb-5">
            would you like to eat today?
          </h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            consectetur voluptates facere atque nesciunt tenetur sequi quo!
            Nobis obcaecati fugit, libero eos blanditiis, ipsa sequi quidem,
            explicabo sed ab sint.
          </p>
          <button className="button dark">Free Delivery</button>
          <button className="button light">Dine in</button>
        </div>
        <div className="grid place-items-center row-start-1 lg:row-auto w-full">
          <div
            className={`img-hero lg:w-[30vw] w-[60vw] bg-black overflow-hidden`}
          >
            <img
              className="object-contain"
              src={heroImg}
              alt="bunch of delicious food"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderHero;
