import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Front-end',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Styled-components', level: 75 }
      ]
    },
    {
      title: 'Back-end',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'APIs REST', level: 75 },
        { name: 'Python', level: 60 },
        { name: 'Express.js', level: 65 }
      ]
    },
    {
      title: 'Ferramentas',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Vite', level: 75 }
      ]
    },
    {
      title: 'Outros',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Responsive Design', level: 90 },
        { name: 'Clean Code', level: 80 },
        { name: 'Metodologias Ágeis', level: 70 },
        { name: 'UI/UX Design', level: 65 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="habilidades" className="py-20 lg:py-32 bg-primary-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-light mb-4">
              Minhas <span className="text-primary-light">Habilidades</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-primary-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino e utilizo em meus projetos
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-gradient-to-br from-primary-light/10 to-primary-accent/10 rounded-2xl p-6 border border-primary-light/20 hover:border-primary-light/40 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-light">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary-accent text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Showcase */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-secondary-light mb-8">Stack Principal</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Tailwind', icon: '🎨' },
                { name: 'Git', icon: '📝' },
                { name: 'Figma', icon: '🎯' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-primary-light/10 border border-primary-light/20 hover:border-primary-light/40 transition-all duration-300"
                >
                  <span className="text-3xl mb-2">{tech.icon}</span>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;