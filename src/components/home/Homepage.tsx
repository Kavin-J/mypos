import React from 'react'

type Props = {}
type MenuItem = {
    name: string;
    price: number;
    size: string[];
};
const menucoffeeENG: MenuItem[] = [
    { name: "Espresso", price: 60, size: ["S", "M", "L"] },
    { name: "Americano", price: 70, size: ["S", "M", "L"] },
    { name: "Latte", price: 80, size: ["S", "M", "L"] },
    { name: "Cappuccino", price: 85, size: ["S", "M", "L"] },
    { name: "Mocha", price: 90, size: ["S", "M", "L"] },
    { name: "Macchiato", price: 85, size: ["S", "M", "L"] },
    { name: "Caramel Macchiato", price: 95, size: ["S", "M", "L"] },
    { name: "Cortado", price: 75, size: ["S", "M", "L"] },
    { name: "Affogato", price: 100, size: ["S", "M", "L"] },
    { name: "Iced Americano", price: 75, size: ["S", "M", "L"] },
    { name: "Iced Latte", price: 80, size: ["S", "M", "L"] },
    { name: "Iced Mocha", price: 85, size: ["S", "M", "L"] },
];
const menucoffee = [
    { name: "เอสเปรสโซ", price: 60, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "อเมริกาโน", price: 70, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "ลาเต้", price: 80, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "คาปูชิโน่", price: 85, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "มอคค่า", price: 90, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "แมคคิอาโต้", price: 85, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "คาราเมลแมคคิอาโต้", price: 95, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "คอร์ตาโด", price: 75, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "แอฟโฟกาโต", price: 100, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "ไอซ์อเมริกาโน", price: 75, size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1514189347135-3e90a3b561f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function getRandomMenu(menuArray: any[], num: number) {
    const shuffled = [...menuArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function Homepage({ }: Props) {
    const randomMenu = getRandomMenu(menucoffee, 8);

    return (
        <div className="mx-auto w-full h-full  bg-gray-50 overflow-hidden">

            <div aria-description='contain' className="flex lg:flex-row flex-col-reverse shadow-lg h-full overflow-scroll lg:overflow-hidden">
                {/* left section */}
                <div aria-description='leftside' className="w-full lg:w-3/5 min-h-screen shadow-lg ">


                    {/* header */}
                    <div className=" justify-between items-center p-2  rounded-sm shadow-sm ">

                        <div className="flex flex-row justify-between items-center p-5 bg-white rounded-md shadow-md ">
                            <div className="text-gray-800">
                                <div className="font-bold text-xl">JEST's CAFE </div>
                                <span className="text-xs">วันอาทิตย์,20 ตุลาคม</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm text-center mr-4">
                                    <p className="text-xs">Have A Good Day </p>
                                    <p className="font-semibold">โปรโมรชั่นวันนี้</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end header */}


                    {/* categories */}
                    <div className="mt-5 flex flex-row px-5">
                        <button  className="p-5 bg-blue-500 rounded-2xl text-white text-sm mr-4">
                            All items
                        </button>
                        <button  className="p-5 rounded-2xl text-sm font-semibold mr-4">
                            Food
                        </button>
                        <span className="p-5 rounded-2xl text-sm font-semibold mr-4">
                            Cold Drinks
                        </span>
                        <button  className="p-5 rounded-2xl text-sm font-semibold mr-4">
                            Hot Drinks
                        </button>
                    </div>
                    {/* end categories */}


                    {/* products */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-5 mt-5 overflow-y-scroll h-3/4">
                        {menucoffee.map((item, index) => (
                            item.size.map((size, sizeIndex) => (
                                <div
                                    key={`${index}-${sizeIndex}`} // ใช้ key ที่ไม่ซ้ำกันสำหรับแต่ละ size ของแต่ละ item
                                    className="px-3 py-3 flex flex-col border border-blue-500 bg-blue-50 rounded-md h-32 justify-between"
                                >
                                    <div>
                                        <div className="font-bold text-gray-800">{item.name}</div>
                                        <span className="font-light text-sm text-gray-400">
                                            Size: {size}
                                        </span>
                                    </div>

                                    <div className="flex flex-row justify-between items-center">
                                        <span className="self-end font-bold text-lg text-yellow-500">
                                            ฿{item.price}
                                        </span>
                                        <img
                                            src={item.image}
                                            width={50}
                                            height={50}
                                            className="h-14 w-14 object-cover rounded-md"
                                            alt="coffee"
                                        />
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                    {/* end products */}
                </div>
                {/* end left section */}


                {/* right section */}
                <div aria-description='leftside' className="w-full lg:w-2/5">
                    {/* header */}
                    <div className="flex flex-row items-center justify-between px-5 mt-5">
                        <div className="font-bold text-xl">Current Order</div>
                        <div className="font-semibold">
                            <span className="px-4 py-2 rounded-md bg-red-100 text-red-500">Clear All</span>
                            <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">Setting</span>
                        </div>
                    </div>
                    {/* end header */}
                    {/* order list */}
                    <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
                        {randomMenu.map((item, index) => (
                            <div key={index} className="flex flex-row justify-between items-center mb-4">
                                <div className="flex flex-row items-center w-2/5">
                                    <img src={item.image} className="w-10 h-10 object-cover rounded-md" alt={item.name} />
                                    <span className="ml-4 font-semibold text-sm">{item.name}</span>
                                </div>
                                <div className="w-32 flex justify-between">
                                    <span className="px-3 py-1 rounded-md bg-gray-300">-</span>
                                    <span className="font-semibold mx-4">1</span>
                                    <span className="px-3 py-1 rounded-md bg-gray-300">+</span>
                                </div>
                                <div className="font-semibold text-lg w-16 text-center">
                                    ฿{item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* end order list */}

                    {/* totalItems */}
                    <div className="px-5 mt-5">
                        <div className="py-4 rounded-md shadow-lg">
                            <div className="px-4 flex justify-between">
                                <span className="font-semibold text-sm">Subtotal</span>
                                <span className="font-bold">฿{randomMenu.reduce((total, item) => total + item.price, 0)}</span>
                            </div>
                            <div className="px-4 flex justify-between">
                                <span className="font-semibold text-sm">Discount</span>
                                <span className="font-bold">- ฿5.00</span>
                            </div>
                            <div className="px-4 flex justify-between">
                                <span className="font-semibold text-sm">Sales Tax</span>
                                <span className="font-bold">฿2.25</span>
                            </div>
                            <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
                                <span className="font-semibold text-2xl">Total</span>
                                <span className="font-bold text-2xl">
                                    ฿{randomMenu.reduce((total, item) => total + item.price, 0) - 5 + 2.25}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* end order list */}

                    {/* cash */}
                    <div className="px-5 mt-5">
                        <div className="rounded-md shadow-lg px-4 py-4">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="uppercase text-xs font-semibold">cashless credit</span>
                                    <span className="text-xl font-bold text-yellow-500">$32.50</span>
                                    <span className=" text-xs text-gray-400 ">Available</span>
                                </div>
                                <div className="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold"> Cancel</div>
                            </div>
                        </div>
                    </div>
                    {/* end cash */}
                    {/* button pay*/}
                    <div className="px-5 mt-5">
                        <div className="px-4 py-4 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold">
                            Pay With Cashless Credit
                        </div>
                    </div>
                    {/* end button pay */}
                </div>
                {/* end right section */}
            </div>


        </div>
    )
}

export default Homepage