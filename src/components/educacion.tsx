// import { motion } from "motion/react";
import ParallaxSection from "./parallax";
import { GradientElement } from "./gradient";
import Gradient from "./bg_gradient";
import { motion } from "motion/react";

function Educacion() {

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center"} contentClass="relative min-h-screen flex flex-col backdrop-blur-sm">
      <div className="border-4 border-fuchsia-950 min-h-screen mt-4 ml-4 mr-4 pb-4 flex flex-col">
        <p className="text-4xl p-6">educacion</p>

        <div className='flex grow justify-center gap-1.5 border-t-4 border-fuchsia-950' >
          {

          }

        </div>

      </div>
    </ParallaxSection>
  )
}

export default Educacion
