import React, { useState } from 'react';
import { ChevronDown, Terminal, Cloud, Shield, GitBranch, Box, RefreshCw, Server, Globe, Github, Code2, Settings, Cpu, Computer, Construction, LineChart, AlertCircle, Infinity } from 'lucide-react';

const HeaderBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0" style={{
    }} />
  </div>
);

const DevOpsIcon = () => (
  <div className="relative w-20 h-20 mb-6 mx-auto">
    <div className="absolute inset-0 animate-spin-slow">
      <Settings className="w-20 h-20 text-white opacity-20" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <Cpu className="w-10 h-10 text-purple-600" />
    </div>
  </div>
);

const BackgroundImage = () => {
  return (
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("/images/server-room.jpg")',
        filter: 'brightness(0.15)',
      }}
    />
  );
};

const DevOpsShowcase = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [inputMessage, setInputMessage] = useState('');
  const [apiTestResponse, setApiTestResponse] = useState(null);
  const [customMessage, setCustomMessage] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleApiTest = async () => {
    try {
      const response = await fetch('https://devops-showcase-project.ovh/api/messages/hello', {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plaintext',
        }
      });

      const text = await response.text();
      setApiTestResponse(text);
      // Clear api test message response
      setCustomMessage(null);
    } catch (error) {
      setApiTestResponse('Error connecting to API: ' + error.message);
    }
  };

  const handleCustomMessage = async () => {
    if (!inputMessage.trim()) {
      setCustomMessage('Please enter a message');
      return;
    }

    try {
      const response = await fetch('https://devops-showcase-project.ovh/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: inputMessage
      });

      const text = await response.text();
      setCustomMessage(text);
      // Clear custom message test response
      setApiTestResponse(null);
    } catch (error) {
      setCustomMessage('Error connecting to API: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundImage />

      <header className="relative text-white">
        <HeaderBackground />
        <div className="relative container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <DevOpsIcon />
          <div className="max-w-4xl relative z-10">
            <h1 className="text-6xl font-black mb-4 tracking-tight font-mono text-white-500">
              The DevOps Lab
            </h1>
            <p className="text-2xl opacity-90 max-w-2xl mx-auto font-light">
              Automated, Secure, and Scalable Deployment Pipeline for Modern Applications
            </p>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-4">
            <div className="inline-flex space-x-1 bg-black/70 p-1 rounded-full">
              {['welcome','overview', 'pipeline', 'monitoring', 'source code'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-2 rounded-full capitalize transition-all text-sm font-medium ${
                    activeSection === section
                      ? 'bg-white/30 text-white shadow-sm backdrop-blur-sm'
                      : 'text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto text-white min-h-[600px]"> {}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg container mx-auto mt-8">
                <div className="flex items-center mb-6">
                  <Infinity className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Project Highlights</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      icon: Computer,
                      title: "Frontend Application",
                      description: "Interactive web interface with modern styling",
                      details: [
                        "Displays documentation about the project, including details about the technologies used",
                        "Styled using Tailwind CSS and processed with PostCSS",
                        "Secured with HTTPS"
                      ]
                    },
                    {
                      icon: Server,
                      title: "Backend API",
                      description: "Backend service infrastructure",
                      details: [
                        "Provides a simple endpoint for sending messages",
                        "Built with Spring Boot and exposed via Kubernetes Ingress",
                        "Secured with HTTPS"
                      ]
                    },
                    {
                      icon: Settings,
                      title: "DevOps Focus",
                      description: "Comprehensive DevOps implementation",
                      details: [
                        "Containerization: Both frontend and backend are containerized using Docker",
                        "Clustering: Application runs on a Kubernetes (k3s) cluster",
                        "Automated Deployment: CI/CD pipeline configured in Jenkins automates building and deployment",
                        "Security: External access is secured using Nginx Ingress",
                        "Monitoring: Metrics collected and visualized with Prometheus"
                      ]
                    },
                    {
                      icon: Shield,
                      title: "Secrets Management",
                      description: "Secure handling of sensitive data",
                      details: [
                        "Sensitive data are securely stored in Jenkins"
                      ]
                    }
                  ].map((item, index) => {
                    const isExpanded = expandedCard === index;
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="border border-purple-600/30 rounded-lg p-4 transition-all duration-300 hover:border-purple-600 cursor-pointer"
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="w-6 h-6 text-purple-600" />
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>

                        {isExpanded && (
                          <div className="mt-4 space-y-4 animate-fadeIn">
                            <p className="text-gray-300">{item.description}</p>
                            <ul className="space-y-2">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'pipeline' && (
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">CI/CD Pipeline</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <GitBranch className="w-8 h-8 text-purple-600" />
                    <div className="flex-1 h-2 bg-purple-100 rounded">
                      <div className="w-full h-full bg-purple-600 rounded" />
                    </div>
                    <Box className="w-8 h-8 text-purple-600" />
                    <div className="flex-1 h-2 bg-purple-100 rounded">
                      <div className="w-3/4 h-full bg-purple-600 rounded" />
                    </div>
                    <Cloud className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <p className="font-semibold">Code</p>
                      <p className="text-purple-600">
                        <a
                          href="https://github.com/Matej951/devops-project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-500 transition-colors"
                        >
                          GitHub
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Build & Package</p>
                      <p className="text-purple-600">
                        <a
                          href="https://github.com/Matej951/devops-project/blob/main/build.Jenkinsfile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-500 transition-colors"
                        >
                          Docker & DockerHub
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Deploy</p>
                      <p className="text-purple-600">
                        <a
                          href="https://github.com/Matej951/devops-project/blob/main/deploy.Jenkinsfile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-500 transition-colors"
                        >
                          Jenkins & Helm -> k3s cluster
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Construction className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold">Security Measures</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h1 className="text-xl font-semibold">UNDER CONSTRUCTION</h1>
                  </div>
                </div>
              </div>
            </div>
          )}

            {activeSection === 'welcome' && (
              <div className="space-y-8">
                <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
                  <div className="flex flex-col items-center space-y-6">
                    <Terminal size={64} className="text-white" />
                    <h2 className="text-3xl font-bold text-purple-600">
                      <span className="typing-effect inline-block">Welcome to my DevOps Showcase project</span>
                    </h2>
                    <h3 className="text-xl font-semibold text-center flex items-center justify-center gap-2 animate-slide">
                      <ChevronDown className="w-6 h-6" />
                      Please follow the instructions below to navigate yourself through the page
                      <ChevronDown className="w-6 h-6" />
                    </h3>
                    <div className="space-y-6 w-full max-w-md">
                    <div className="space-y-4">
                      <button
                        onClick={handleApiTest}
                        className="w-full bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors"
                      >
                        Click here to start!
                      </button>
                      {apiTestResponse && (
                        <div className="mt-6 p-4 bg-black/40 rounded-lg">
                          <h3 className="text-lg font-semibold mb-2">API Test Response:</h3>
                          <p className="font-mono">{apiTestResponse}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-center">Write your message to the field below</h3>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Enter custom message"
                          className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                        />
                        <button
                          onClick={handleCustomMessage}
                          className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors"
                        >
                          Send
                        </button>
                      </div>
                      {customMessage && (
                        <div className="mt-6 p-4 bg-black/40 rounded-lg">
                          <h3 className="text-lg font-semibold mb-2">Custom Message Response:</h3>
                          <p className="font-mono">{customMessage}</p>
                        </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {activeSection === 'monitoring' && (
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Construction className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold">Monitoring</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h1 className="text-xl font-semibold">UNDER CONSTRUCTION</h1>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'source code' && (
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
                <div className="flex flex-col items-center space-y-4">
                  <Github size={64} className="text-white" />
                  <h2 className="text-3xl font-bold">GitHub Repository</h2>
                  <a
                    href="https://github.com/Matej951/devops-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-300 transition-colors text-lg"
                  >
                    Visit GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default DevOpsShowcase;