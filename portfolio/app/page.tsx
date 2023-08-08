//import Image from 'next/image'
import Head from "next/head"
import {BsFillMoonStarsFill} from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Website</title>
        <meta name = "description" content="Generated by create next app"/>
        <link rel= "icon" href = "/favicon.ico" />
        <style>
           @import 
           url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,800;1,600&display=swap');
        </style>
      </Head>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className=" text-sm">Developed by IShan Senanayaka</h1>
            <ul className=" flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill
                classname="cursor-pointer text-xl mx-5" />
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1_LClUIsuAmD8WkfURMs-dbmiMqchDMsA/view?usp=sharing"
                download={"resume"}
                className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md"
                >Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      
      </main>
    </div>
  );
}
