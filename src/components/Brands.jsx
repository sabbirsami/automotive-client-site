import brand1 from "../assets/brands/pngeg.png";
import brand2 from "../assets/brands/pngeg1.png";
import brand3 from "../assets/brands/pngegg.png";
import brand4 from "../assets/brands/pngegg3.png";
import brand5 from "../assets/brands/pngegg1.png";
import brand6 from "../assets/brands/pngegg2.png";

const Brands = () => {
    return (
        <div className="container-lg">
            <div className="flex items-center justify-center gap-16">
                <div className="">
                    <img
                        className="h-48 aspect-[3/2]  object-contain"
                        src={brand1}
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="h-20 aspect-[3/2]  object-contain"
                        src={brand2}
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="h-48 aspect-[3/2]  object-contain"
                        src={brand3}
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="h-16 aspect-[3/2]  object-contain"
                        src={brand5}
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="h-48 aspect-[3/2]  object-contain"
                        src={brand4}
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className="h-16 aspect-[3/2]  object-contain"
                        src={brand6}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Brands;
