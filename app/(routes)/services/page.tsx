import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";
const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      
      <div className="grid items-center justify-center h-screen  max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis{" "}
            <span className="font-bold text-secondary">
              Servicios
            </span>
          </h1>
          <p className="mb-3 text-xl text-gray-300"> Ofrezco como servicios de desarrollo web, brindar soluciones tecnológicas  a problemas principalmente del sector industrial, así como soporte en errores de software especializado. </p>
          <a href="https://www.linkedin.com/in/jesus-fabiel-partida-camacho-406218299/"
            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
            Contacta conmigo
        </a>
        </div>

        {/*SLIDER*/ }
        <div>
          <SliderServices/>
        </div>

      </div>

    </>
  );
}


export default ServicesPage;