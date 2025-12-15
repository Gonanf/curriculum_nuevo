import { easeOut, motion } from "motion/react";
import ParallaxSection from "./parallax";
import Terminal from "./terminal";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: "Completado" | "En Progreso" | "Planeado";
  repo?: string;
  year: number;
}



const projects: Project[] = [
  {
    title: "Curriculum (V3)",
    description: "La tercera iteracion de mi portafolio",
    technologies: ["React", "TypeScript", "TailwindCSS", "Motion", "Vite"],
    status: "Completado",
    repo: "https://github.com/Gonanf/curriculum_nuevo",
    year: 2025
  },

  {
    title: "Juego Jalea",
    description: "Plataforma de videojuegos y competencias indie para una asignacion",
    technologies: ["Vue", "TypeScript", "TailwindCSS", "Nuxt", "Vite"],
    status: "Completado",
    repo: "https://github.com/Gonanf/juego_jalea",
    year: 2025
  },

  {
    title: "Gabinator Desktop",
    description: "Proyecto de Screensharing entre Windows/Linux y Android, esta herramienta es el servidor que pasara los frames ya sea por USB o TCP",
    technologies: ["Rust", "C++"],
    status: "Completado",
    repo: "https://github.com/Gonanf/gabinator_desktop_remaster",
    year: 2024
  },


  {
    title: "Gabinator Android",
    description: "Proyecto de Screensharing entre Windows/Linux y Android, esta herramienta es el cliente que recibira los frames del servidor a travez de USB o TCP",
    technologies: ["Kotlin"],
    status: "Completado",
    repo: "https://github.com/Gonanf/gabinator_android_remaster",
    year: 2024
  },


  {
    title: "Lykoi",
    description: "Lenguaje de programacion (Sucesor de A2C (2023), otro lenguaje de programacion que cree en C#) de alto nivel",
    technologies: ["Rust"],
    status: "En Progreso",
    repo: "https://github.com/Gonanf/lykoi",
    year: 2024
  },

  {
    title: "PNShell",
    description: "Servidor malicioso para windows con diversas herramientas para loggear y obtener control de el cliente BackShell",
    technologies: ["C++"],
    status: "Completado",
    repo: "https://github.com/Gonanf/PNShell",
    year: 2024
  },

  {
    title: "BackShell",
    description: "Cliente malicioso para windows con diversas herramientas para loggear y dar control del dispositivo infectado a PNShell",
    technologies: ["C++"],
    status: "Completado",
    repo: "https://github.com/Gonanf/BackShell",
    year: 2024
  },

  {
    title: "Raycasting Render SFML2",
    description: "Port a SFML2 del raycaster de lodev.org",
    technologies: ["C++", "C", "SFML2"],
    status: "Completado",
    repo: "https://github.com/Gonanf/Raycasting-Render-SFML2",
    year: 2023
  },
  {
    title: "Van Turco",
    description: "Microkernel que integra muchos de mis proyectos anteriores y siguientes",
    technologies: ["C++", "C", "Assembly"],
    status: "En Progreso",

    year: 2024
  },

];

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    "Completado": "text-green-400",
    "En Progreso": "text-yellow-400",
    "Planeado": "text-cyan-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring"
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 45px 10px rgba(51,209,122,0.6)"
      }}
      className="group relative"
    >
      <div className="bg-black/95 backdrop-blur-3xl border-2 border-green-500/40 rounded-3xl p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
          <span className={`text-xs font-mono px-2 py-1 rounded ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          {project.repo && (
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-center py-2 px-4 bg-green-500/20 border border-green-500/40 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm font-mono"
            >
              Ver Proyecto
            </motion.a>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

function Proyectos() {
  const completedProjects = projects.filter(p => p.status === "Completado");
  const inProgressProjects = projects.filter(p => p.status === "En Progreso");
  const plannedProjects = projects.filter(p => p.status === "Planeado");

  return (
    <ParallaxSection className="bg-slate-900/50 bg-[url('/kira.png')] bg-cover bg-center">
      <div className="min-h-screen py-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <p className="text-4xl p-6 font-extrabold">Proyectos</p>
          <div className="w-32 h-1 bg-gradient-to-r from-secundary to-white mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Terminal className="text-left" textSpeed={25}>
            <p>
              <span className="text-green-400">$</span> <span className="text-cyan-400">find ./projects -name "*.js" -o -name "*.py" -o -name "*.cpp" | wc -l</span>
              <br />
              <span className="text-fuchsia-800">Total de proyectos: {projects.length}</span>
              <br />
              <br />
              <span className="text-amber-300">Categorías:</span>
              <br />
              <span className="text-green-600">  - Completados: {completedProjects.length}</span>
              <br />
              <span className="text-yellow-400">  - En Progreso: {inProgressProjects.length}</span>
              <br />
              <span className="text-cyan-400">  - Planificados: {plannedProjects.length}</span>
            </p>
          </Terminal>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {completedProjects.length > 0 && (
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-green-400 mb-8 flex items-center"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Proyectos Completados
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          )}

          {inProgressProjects.length > 0 && (
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-yellow-400 mb-8 flex items-center"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                En Progreso
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {inProgressProjects.map((project, index) => (
                  <ProjectCard key={index + completedProjects.length} project={project} />
                ))}
              </div>
            </div>
          )}

          {plannedProjects.length > 0 && (
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-cyan-400 mb-8 flex items-center"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Planificados
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plannedProjects.map((project, index) => (
                  <ProjectCard key={index + inProgressProjects.length + completedProjects.length} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ParallaxSection>
  )
}

export default Proyectos
