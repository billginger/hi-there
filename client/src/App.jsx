import { Navbar, Intro, Skills, Hobbies } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Intro />
      <Skills />
      <Hobbies />
    </div>
  );
};

export default App;
