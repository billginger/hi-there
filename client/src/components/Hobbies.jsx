import hobbies_1 from '../assets/hobbies-1.jpg';
import hobbies_2 from '../assets/hobbies-2.jpg';
import hobbies_3 from '../assets/hobbies-3.jpg';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <div id="Hobbies" className="bg-hobbies">
      <div className="container mx-auto px-3 py-8">
        <div className="text-center p-2">
          <h2 className="inline text-3xl font-semibold text-gray-800 dark:text-white border-b-2 border-blue-300">
            Hobbies
          </h2>
        </div>
        <div className="flex pt-6 pb-2 text-gray-900 dark:text-white">
          <div className="flex-1">
            <img src={hobbies_1} alt="Writing" />
            <h3 className="my-2 text-2xl">Writing</h3>
            <p>I've always been passionate about writing something, but there is still far from a professional level.
              Recently, I finally finished my first full-length novel. It was a story about a wolf. I am looking for
              a publisher for it.</p>
          </div>
          <div className="flex-1 mx-6">
            <img src={hobbies_2} alt="Film Editing" />
            <h3 className="my-2 text-2xl">Film Editing</h3>
            <p>When I have free time, I like to edit my favorite movies or TV shows into videos and upload them to
              some video sharing sites. Sometimes someone will see it and give me a like, which will make me feel
              happy.</p>
          </div>
          <div className="flex-1">
            <img src={hobbies_3} alt="Traveling" />
            <h3 className="my-2 text-2xl">Traveling</h3>
            <p>I love to travel, especially self-driving trips. Almost every year, my family and I go to one place.
              We drive from Qingdao and have been to the Inner Mongolia steppe, Qinghai Lake, and Changbai Mountain
              in Jilin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hobbies };
