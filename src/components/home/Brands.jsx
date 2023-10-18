import brand1 from "../../assets/brands/pngeg.png";
import brand2 from "../../assets/brands/pngeg1.png";
import brand3 from "../../assets/brands/pngegg.png";
import brand4 from "../../assets/brands/pngegg3.png";
import brand5 from "../../assets/brands/pngegg1.png";
import brand6 from "../../assets/brands/pngegg2.png";
import { Link } from "react-router-dom";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";

const Brands = () => {
    return (
        <div className="container-lg pb-16">
            <div className="flex items-center justify-center gap-16">
                <div className="">
                    <Link to={"/product/tesla"}>
                        <span className="relative">
                            <img
                                className="h-48 aspect-[3/2] brand object-contain"
                                src={brand1}
                                alt=""
                            />
                            <span className="absolute top-28 right-10 opacity-40">
                                <LiaLongArrowAltUpSolid className="indicate-bottom text-xl" />
                                <span className="text-sm">tesla</span>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="">
                    <Link to={"/product/ford"}>
                        <span className="relative">
                            <img
                                className="h-20 aspect-[3/2] brand  object-contain"
                                src={brand2}
                                alt=""
                            />
                            <span className="absolute -top-6 right-0 opacity-40">
                                <span className="text-sm">ford</span>
                                <LiaLongArrowAltUpSolid className="indicate-top text-xl" />
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="">
                    <Link to={"/product/toyota"}>
                        <span className="relative">
                            <img
                                className="h-48 aspect-[3/2] brand object-contain"
                                src={brand3}
                                alt=""
                            />
                            <span className="absolute top-28 right-10 opacity-40">
                                <LiaLongArrowAltUpSolid className="indicate-bottom text-xl" />
                                <span className="text-sm">toyota</span>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="">
                    <Link to={"/product/mercedes"}>
                        <span className="relative">
                            <img
                                className="h-16 aspect-[3/2] brand  object-contain"
                                src={brand5}
                                alt=""
                            />
                            <span className="absolute -top-12 -right-10 opacity-40">
                                <span className="text-sm">mercedes</span>
                                <LiaLongArrowAltUpSolid className="indicate-top text-xl" />
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="">
                    <Link to={"/product/honda"}>
                        <span className="relative">
                            <img
                                className="h-48 aspect-[3/2] brand object-contain"
                                src={brand4}
                                alt=""
                            />
                            <span className="absolute top-28 right-8 opacity-40">
                                <LiaLongArrowAltUpSolid className="indicate-bottom text-xl" />
                                <span className="text-sm">honda</span>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="">
                    <Link to={"/product/bmw"}>
                        <span className="relative">
                            <img
                                className="h-16 aspect-[3/2] brand  object-contain"
                                src={brand6}
                                alt=""
                            />
                            <span className="absolute -top-12 right-0 opacity-40">
                                <span className="text-sm">bmw</span>
                                <LiaLongArrowAltUpSolid className="indicate-top text-xl" />
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Brands;
