import AppThemeContainer from '@/components/AppThemeContainer';
import ThemeToggle from '@/components/ThemeToggle';
import RoadmapFlow from '@/components/RoadmapFlow';

const App = () => {
  return (
    <AppThemeContainer>
      <ThemeToggle />
      <RoadmapFlow />
    </AppThemeContainer>
  );
};

export default App;
