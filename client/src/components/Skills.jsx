import './Skills.css'

const Skills = () => {
  return (
    <div id="Skills" className="relative">
      <div className="bg-light absolute inset-0"></div>
      <div className="bg-dark absolute inset-0 hidden dark:block"></div>
      <div className="bg-square absolute inset-0"></div>
      <div className="relative container mx-auto p-2 flex items-center">
        <div className="flex-1 p-6">
          <h2 className="inline text-3xl font-semibold text-gray-800 dark:text-white border-b-2 border-indigo-300">
            Skills
          </h2>
          <div className="my-8 text-gray-900 dark:text-white">
            <p>In school, I learned basic computer knowledge, C language, SQL database, and taught myself VB and ASP
              through books.</p>
            <p>After graduation, my first job was to develop dynamic websites using ASP, and I also learned and used
              Flash, which was very popular at that time.</p>
            <p>In my more than 10 years of work, I have learned jQuery, BootStrap, PHP, MySQL, React, Node.js, MongoDB,
              TypeScript, GraphQL, and used them in my projects.</p>
            <p>I am now very interested in Web3, for which I learned blockchain technology and smart contracts, and
              look forward to working on projects related to Web3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Skills };
