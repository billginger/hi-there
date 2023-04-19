import { Navbar, Intro, Skills, Hobbies, Web3, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Intro />
      <Skills />
      <Hobbies />
      <Web3 />
      <Footer />
    </div>
  );
};

export default App;
