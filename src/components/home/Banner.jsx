import bannerCar from "../../assets/hero-car.png";
const Banner = () => {
    return (
        <div className=" bg-hero bg-cover bg-no-repeat">
            <div className="container-lg bg-hero-pattern pt-48 pb-28">
                <div className="grid grid-cols-5 gap-14 items-center">
                    <div className="pb-8 col-span-2">
                        <h1 className="text-7xl font-bold">
                            Easy way to find the right car
                        </h1>
                        <p className=" py-10 text-xl opacity-70">
                            Finder is a leading digital marketplace for the
                            automotive industry that connects car shoppers with
                            sellers. Also finder provides best car service ever.
                        </p>
                    </div>
                    <div className="col-span-3">
                        <img src={bannerCar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
