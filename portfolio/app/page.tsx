//import Image from 'next/image'
import Head from "next/head"
import Image from "next/image";

//image
import profileImage from "../public/p2.png";
import graphicDesign from "../public/design.png";
import code from "../public/code.png";
import image1 from "../public/web1.png";
import image2 from "../public/web2.png";
import image3 from "../public/web3.png";


//icons
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";

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
            <h1 className=" text-sm">Developed by Ishan Senanayaka</h1>
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

        {/* hero */}
        <div className=" text-center p-10">
          <h1 className=" text-5xl font-bold text-yellow-400">Ishan Senanayaka</h1>
          <h3 className=" text-2xl py-4">Mobile Apps and Website Developer</h3>
          <p className=" text-sm py-4 text-gray-400">
          Welcome to my digital realm! I am a passionate mobile app and website developer, 
          dedicated to transforming creative visions into interactive realities. 
          With a knack for innovation and a keen eye for detail, I specialize in crafting seamless
          user experiences that captivate and engage. Whether it's building intuitive mobile apps or 
          designing dynamic websites, I thrive on bringing ideas to life in the digital landscape. 
          Join me on a journey where imagination meets technology, and let's turn your digital dreams 
          into stunning, functional masterpieces.
          </p>
        </div>
        {/* socials */}
        <div className=" text-5xl flex justify-center gap-16 text-gray-600">
          <a href="https://github.com/Mishan20 ">
            <AiOutlineGithub />
          </a>

          <a href="https://www.linkedin.com/in/ishan-senanayaka-936b44267/ ">
            <AiFillLinkedin />
          </a>

          <a href="https://twitter.com/Senanayaka38949 ">
          <AiOutlineTwitter />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100070423373473 ">
          <AiFillFacebook />  
          </a>

        </div>
        {/* profile */}
        <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
          <Image src={profileImage} 
          alt="profile image" 
          layout="fill"
          objectFit="cover" />

          
        </div>
        </section>
        {/* services */}
        <section>
          <div>
            <h2 className=" text-5xl py-10 font-bold opacity-60">Services I Offer</h2>
            <p className=" text-sm py-2 text-gray-400 leading-6">
          Welcome to my digital realm! I am a passionate mobile app and website developer, 
          dedicated to transforming creative visions into interactive realities. 
          With a knack for innovation and a keen eye for detail, I specialize in crafting seamless
          user experiences that captivate and engage. Whether it's building intuitive mobile apps or 
          designing dynamic websites, I thrive on bringing ideas to life in the digital landscape. 
          Join me on a journey where imagination meets technology, and let's turn your digital dreams 
          into stunning, functional masterpieces.
          </p>
          </div>
          {/* services cards */}
          <div>
            {/* card */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={graphicDesign} 
              alt="design image" width={100} height={100} className=" inline" />

              <h2 className=" text-2xl font-bold">Graphic Designing</h2>
              <p className=" text-sm py-2 text-gray-800 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi sint impedit iusto minus quia, eveniet fugit repellat distinctio 
                dolores mollitia, eligendi eaque ipsa aliquid ipsum nulla, quod iure maiores 
                odio!
              </p>
            </div>

            {/* card */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={code} 
              alt="design image" width={100} height={100} className=" inline" />

              <h2 className=" text-2xl font-bold">Graphic Designing</h2>
              <p className=" text-sm py-2 text-gray-800 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi sint impedit iusto minus quia, eveniet fugit repellat distinctio 
                dolores mollitia, eligendi eaque ipsa aliquid ipsum nulla, quod iure maiores 
                odio!
              </p>
            </div>

            {/* card */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={graphicDesign} 
              alt="design image" width={100} height={100} className=" inline" />

              <h2 className=" text-2xl font-bold">Graphic Designing</h2>
              <p className=" text-sm py-2 text-gray-800 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi sint impedit iusto minus quia, eveniet fugit repellat distinctio 
                dolores mollitia, eligendi eaque ipsa aliquid ipsum nulla, quod iure maiores 
                odio!
              </p>
            </div>
          </div>
        </section>

        {/* my work */}
        <section>
          <div>
            <h2 className=" text-5xl py-10 font-bold opacity-60">Portfolio</h2>
            <p className=" text-sm py-2 text-gray-800 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi sint impedit iusto minus quia, eveniet fugit repellat distinctio 
                dolores mollitia, eligendi eaque ipsa aliquid ipsum nulla, quod iure maiores 
                odio!
            </p>
          </div>
          {/* images */}
          <div className=" flex flex-col gap-10 p-10">
            <Image 
            src={image1} 
            alt="image 1" 
            layout=" responsive"
            className="rounded-lg object-cover"/>

            <Image 
            src={image1} 
            alt="image 1" 
            layout=" responsive"
            className="rounded-lg object-cover"/>

            <Image 
            src={image1} 
            alt="image 1" 
            layout=" responsive"
            className="rounded-lg object-cover"/>

            <Image 
            src={image1} 
            alt="image 1" 
            layout=" responsive"
            className="rounded-lg object-cover"/>

            <Image 
            src={image1} 
            alt="image 1" 
            layout=" responsive"
            className="rounded-lg object-cover"/>

            <Image 
            src={image1} 
            alt="image 1" 
            layout=" responsive"
            className="rounded-lg object-cover"/>
          </div>
        </section>

        {/* footer */}
        <footer className=" border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10">
           <div>
            <h3 className=" text-base mb-2"> Contact me for more details</h3>
            <p className=" opacity-40">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi sint impedit iusto minus quia, eveniet fugit repellat distinctio 
              dolores mollitia, eligendi eaque ipsa aliquid ipsum nulla, quod iure maiores 
              odio!
            </p>
           </div>
           <div>
              <div className=" text-5xl flex justify-center gap-16 text-gray-600">
                <a href="https://github.com/Mishan20 ">
                <AiOutlineGithub />
                </a>

                 <a href="https://www.linkedin.com/in/ishan-senanayaka-936b44267/ ">
                <AiFillLinkedin />
                </a>

                <a href="https://twitter.com/Senanayaka38949 ">
                <AiOutlineTwitter />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100070423373473 ">
                <AiFillFacebook />  
                </a>

              </div>
           </div>
        </footer>
      
      </main>
    </div>
  );
}
