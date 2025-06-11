import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-primary-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-light to-primary-accent rounded-xl flex items-center justify-center">
                <span className="text-secondary-light font-bold text-xl">JS</span>
              </div>
              <span className="text-2xl font-bold text-secondary-light">João Silva</span>
            </div>
            <p className="text-gray-300 max-w-md mx-auto">
              Desenvolvedor Front-End em formação, criando experiências digitais incríveis
            </p>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 p-6 bg-gradient-to-r from-primary-light/10 to-primary-accent/10 rounded-xl border border-primary-light/20 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Code className="w-5 h-5 text-primary-light" />
              <span className="text-primary-light font-semibold">Filosofia de Desenvolvimento</span>
            </div>
            <blockquote className="text-lg text-gray-300 italic">
              "A tecnologia move o mundo, mas são as pessoas que fazem a diferença. 
              Cada linha de código é uma oportunidade de criar algo extraordinário."
            </blockquote>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300">
              {[
                { name: 'Sobre', href: '#sobre' },
                { name: 'Habilidades', href: '#habilidades' },
                { name: 'Projetos', href: '#projetos' },
                { name: 'Contato', href: '#contato' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ scale: 1.05, color: '#1891d4' }}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary-light transition-colors duration-200"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-light/30 to-transparent mb-8"></div>

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400">
              <span>© {currentYear} João Silva. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>e</span>
              <Coffee className="w-4 h-4 text-amber-600" />
              <span>usando React + TypeScript</span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <div className="text-xs text-gray-500">Powered by:</div>
              {[
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'Vite'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs bg-primary-light/10 text-primary-light rounded-full border border-primary-light/20"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 p-3 bg-gradient-to-r from-primary-light to-primary-accent rounded-full text-secondary-light shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⬆️
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;