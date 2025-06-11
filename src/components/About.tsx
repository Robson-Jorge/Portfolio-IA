import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, GraduationCap as Graduation, User } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-gradient-to-b from-primary-dark to-primary-dark/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-light mb-4">
              Sobre <span className="text-primary-light">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-primary-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto lg:mx-0"
            >
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-light/20 to-primary-accent/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-primary-accent/10 animate-pulse-slow"></div>
                <User className="w-32 h-32 text-primary-light/50" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-light rounded-full flex items-center justify-center shadow-lg"
              >
                <Code className="w-8 h-8 text-secondary-light" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <Graduation className="w-8 h-8 text-secondary-light" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary-light mb-4">
                  Desenvolvedor em <span className="text-primary-accent">Formação</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Sou estudante de <strong className="text-primary-light">Análise e Desenvolvimento de Sistemas</strong>, 
                  apaixonado por criar soluções digitais inovadoras e experiências de usuário excepcionais.
                </p>
              </div>

              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Com foco em desenvolvimento front-end, estou sempre em busca de aprender novas tecnologias 
                  e aprimorar minhas habilidades em <strong className="text-primary-accent">React</strong>, 
                  <strong className="text-primary-accent"> TypeScript</strong> e outras ferramentas modernas.
                </p>
              </div>

              {/* Tech Stack Highlights */}
              <div className="bg-primary-light/10 rounded-xl p-6 border border-primary-light/20">
                <h4 className="text-xl font-semibold text-secondary-light mb-4">Principais Conhecimentos:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'HTML & CSS',
                    'JavaScript',
                    'React',
                    'TypeScript',
                    'Node.js',
                    'Styled-components',
                    'Tailwind CSS',
                    'Figma',
                    'APIs REST',
                    'Python (Básico)'
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-accent rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-4"
              >
                <button
                  onClick={() => {
                    const element = document.querySelector('#contato');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-light to-primary-accent text-secondary-light font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <span>Vamos Conversar</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;