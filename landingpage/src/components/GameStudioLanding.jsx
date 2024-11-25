import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GameStudioLanding = () => {
  const [activeGame, setActiveGame] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const games = [
    {
      title: 'Cyber Horizon',
      description: 'Immersive sci-fi adventure pushing visual boundaries',
      color: 'bg-blue-500',
      features: ['Open World', 'Cyberpunk Setting', 'Advanced AI'],
      image: '/path-to-cyber-horizon.jpg'
    },
    {
      title: 'Mythic Conquest',
      description: 'Epic fantasy RPG with revolutionary gameplay mechanics',
      color: 'bg-purple-500',
      features: ['Massive Multiplayer', 'Dynamic World Events', 'Unique Class System'],
      image: '/path-to-mythic-conquest.jpg'
    }
  ];

  useEffect(() => {
    if (activeGame) {
      setShowModal(true);
    }
  }, [activeGame]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="flex justify-between items-center p-6 sticky top-0 bg-black bg-opacity-70 z-10"
      >
        <div className="text-3xl font-bold flex items-center">
          <motion.span
            className="mr-2 text-red-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            ◈
          </motion.span>
          RAGNAROK INTERACTIVE
        </div>
        <nav>
          {['Games', 'About', 'Team', 'Contact'].map(item => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="ml-4 hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 mt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text"
        >
          Create. Innovate. Dominate.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto mb-16"
        >
          Pushing the boundaries of interactive entertainment with groundbreaking game experiences.
        </motion.p>

        {/* Game Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setActiveGame(game)}
              className="relative p-6 rounded-lg border cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-gray-500"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className={`relative bg-cover bg-center rounded-lg ${game.color}`}
                style={{ backgroundImage: `url(${game.image})`, height: '300px' }}
                whileHover={{ rotateY: 10 }}
              />
              <h2 className="text-2xl font-bold mt-4">{game.title}</h2>
              <p>{game.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-center"
            >
              <img src={activeGame.image} alt={activeGame.title} className="mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-4">{activeGame.title}</h2>
              <p className="mb-4">{activeGame.description}</p>
              <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 text-left">
                {activeGame.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-16 p-6 text-center border-t border-gray-700">
        <p>&copy; 2024 Ragnarok Interactive Studios. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GameStudioLanding