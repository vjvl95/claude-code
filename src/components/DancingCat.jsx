import catImage from '../assets/images/cat.svg';
import './DancingCat.css';

/**
 * DancingCat Component
 * Displays an animated cat image with various animation types
 */
const DancingCat = ({ isPlaying, animationType }) => {
  const animationClass = isPlaying
    ? `${animationType}-animation`
    : 'paused';

  return (
    <div className="cat-container">
      <img
        src={catImage}
        alt="Dancing Cat"
        className={`cat-image ${animationClass}`}
      />
    </div>
  );
};

export default DancingCat;
