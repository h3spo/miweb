"use client"
import { Link } from 'lucide-react';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
           <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">

{/* Sección de Texto (alineado a la izquierda) */}
<div className="flex flex-col justify-center max-w-2xl">
    <h1 className="mb-5 text-2xl md:text-left md:text-4xl md:mb-10">
        Si puedes pensarlo, <br />
        <TypeAnimation
            sequence={[
                "Puedes programarlo", 1000,
                "Puedes crearlo", 1000,
                "Puedes implementarlo", 1000,
                "Puedes desarrollarlo", 100
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold text-secondary"
        />
    </h1>

    {/* Párrafo más ancho y alineado a la izquierda */}
    <p className="mb-2 text-xl md:text-left md:w-[90%] md:mb-2">
    Apasionado por la tecnología y la innovación, con un enfoque en la optimización de procesos y la mejora
     continua en entornos tecnológicos. Poseo experiencia en la gestión de infraestructura IT, 
     implementación de soluciones digitales y desarrollo de software.
    </p>

    {/* Botones alineados a la izquierda */}
    <div className="flex items-center gap-3 md:justify-start md:gap-10">
        <a href="/about-me" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
            Mi experiencia
        </a>
        <a href="https://www.linkedin.com/in/jesus-fabiel-partida-camacho-406218299/"
            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
            Contacta conmigo
        </a>
    </div>
</div>

{/* Sección de Imagen */}
<div className="z-10 grid grid-cols-1 gap-4 md:grid-cols-1 justify-items-center">
    <Image src="/Mundo.png" priority width="550" height="350" alt="Mundo Digital" />
</div>

</div>

        </div >

    );
}
export default Introduction;