import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/containter";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />

            <ContainerPage>
                 <Avatar/>
               <h1 className="text-2xl loading-tight 
               text-center md:text-left md:text-5xl md:mt-10 ">Toda mi{' '}
              <span className="font-bold text-secondary">Trayectoria profesional</span>
               </h1>
               <CounterServices/>
               <TimeLine/>
            </ContainerPage>
        </>
    );
}


export default PageAboutMe;