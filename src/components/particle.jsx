import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
<Particles
className="w-full h-full absolute translate-z-0 "
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        // Background configuration
        background: {
            // color: {
            //     value: "#0d47a1", // Background color
            // },
        },
        fpsLimit: 120, // Limit the frames per second

        // Interactivity configuration
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },

        // Particle configuration
        particles: {
            color: {
                value: "#3591f2", // Particle color
            },
            links: {
                color: "#3591f2",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1, // Particle speed
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 700,
                },
                value: 80, // Number of particles
            },
            opacity: {
                value: 0.5, // Particle opacity
            },
            shape: {
                type: "circle", // Particle shape
            },
            size: {
                value: { min: 1, max: 5 }, // Particle size
            },
        },
        detectRetina: true,
    }}
/>



  );
};
export default Particle;