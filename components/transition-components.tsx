"use client"
import {motion} from 'framer-motion';
import { fadeInn } from '@/utils/motion-transitions';


export type MotionTransition = {
    children: React.ReactNode;
     className?:string;
     position: 'right'| 'bottom'
}

interface MotionTransitionProps {
    children:React.ReactNode
    position:'right' | 'bottom'
    className?: string
}

export const MotionTransition =(props:MotionTransitionProps) => {
    const {children , position, className} = props
    return(
        <motion.div
         variants={fadeInn(position)}
         initial="hidden"
         animate="visible"
         exit="hidden"
         className={className}
        >
            {children}
        </motion.div>

    );
       
    
}
export default MotionTransition;
