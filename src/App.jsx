import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './App.css';

function App() {
  const { isPlaying, animationType, toggleAnimation, changeAnimationType } = useAnimation();

  return (
    <div className="app-container">
      <h1>🐱 Dancing Cat 🐱</h1>
      <p className="subtitle">Watch this adorable cat perform amazing dance moves!</p>

      <DancingCat
        isPlaying={isPlaying}
        animationType={animationType}
      />

      <AnimationControls
        isPlaying={isPlaying}
        animationType={animationType}
        onToggle={toggleAnimation}
        onChangeType={changeAnimationType}
      />
    </div>
  )
}

export default App
