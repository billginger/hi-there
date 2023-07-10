import { useRef, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import useInterval from '../hooks/useInterval';
import './TagCloud.css';

const tags = [
  'HTML', 'CSS', 'JavaScript', 'jQuery', 'ECharts', 'BootStrap', 'PHP', 'MySQL', 'React', 'Webpack', 'AntDesign',
  'Less', 'Node.js', 'Express', 'MongoDB', 'Linux', 'Nginx', 'Docker', 'Microservices', 'TypeScript', 'ESLint',
  'Jest', 'GraphQL', 'Electron', 'Web3', 'Vite', 'tailwindcss', 'Serverless', 'Lambda', 'DynamoDB', 'Next.js'
];

const radius = 192;
const size = 1.5 * radius;
const depth = 2 * radius;
const initSpeed = 2;

const tagsInit = () => tags.map((text, index) => {
  const tagRef = useRef(null);
  const phi = Math.acos(-1 + (2 * index + 1) / tags.length);
  const theta = Math.sqrt((tags.length + 1) * Math.PI) * phi;
  return ({
    index,
    text,
    tagRef,
    opacity: 0,
    filter: 'alpha(opacity=0)',
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  });
});

const TagCloud = () => {
  const [items, setItems] = useState(tagsInit());
  const tagCloudRef = useRef(null);
  const mousePosition = useMousePosition();

  const next = () => {
    const rect = tagCloudRef.current.getBoundingClientRect();
    const mouseX = (mousePosition.x - (rect.left + rect.width / 2)) / 5;
    const mouseY = (mousePosition.y - (rect.top + rect.height / 2)) / 5;

    const a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * initSpeed;
    const b = (Math.min(Math.max(-mouseX, -size), size) / radius) * initSpeed;

    const l = Math.PI / 180;
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l),
    ];

    setItems(prev => prev.map(item => {
      const rx1 = item.x;
      const ry1 = item.y * sc[1] + item.z * -sc[0];
      const rz1 = item.y * sc[0] + item.z * sc[1];
      const rx2 = rx1 * sc[3] + rz1 * sc[2];
      const ry2 = ry1;
      const rz2 = rz1 * sc[3] - rx1 * sc[2];
      const per = (2 * depth) / (2 * depth + rz2);

      item.scale = per.toFixed(3);
      let alpha = per * per - 0.25;
      alpha = (alpha > 1 ? 1 : alpha).toFixed(3);

      if (item?.tagRef?.current) {
        const left = (item.x - item.tagRef.current.offsetWidth / 2).toFixed(2);
        const top = (item.y - item.tagRef.current.offsetHeight / 2).toFixed(2);

        return ({
          ...item,
          opacity: alpha,
          filter: `alpha(opacity=${100 * alpha})`,
          transform: `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`,
          x: rx2,
          y: ry2,
          z: rz2,
        });
      }
    }));
  };

  useInterval(() => {
    next();
  }, 100);

  return (
    <div ref={tagCloudRef} className="relative w-80 md:w-96 h-80 md:h-96 text-gray-900 dark:text-white">
      {items.map(({ index, text, tagRef, opacity, filter, transform }) => (
        <span key={index} ref={tagRef} style={{ opacity, filter, transform }} className="tag">
          {text}
        </span>
      ))}
    </div>
  );
};

export { TagCloud };
