import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import { 
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import photo from "./../assets/threejs.png";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
            // src ="./public/threejs.png"
            src = {photo}
            alt="logo"
            className='w-8 h-8 object-contain'
            />

          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation }>
              <h1 className = "head-text">
                SAECOMP <br className="xl:block hidden"/> KRL
              </h1>
            </motion.div>

            <motion.div 
            {...headContentAnimation}
            className='flex flex-col gap-5'
            >
              <p>
                Crie a sua camiseta
              </p>
            
              <CustomButton
              type="filled"
              title="Customize it"
              handleClick={() =>state.intro = false}
              customStyles="w-fitpx-4 py-2.5 font-bold text -sm"
              />
            
            </motion.div>


          </motion.div> 


            
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home