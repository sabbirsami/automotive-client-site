import { useState } from "react";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { BsUpload } from "react-icons/bs";

const AddCar = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const photoUrl = e.target.photoUrl.value;
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const car = {
            photoUrl,
            name,
            brand,
            type,
            price,
            description,
            rating,
        };
        console.log(car);

        fetch("http://localhost:5000/cars", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(car),
        })
            .then((res) => res.json())
            .catch((result) => console.log(result));
    };
    return (
        <div className="container-lg">
            <div className=" pb-32 pt-10">
                <h2 className="text-2xl font-semibold py-6">Add Car</h2>
                <form className="" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="">
                            <div className="bg-[#282435] p-2 rounded-lg items-center h-96  w-full">
                                {file ? (
                                    <img
                                        className="object-cover border-0  rounded-lg w-full h-full mx-auto my-auto mb-0"
                                        src={file}
                                        alt=""
                                    />
                                ) : (
                                    <div className="h-full flex justify-center items-center">
                                        <BsUpload className="text-6xl" />
                                    </div>
                                )}
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="files"
                                    className="block cursor-pointer bg-[#302D3D] w-full rounded-lg py-3 text-center font-semibold"
                                >
                                    Upload Photo{" "}
                                    <HiOutlineArrowUpTray className="inline text-lg ms-2 font-semibold" />
                                </label>
                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    id="files"
                                    className="bg-[#302D3D] hidden w-full rounded-lg py-3 text-center font-semibold"
                                />
                            </div>

                            <label
                                htmlFor="photoUrl"
                                className="block md:w-96 w-full pb-2 pt-8 font-semibold"
                            >
                                Photo URL{" "}
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                name="photoUrl"
                                required
                                className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                placeholder="Enter photo URL"
                            />
                        </div>
                        <div className=" col-span-2">
                            <div className="bg-[#282435] rounded-lg md:px-10 p-6">
                                <label
                                    htmlFor="name"
                                    className="block md:w-96 w-full pb-2 font-semibold"
                                >
                                    Car Name{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Enter Car name"
                                />
                                <label
                                    htmlFor="brand"
                                    className="block w-full pb-2  pt-8 font-semibold"
                                >
                                    Brand name{" "}
                                    <span className="text-red-600">*</span>
                                </label>

                                <select
                                    name="brand"
                                    className="r rounded-md text-white/40 w-full py-3 px-4 bg-[#302D3D]"
                                    id="pet-select"
                                >
                                    <option className="rounded-md" value="">
                                        Select car brand
                                    </option>
                                    <option
                                        className="rounded-md"
                                        value="toyota"
                                    >
                                        Toyota
                                    </option>
                                    <option className="rounded-md" value="ford">
                                        Ford
                                    </option>
                                    <option className="rounded-md" value="bmw">
                                        BMW
                                    </option>
                                    <option
                                        className="rounded-md"
                                        value="mercedes"
                                    >
                                        Mercedes-Benz
                                    </option>
                                    <option value="tesla">Tesla</option>
                                    <option value="honda">Honda</option>
                                </select>
                                <div className="grid grid-cols-2 gap-5 ">
                                    <div>
                                        <label
                                            htmlFor="type"
                                            className="block w-full pb-2  pt-8 font-semibold"
                                        >
                                            Type{" "}
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            name="type"
                                            className="r rounded-md  text-white/40 w-full py-3 px-4 bg-[#302D3D]"
                                            id="pet-select"
                                        >
                                            <option
                                                className="rounded-md"
                                                value="hatchback"
                                            >
                                                Hatchback
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="sedan"
                                            >
                                                Sedan
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="mpv "
                                            >
                                                MPV
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="suv"
                                            >
                                                SUV
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="coupe "
                                            >
                                                Coupe{" "}
                                            </option>
                                            <option
                                                className="rounded-md"
                                                value="convertible"
                                            >
                                                Convertible
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="price"
                                            className="block w-full pb-2  pt-8 font-semibold"
                                        >
                                            Price{" "}
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="price"
                                            name="price"
                                            required
                                            className="r rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                            placeholder="Enter car price"
                                        />
                                    </div>
                                </div>
                                <label
                                    htmlFor="rating"
                                    className="block w-full pb-2  pt-8 font-semibold"
                                >
                                    Rating{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    required
                                    className="r rounded-md w-full py-3 px-4 bg-[#302D3D]"
                                    placeholder="Enter car rating"
                                />
                                <label
                                    htmlFor="name"
                                    className="block md:w-96 w-full pb-2 pt-8 font-semibold"
                                >
                                    Car details{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    cols="30"
                                    rows="8"
                                    required
                                    className=" rounded-md w-full py-3  px-4 bg-[#302D3D]"
                                    placeholder="Car details....."
                                />
                                <button
                                    type="submit"
                                    className="w-full mt-8 py-3 bg-[#FD5631] text-white rounded-md"
                                >
                                    Add Car
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
