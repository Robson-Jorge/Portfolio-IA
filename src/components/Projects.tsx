import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'Stripe', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard responsivo para análise de dados com gráficos interativos e relatórios em tempo real.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'APIs REST'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Front-end'
    },
    {
      id: 3,
      title: 'App de Tarefas',
      description: 'Aplicativo de gerenciamento de tarefas com drag & drop, categorias e sincronização em nuvem.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Front-end'
    },
    {
      id: 4,
      title: 'API RESTful',
      description: 'API robusta para gerenciamento de usuários com autenticação JWT, validações e documentação completa.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Back-end'
    },
    {
      id: 5,
      title: 'Landing Page Criativa',
      description: 'Landing page moderna com animações avançadas, formulários e integração com CMS.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'CMS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Front-end'
    },
    {
      id: 6,
      title: 'Portfólio Interativo',
      description: 'Portfólio pessoal com design único, animações fluidas e sistema de contato integrado.',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Styled Components', 'EmailJS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Front-end'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-gradient-to-b from-primary-dark/95 to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-light mb-4">
              Meus <span className="text-primary-light">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-primary-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-primary-light/10 to-primary-accent/10 rounded-2xl overflow-hidden border border-primary-light/20 hover:border-primary-light/40 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary-accent text-secondary-light rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-dark/80 rounded-full text-secondary-light hover:bg-primary-light transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-dark/80 rounded-full text-secondary-light hover:bg-primary-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Folder className="w-5 h-5 text-primary-light" />
                    <h3 className="text-xl font-bold text-secondary-light group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary-dark/50 text-primary-light rounded-full border border-primary-light/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary-light transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Código</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={projectVariants}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary-light text-primary-light font-semibold rounded-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver Mais no GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;