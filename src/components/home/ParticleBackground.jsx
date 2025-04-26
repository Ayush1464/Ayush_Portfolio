import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#131217", // your dark background
          },
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: { min: 2, max: 6 },
          },
          move: {
            direction: "bottom",
            speed: 2,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
