import { Tabs } from 'antd';

import me from '../assets/images/me.jpg'

const onChange = (key) => {
    console.log(key);
  };

const items = [
    {
      key: '1',
      label: 'About me',
      children: "My name is Rakhat, I'm 19 years old and my motherland is Pavlodar. Outside of tech, I enjoy sports like swimming and football. I'm also working on improving my Kazakh language skills, as I believe in staying connected to my roots. I believe in continuous learning and adaptability. Whether it's coding or sports, I'm always pushing myself to improve and face new challenges.",
    },
    {
      key: '2',
      label: 'About University',
      children: "I am in my second year at Astana IT University. My specialty is software engineering. With two years left in my three-year program, I’m eager to keep learning and grow into an in-demand developer. I have hands-on experience with HTML, CSS, JavaScript, and React, and I’m always looking for new challenges in web development. I'm excited about building a career in software development, particularly in backend engineering. I aim to contribute to innovative projects that combine technology and culture, exploring how they influence each other.",
    },
    {
      key: '3',
      label: 'About this website',
      children: "Probably many of you are wondering 'Why was this site created?'. I will be happy to answer you, first of all, the most important thing is to get a new experience. This time I used the Ant Design improvement and tried new features with it, it's really convenient. Secondly, to some extent it is a business card site for my future potential employers, so that they understand who I am and what I can do. Well, in the end, in the process of working on this site, I realized that React does not reveal anything very new in my eyes, as I thought I would sooner or later hit the ceiling. Therefore, I think after finishing this site I will start studying TypeScript. Well, that's about it, all the best!",
    },
];

function AppAbout() {
    return (
        <div className="block aboutPage">
            <div className="container">
                <h2>About</h2>
                <div className="bannerImage">
                    <img src={me} alt='banner' />
                </div>
                <Tabs
                    onChange={onChange}
                    type="card"
                    items={items}
                />
            </div>
        </div>
    )
}

export default AppAbout;