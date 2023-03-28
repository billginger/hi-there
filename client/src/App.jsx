import { Navbar, Intro, Skills, Hobbies, Web3 } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Intro />
      <Skills />
      <Hobbies />
      <Web3 />
    </div>
  );
};

export default App;
