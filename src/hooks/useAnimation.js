import { useState } from 'react';

/**
 * Custom hook for managing animation state
 * @returns {Object} Animation state and controls
 */
export const useAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationType, setAnimationType] = useState('dance');

  const toggleAnimation = () => {
    setIsPlaying(prev => !prev);
  };

  const changeAnimationType = (type) => {
    setAnimationType(type);
  };

  return {
    isPlaying,
    animationType,
    toggleAnimation,
    changeAnimationType
  };
};
