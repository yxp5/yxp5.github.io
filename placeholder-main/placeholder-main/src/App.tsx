import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Download, Github, Linkedin, Award, Briefcase, GraduationCap, Code, Globe, User } from 'lucide-react';

declare global {
  interface Window {
    voiceflow: any;
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Voiceflow chat widget initialization
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '685431ca3cb4c74c7aee6200' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.head.appendChild(script);

    // Intersection Observer for active section
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'work_and_service', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'research_and_project', label: 'Research', icon: Code },
    { id: 'technology', label: 'Technology', icon: Code },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl font-bold text-white hover:text-blue-300 transition-colors cursor-pointer bg-transparent border-none"
            >
              Yuxiang Pan
            </button>
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
              <a
                href="test.html"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                <span className="text-sm font-medium">Playground</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Software Developer &<br />
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    AI Engineer
                  </span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  I am passionate about software development and AI engineering. I help companies to enhance their business with AI.
                </p>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  This website serves as a hub for my presence, showcasing my projects and skills. Feel free to explore, and don't hesitate to reach out using my AI assistant (on the right bottom corner) if you'd like to collaborate or connect.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href="https://www.linkedin.com/in/yuxiang-pan-725b86250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-6 py-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 text-slate-300 hover:text-white"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/yxp5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-6 py-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 text-slate-300 hover:text-white"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Award className="mr-2" size={20} />
                    Certificate
                  </h3>
                  <p className="text-slate-300 mb-2">
                    I am a certified Associate Data Analyst by{' '}
                    <a
                      href="https://www.datacamp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      DataCamp
                    </a>
                    .
                  </p>
                  <p className="text-slate-400">
                    My{' '}
                    <a
                      href="data-cert.pdf"
                      download
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                    >
                      certificate <Download size={16} className="ml-1" />
                    </a>{' '}
                    is valid from Nov 2024 to Nov 2026.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-slate-300">yuxiangpan2019@gmail.com</p>
                      <p className="text-slate-400 text-sm">yuxiang.pan@mail.mcgill.ca (academic)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-emerald-400 mt-1" size={20} />
                    <div>
                      <p className="text-white font-medium">Mobile</p>
                      <p className="text-slate-300">(+1) 514-993-0881 (Canada)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-red-400 mt-1" size={20} />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-slate-300">Montreal, Quebec, Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work and Service Section */}
        <section id="work_and_service" className="py-20 px-6 bg-slate-800/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Work and Service</h2>
              <p className="text-xl text-slate-400">Professional experience and contributions</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "AI Engineer",
                  company: "Smart Automation",
                  responsibilities: [
                    "Meet with prospects and design an optimal solution tailored for prospect’s business requirements.",
                    "Deploy AI solutions, design systems, and set up APIs",
                    "Be versatile, deliver on time, build trustworthy and reliable solutions",
                    "Retainer maintenance."
                  ],
                  link: "https://smartautomation.art/",
                  linkText: "Agency Website"
                },
                {
                  title: "Software Engineer",
                  company: "Robert Bosch - UAES",
                  responsibilities: [
                    "Lead cross-functional team in the developing enterprise-level software with extendable AI system using Agile and Scrum methodologies.",
                    "Construct flexible and scalable database for confidential data, with maintenance protocol and action plan to mitigate risks in future development.",
                    "Develop the software layer: conduct data analysis using Panda and Numpy framework, implement core logics and algorithms, build machine learning model tailored for company data using PyTorch, Tensorflow, and Scikit Learn, develop software's frontend."
                  ],
                  achievements: [
                    "Implement process automation, reducing manual workload by 60-90%.",
                    "Add resource recycling to the pipeline, introducing standards."
                  ]
                },
                {
                  title: "Programming Language Researcher",
                  company: "McGill University",
                  responsibilities: [
                    "Design logic frameworks to replicate real life models (software, hardware, systems, and more!) using functional programming languages.",
                    "Mechanize normalization by evaluation to enhance model reasoning, reducing model verification speed from days to seconds."
                  ],
                  achievements: [
                    "The frameworks are applicable to various industrial settings.",
                    "Automate up to 100% of verification process in the pipeline."
                  ]
                },
                {
                  title: "Natural Language Processing Researcher",
                  company: "McGill University",
                  responsibilities: [
                    "Research state-of-the-art (2023) natural language processing models for the classification of Chinese characters.",
                    "Implement and optimize classification machine learning models without high-order semantic logics."
                  ],
                  achievements: [
                    "Reach +90% model accuracy."
                  ]
                },
                {
                  title: "Software Engineer",
                  company: "Anban Tech",
                  responsibilities: [
                    "Debug and improve the intelligent fuzziness testing system."
                  ],
                  achievements: [
                    "Clean noise from data depending on the noise intensity."
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                      <p className="text-lg text-blue-400">{job.company}</p>
                    </div>
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>{job.linkText}</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {job.achievements && (
                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">Achievements:</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-slate-300 flex items-start">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Additional roles */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Volunteer", company: "Elderly care-taker at Royal Victoria Hospital" },
                  { title: "Life Guard", company: "Guardian at World Gym Brossard" },
                  { title: "Asgardian Knight Commander", company: "Protector of seven galaxies :)" }
                ].map((role, index) => (
                  <div key={index} className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                    <p className="text-slate-400">{role.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
              <p className="text-xl text-slate-400">Core competencies and expertise</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { skill: "Full-Stack Software Development", years: "2.5 years", color: "blue" },
                { skill: "AI Engineering", years: "2 years", color: "emerald" },
                { skill: "Data Scientist", years: "3 years", color: "purple" },
                { skill: "Build Machine Learning Models", years: "2 years", color: "orange" },
                { skill: "Logic and Reasoning Researcher", years: "1.5 years", color: "red" }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.skill}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    item.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    item.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    item.color === 'orange' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {item.years}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research and Projects Section */}
        <section id="research_and_project" className="py-20 px-6 bg-slate-800/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Research and Projects</h2>
              <p className="text-xl text-slate-400">Academic research and technical projects</p>
            </div>

            {/* Research */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-white mb-8">Research</h3>
              <div className="space-y-8">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Normalization by Evaluation for Simply Typed Lambda Calculus (2024)
                  </h4>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Normalization by Evaluation (NbE) is a powerful normalization concept in type theory and functional programming that aims to establish a consistent normal
                    form of representing typable expression. The technique is useful to construct efficient and extendable verifier which can reason about model properties.
                  </p>
                  <p className="text-slate-300 mb-6">
                    This research presents an overview of NbE acting on the model of Simply Typed Lambda Calculus in proof assistant Coq.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <a
                      href="https://gitlab.cs.mcgill.ca/yuxiang.pan/comp-396-project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Repository</span>
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href="nbe-stlc.pdf"
                      download
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Download Paper</span>
                      <Download size={16} />
                    </a>
                  </div>
                  <p className="text-slate-400">
                    Amazing supervisors:{' '}
                    <a href="https://hustmphrrr.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Jason Hu, PhD.
                    </a>
                    ,{' '}
                    <a href="https://www.cs.mcgill.ca/~bpientka/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Prof. Brigitte Pientka
                    </a>
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    A Deeper Exploration of Natural Language Processing in Chinese (2023)
                  </h4>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    We present a Natural Language Processing (NLP) task of text classification for text in Chinese, with a deeper focus on radical and stroke information for
                    individual Chinese character. We utilize multinomial naive bayes classifiers with different selection strategies. Our work proves the effectiveness of the technique, 
                    as it outperforms expected accuracy while completely disregards textual semantic logic.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <a
                      href="nlp-chinese.pdf"
                      download
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Download Paper</span>
                      <Download size={16} />
                    </a>
                  </div>
                  <p className="text-slate-400">
                    Amazing teammates:{' '}
                    <a href="https://github.com/milk-girl" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Ava Gilmour
                    </a>
                    , Haiqi Zhou
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Projects</h3>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multiple ML competition experience that scored within top 25% globally, with best ML models ranked 12/993 and 82/4770.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multiple independent projects on
                    <a
                      href="https://github.com/yxp5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                    >ㅤGitHub<ExternalLink size={14} className="ml-1" />
                    </a>:
                  </li>
                </ul>
                <ul className="mt-4 ml-8 space-y-3 text-slate-400">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ML model that can detects hand gesture and translate into simple commonly used phrase or English alphabet using American Sign Language.
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cryptographic cipher and attack design.
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mechanizing simple shell in C utilizing different memory management methods.
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Exploration of software development principles and design patterns.
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Simple video game design and modding.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technology</h2>
              <p className="text-xl text-slate-400">Technical proficiencies and tools</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "AI Tools",
                  items: "Relevance AI, Make, Agentive, Voiceflow, HuggingFace, Google VertexAI, Kaggle Database",
                  color: "purple"
                },
                {
                  category: "Microsoft",
                  items: "Azure, Excel, Power BI, PowerPoint, Word",
                  color: "blue"
                },
                {
                  category: "Python",
                  items: "Daily usage. To implement Machine Learning Model or to build an AI system",
                  color: "emerald"
                },
                {
                  category: "Java",
                  items: "Software design and video game modding",
                  color: "orange"
                },
                {
                  category: "C",
                  items: "For low-level high-performance implementation. Building simple shell",
                  color: "red"
                },
                {
                  category: "R",
                  items: "Efficiently compute various statistical model, such as rank-based non-parametric statistic and regression models",
                  color: "cyan"
                },
                {
                  category: "SQL",
                  items: "Data retrieval and manipulation. Neatly structure and classify data while assuring easy and fast access",
                  color: "yellow"
                },
                {
                  category: "OCaml",
                  items: "Functional programming, mostly used for research purpose",
                  color: "indigo"
                },
                {
                  category: "Coq/Beluga",
                  items: "Construct mathematical models of real life systems (such as software program or security protocol) and reason about their properties to ensure correctness",
                  color: "pink"
                }
              ].map((tech, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Code className="mr-2" size={20} />
                    {tech.category}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{tech.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="py-20 px-6 bg-slate-800/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Languages</h2>
              <p className="text-xl text-slate-400">Multilingual communication abilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { language: "English", level: "Fluent" },
                { language: "French", level: "Fluent" },
                { language: "Chinese Mandarin", level: "Native" },
                { language: "German", level: "Half-work proficiency" },
                { language: "Japanese", level: "Half-work proficiency" },
                { language: "Spanish", level: "Beginner" },
                { language: "Russian", level: "Beginner" }
              ].map((lang, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
                  <Globe className="mx-auto mb-3 text-blue-400" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">{lang.language}</h3>
                  <p className="text-slate-400">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
              <p className="text-xl text-slate-400">Academic background and qualifications</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-400 mr-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-white">McGill University</h3>
                  <p className="text-slate-400">Montreal, Quebec, Canada</p>
                </div>
              </div>
              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Science</h4>
                <p className="text-lg text-blue-400">Math & Computer Science</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            Thank you for visiting my portfolio. Feel free to reach out for collaboration opportunities.
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Yuxiang Pan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;