import React, { useEffect, useState } from 'react';
import Groq from 'groq-sdk';
import emailjs from '@emailjs/browser';
import './index.css';

// Components
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/Chat/ChatWidget';
import Footer from './components/Footer';
import ScrollButtons from './components/common/ScrollButtons';
import SocialSidebar from './components/SocialSidebar';
import TechMarquee from './components/TechMarquee';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  // Projects & Skills Data
  const projectsData = [
    {
      title: 'EcoMonitor: Real-time IoT Dashboard',
      desc: 'A fullstack environmental monitoring system with real-time data streaming and historical analysis.',
      tech: 'React, Node.js, Socket.io, MongoDB',
      tags: ['Fullstack', 'IoT'],
      img: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/Mkdevx006',
      live: '#'
    },
    {
      title: 'Enterprise ERP System',
      desc: 'Comprehensive resource planner with role-based access control, inventory tracking, and automated reporting.',
      tech: 'Next.js, PostgreSQL, Tailwind',
      tags: ['Backend', 'Enterprise'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      github: 'https://github.com/Mkdevx006',
      live: '#'
    },
    {
      title: 'AI Portfolio Assistant',
      desc: 'Custom chatbot integrated with LLMs to provide interactive guidance for visitors.',
      tech: 'Groq, Llama 3, React, Node.js',
      tags: ['AI', 'Frontend'],
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/Mkdevx006',
      live: '#'
    },
    {
      title: 'Full Stack Password Strength Checker',
      desc: 'A full-stack application with Vue.js frontend and Node.js backend for real-time password strength analysis and suggestions.',
      tech: 'Vue.js, Node.js, Express, Vite',
      tags: ['Fullstack', 'Security'],
      img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      github: 'https://github.com/Mkdevx006/Password-Strength-Checker',
      live: '#'
    }
  ];

  const skills = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'Java', icon: '☕', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' }
  ];

  // Hero Logic
  const [displayText, setDisplayText] = useState('');
  const roles = ['Software Engineer', 'Fullstack Developer', 'Backend Specialist', 'Solution Architect'];

  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      const shouldDelete = isDeleting;

      setDisplayText(currentRole.substring(0, shouldDelete ? currentCharIndex - 1 : currentCharIndex + 1));
      currentCharIndex = shouldDelete ? currentCharIndex - 1 : currentCharIndex + 1;

      let typeSpeed = shouldDelete ? 50 : 100;

      if (!shouldDelete && currentCharIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (shouldDelete && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before next role
      }

      timer = setTimeout(type, typeSpeed);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  // Theme Logic
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  // Nav Logic
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  // Chat Logic
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hi! I'm your portfolio assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleChatAction = (action) => {
    const userMsg = { text: action.label, sender: 'user' };
    setChatMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse = "";
      switch (action.id) {
        case 'tech': botResponse = "I specialize in Fullstack development with React, Node.js, and modern CSS. 🛠️"; break;
        case 'projects': botResponse = "I've built several high-impact projects. Scroll down to see my favorites! 📁"; break;
        case 'resume': botResponse = "You can download my CV from the Hero section! 📄"; break;
        case 'contact': botResponse = "I'm always open to new opportunities! Fill the form below or email me. ☕"; break;
        default: botResponse = "That's interesting! Tell me more.";
      }
      setChatMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const userMsg = { text: userInput, sender: 'user' };
    setChatMessages(prev => [...prev, userMsg]);
    setUserInput('');
    setIsAiTyping(true);

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "You are an AI assistant for a professional portfolio website. The owner is a Fullstack Developer skilled in React, Node.js, and MongoDB. Provide helpful, concise responses (2-3 sentences max)." },
          { role: "user", content: userInput }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 200,
      });
      const aiText = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
      setChatMessages(prev => [...prev, { text: aiText, sender: 'bot' }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting. Try the quick buttons! 😊", sender: 'bot' }]);
    } finally {
      setIsAiTyping(false);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowScrollButtons(scrollY > 300);
      setIsNearBottom(scrollY + windowHeight >= documentHeight - 500);
      setScrollProgress((scrollY / (documentHeight - windowHeight)) * 100);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 110 && rect.bottom >= 110) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic Effect
  useEffect(() => {
    const handleMagnetic = (e) => {
      const magneticItems = document.querySelectorAll('.magnetic');
      magneticItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 80) {
          item.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        } else {
          item.style.transform = 'translate(0, 0)';
        }
      });
    };
    window.addEventListener('mousemove', handleMagnetic);
    return () => window.removeEventListener('mousemove', handleMagnetic);
  }, []);

  // Reveal Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      setFormStatus("Message sent successfully! I'll get back to you soon.");
      e.target.reset();
    }, (error) => {
      setFormStatus("Oops! Something went wrong. Please try again later.");
      console.error(error.text);
    });
  };

  return (
    <div className="app">
      <ParticleBackground key={isDarkMode ? 'dark' : 'light'} />
      <SocialSidebar />

      <Navbar
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollProgress={scrollProgress}
      />

      <main>
        <Hero displayText={displayText} roles={roles} />
        <TechMarquee />

        <div className="section-divider">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.1 }}>
            <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="currentColor" />
          </svg>
        </div>

        <About />

        <div className="section-divider">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.1, transform: 'rotate(180deg)' }}>
            <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="currentColor" />
          </svg>
        </div>

        <Skills skills={skills} />

        <div className="section-divider">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.1 }}>
            <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="currentColor" />
          </svg>
        </div>

        <Projects
          projectsData={projectsData}
          setSelectedProject={setSelectedProject}
          selectedProject={selectedProject}
        />
        <Contact handleFormSubmit={handleFormSubmit} formStatus={formStatus} />
      </main>

      <Footer />

      <ChatWidget
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        chatMessages={chatMessages}
        isAiTyping={isAiTyping}
        userInput={userInput}
        setUserInput={setUserInput}
        handleChatAction={handleChatAction}
        handleSendMessage={handleSendMessage}
      />

      <ScrollButtons
        showScrollButtons={showScrollButtons}
        isNearBottom={isNearBottom}
        handleSmartScroll={() => isNearBottom ? window.scrollTo({ top: 0, behavior: 'smooth' }) : window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
      />
    </div>
  );
}

export default App;
