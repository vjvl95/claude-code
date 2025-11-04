import './AnimationControls.css';

/**
 * AnimationControls Component
 * Provides UI controls for animation playback and type selection
 */
const AnimationControls = ({
  isPlaying,
  animationType,
  onToggle,
  onChangeType
}) => {
  const animations = [
    { type: 'dance', label: '🕺 Dance' },
    { type: 'bounce', label: '⬆️ Bounce' },
    { type: 'spin', label: '🔄 Spin' },
    { type: 'wiggle', label: '🔃 Wiggle' },
    { type: 'pulse', label: '💓 Pulse' },
    { type: 'float', label: '☁️ Float' }
  ];

  return (
    <div className="controls-container">
      <button
        className="control-button play-pause"
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
      >
        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
      </button>

      <div className="animation-types">
        {animations.map(({ type, label }) => (
          <button
            key={type}
            className={`type-button ${animationType === type ? 'active' : ''}`}
            onClick={() => onChangeType(type)}
            aria-label={`Switch to ${label} animation`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimationControls;
