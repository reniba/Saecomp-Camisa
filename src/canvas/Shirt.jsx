import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';
import shirt2 from "./../assets/Chocolate_Splash_Free_006.glb";
import { Suspense } from 'react';

const Shirt = () => {
     const snap = useSnapshot(state);
    //  const { nodes, materials } = useGLTF("./../assets/shirt_baked.glb");
     const { nodes, materials } = useGLTF({shirt2});

     
     const logoTexture = useTexture(snap.logoDecal);
     const fullTexture = useTexture(snap.fullDecal);

     return (
     <group
     class="absolute inset-x-0 bottom-0 h-16"
     >
         <mesh
             castShadow
             geometry={nodes.T_Shirt_male.geometry}
             material={materials.lambert1}
             material-roughness={1}
             dispose={null}
        >
        </mesh>
    </group>    
  )
}

export default Shirt