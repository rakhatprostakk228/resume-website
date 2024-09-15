import { Collapse } from 'antd';

const items = [
    {
      key: '1',
      label: 'What’s your educational background?',
      children: <p>I’m currently in my second year at Astana IT University, specializing in software engineering.</p>
    },
    {
      key: '2',
      label: 'What projects have you worked on?',
      children: <p>I've been making up websites for my friend's work and I’ve worked on creating websites, contributed to GitHub projects</p>
    },
    {
      key: '3',
      label: 'Can you help with web development tasks?',
      children: <p>Yes! I’m experienced in building responsive and interactive websites, I will be really happy to help.</p>
    },
    {
      key: '4',
      label: 'Why did you choose software engineering?',
      children: <p> I’ve always been fascinated by how technology can solve real-world problems, and software engineering allows me to create solutions that impact people’s lives.</p>
    },
    {
      key: '5',
      label: 'How are you preparing for your career?',
      children: <p>I’m focused on learning both frontend and backend technologies, contributing to projects, and gaining practical experience to make myself a well-rounded and in-demand developer.</p>
    },
    {
      key: '6',
      label: 'Can I collaborate with you on a project?',
      children: <p>Absolutely! I’m always open to new collaborations, especially if they involve web development or something innovative.</p>
    }
];

const onChange = (key) => {
    console.log(key);
};

function AppFaq() {
    return (
        <div className='block faqPage'>
            <div className='container'>
                <h2>FAQ</h2>
                <Collapse accordion items={items} defaultActiveKey={['1']} onChange={onChange} />
            </div>
        </div>
    )
}

export default AppFaq;