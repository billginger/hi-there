import avatar from "../assets/avatar.jpg";

const Intro = () => {
  return (
    <div id="Intro">
      <div className="container mx-auto p-2 flex items-center">
        <div>
          <img src={avatar} alt="avatar" className="w-72 m-12 rounded-full" />
        </div>
        <div className="flex-1 p-6">
          <h2 className="inline text-3xl font-semibold text-gray-800 border-b-2 border-blue-300">Intro</h2>
          <div className="mt-8 mb-8">
            <p>18 years of experience in web development and 6 years of experience in full-stack architecture and
              leading teams.</p>
            <p>Have worked for large state-owned enterprises, entrepreneurial foreign companies, and
              multinational Internet teams.</p>
            <p>In order to balance work, life and literary creation, started to try to work remotely from home
              in August 2020.</p>
            <p>Responsible, attention to detail, and love of learning new technologies are the key factors that
              benefit me in my work and keep me improving.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Intro };
