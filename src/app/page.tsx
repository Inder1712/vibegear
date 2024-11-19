"use client";
import Image from 'next/image';
import logo from "../../public/vibegear-high-resolution-logo-grayscale-transparent.png"
import cart from "../../public/cart.svg"
import admin from "../../public/—Pngtree—admin line icon_5784769.png"
import airpods from "../../public/AdobeStock_408384620_Preview_Editorial_Use_Only-Photoroom.png"
import { useRouter } from 'next/navigation';  // Import from next/navigation

export default function Home() {
  const router = useRouter();  // Initialize the new router

  // Function to handle the click and navigate to another page
  const handleOrderNowClick = () => {
    router.push('/order');  // Navigate to the 'order' page
  };

  return (
    <div className="w-screen h-screen ">
      <div className="h-[6%] w-[100%] flex justify-center items-center space-x-9">
        <div className="h-fit w-fit mr-[15%] sm:mr-[10%] sm:bg-black md:bg-pink-950">
          <Image src={logo} alt="Vibegear Logo" className="h-14 w-36" />
        </div>
        <div className="h-[100%] w-[40%] flex justify-center items-center">
          <div className="h-[90%] w-[20%] sm:w-[40%] flex justify-center items-center">
            <Image src={admin} alt="admin" className="h-4 w-4"></Image>
          </div>
          <div className="h-[90%] w-[10%] flex justify-center items-center">
            <Image src={cart} alt="cart" className="h-4 w-4"></Image>
          </div>
        </div>
      </div>
      <div className="h-fit w-screen ">
        <Image src={airpods} alt=""></Image>
      </div>
      <div className="h-72 w-screen p-3 ">
        <div className="font-semibold text-2xl">Airpods Pro</div>
        <div className="flex">
          <div className="line-through text-gray-600">Rs 1,500</div>
          <div className="ml-2">Rs 999.00</div>
          <div className="ml-2 text-sm border-gray-200 text-gray-600 h-6 flex justify-center items-center">
            Sold out
          </div>
        </div>
        <br />
        <div className="w-80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae hic deserunt harum saepe pariatur veritatis perspiciatis, fugiat nostrum nemo quo dolorum quae voluptatum magni eveniet recusandae similique, temporibus ut unde fugit!
        </div>
      </div>
      <div className="h-80 w-screen flex justify-center ">
        <button
          className="h-12 w-64 bg-[rgb(133,88,49)] flex justify-center items-center text-xl text-white"
          onClick={handleOrderNowClick} // Handle the click
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
