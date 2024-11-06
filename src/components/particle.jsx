import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // Using the slim version for optimized bundle size

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        background: {
          // Uncomment to add a background color if desired
          // color: { value: "#000" },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: ["repulse", "attract"], // Adding attract on hover for a mix of effects
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 150, duration: 0.4 },
            attract: { distance: 100, duration: 0.3 }, // Attraction effect configuration
          },
        },
        particles: {
          color: {
            value: ["#3591f2", "#ff66b2", "#66ff66"], // Gradient palette for particles
          },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.5, // Slightly faster for a more lively feel
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60, // Lower count for mobile optimization
          },
          opacity: {
            value: { min: 0.2, max: 0.7 }, // Varying opacity for depth effect
          },
          shape: {
            type: ["circle", "square"], // Variety of shapes for visual interest
          },
          size: {
            value: { min: 1, max: 6 }, // Varying sizes for particle depth
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
