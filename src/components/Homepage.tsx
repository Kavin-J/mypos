import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { allMenu } from '../utils';
import { MenuItem } from '../utils/types';
import useTime from '../utils/time';
import MenuSwipe from './MenuSwipe';

type Props = {}
const tailwindColors = [
    'bg-blue-300',
    'bg-green-300',
    'bg-red-300',
    'bg-yellow-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-indigo-300',
    'bg-teal-300'
];


function getRandomMenu(menuArray: any[], num: number) {
    const shuffled = [...menuArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function Homepage({ }: Props) {
    const randomMenu = getRandomMenu(allMenu, 15) as MenuItem[];
    // console.log(randomMenu);
    const currentTime = useTime()



    const user = useSelector((state: RootState) => state.auth.user)


    return (
        <div className="mx-auto w-full h-full bg-defalt   pb-3">





            <div aria-description='container' className="flex  shadow-lg h-full overflow-hidden  rounded-lg">

                {/* left section */}
                <div aria-description='leftside' className="w-full flex flex-col space-y-1 lg:w-9/12 max-h-screen p-2 ">
                    {/* 
                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                     */}

                    {/* header */}
                    <div className="justify-between flex items-center p-2 ">


                        <div className="flex  justify-between items-center rounded-md overflow-x-auto">


                            <div className="px-5 py-2 text-nowrap font-bold text-xl text-gray-800 bg-white me-2 rounded-full ">
                                Jest's Cafe
                            </div>


                            <div className="relative max-w-md me-5">
                                <div className="absolute bg-defalt m-2 rounded-full inset-y-0 start-0 flex items-center p-2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32px"
                                        className='text-parimary-400 '
                                        viewBox="0 -960 960 960" width="32px" fill="currentColor"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                                </div>
                                <span className='bg-white border rounded-full max-w-lg border-white text-md font-bold text-gray-800 focus:ring-blue-500 focus:border-blue-500 block w-full ps-16 px-5 py-2 text-nowrap'>
                                    {moment(currentTime).format("dddd, DD MMM YY")}</span>
                            </div>


                            <div className="relative max-w-md ">

                                <div className="absolute bg-defalt m-2 rounded-full inset-y-0 start-0 flex items-center p-2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32px"
                                        className='text-parimary-400 '
                                        viewBox="0 -960 960 960" width="32px" fill="currentColor"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                                </div>
                                <span className='bg-white border rounded-full max-w-lg border-white text-md font-bold text-gray-800 focus:ring-blue-500 focus:border-blue-500 block w-full ps-16 px-5 py-2 text-nowrap'>
                                    {moment(currentTime).format("hh:mm a")}</span>
                            </div>




                        </div>

                        <div className="relative p-5 rounded-full bg-red-400 ">

                            <div className="absolute bg-defalt m-2 p-2 rounded-full inset-y-0 -end-1 flex items-center  pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px"
                                    className='text-red-400'
                                    viewBox="0 -960 960 960" fill="currentColor"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31.5-156.5T197-763l56 56q-44 44-68.5 102T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-67-24.5-125T707-707l56-56q54 54 85.5 126.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-360v-440h80v440h-80Z" />
                                </svg>
                            </div>


                        </div>

                    </div>

                    {/* end header */}
                    {/* 
                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                     */}
                    <MenuSwipe tailwindColors={tailwindColors} />

                    {/* 
                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                     */}


                </div>
                {/* end left section */}


                {/* right section */}
                <div aria-description='rightside' className="hidden lg:w-3/12 lg:flex flex-col h-screen p-5">
                    {/* header */}
                    <div className="flex flex-row items-center justify-between px-5 mt-5">
                        <div><div className="font-bold text-xl">Current Order</div>
                            <div className="font-bold text-xl">Order #33325</div></div>
                        <div className="font-semibold">
                            <span className="px-6 py-2 bg-teal-100  text-teal-500 rounded-full ">Clear All</span>
                        </div>
                    </div>
                    {/* end header */}


                    {/* order list */}
                    <div className="px-5 py-4 mt-5 overflow-y-auto h-64 bg-white rounded-sm flex-1">
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

            {/* DRAWER */}
            <div id="drawer-right-example" className="lg:hidden fixed top-0 right-0 z-30 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 " tabIndex={-1} aria-labelledby="drawer-right-label">
                <div className=' w-full h-full'></div>
            </div>
            {/* END DRAWER */}

        </div >
    )
}

export default Homepage

