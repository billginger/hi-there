import avatar from '../assets/avatar.jpg';

const Intro = () => {
  return (
    <div id="Intro" className="relative pt-[60px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9ffff] to-white dark:from-blue-900 dark:to-[#050a18]">
        <div
          className="absolute w-40 h-40 rounded-full left-1/4 bottom-8 bg-gradient-to-b from-sky-100
            dark:from-sky-900 hidden lg:block"
        />
        <div
          className="absolute w-60 h-60 rounded-full right-1/4 -top-10 bg-gradient-to-t from-sky-100
            dark:from-sky-900"
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full right-[5%] -bottom-[240px] bg-gradient-to-b
            from-sky-100 via-transparent dark:from-sky-900 dark:via-transparent"
        />
      </div>
      <div className="relative container mx-auto p-2 flex items-center">
        <div>
          <img src={avatar} alt="avatar" className="w-72 m-12 rounded-full" />
        </div>
        <div className="flex-1 p-6">
          <h2 className="inline text-3xl font-semibold text-gray-800 dark:text-white border-b-2 border-blue-300">
            Intro
          </h2>
          <div className="my-8 text-gray-900 dark:text-white">
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
};

export { Intro };
