import React, { useState } from 'react';
import { Terminal, Cloud, Shield, GitBranch, Box, RefreshCw, Server, Globe, Github, Code2, Settings, Cpu, Computer, LineChart, AlertCircle } from 'lucide-react';

// Modifikovaný HeaderBackground s větším zatmavením
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
      <Cpu className="w-10 h-10 text-purple-500" />
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
  const [apiTestResponse, setApiTestResponse] = useState(null);
  const [customMessage, setCustomMessage] = useState(null);

const handleApiTest = async () => {
  try {
    const response = await fetch('https://devops-showcase-project.ovh:90/api/messages/hello', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plaintext',
      }
    });
    const data = await response.json();
    setApiTestResponse(data.message);
    // Clear custom message response
    setCustomMessage(null);
  } catch (error) {
    setApiTestResponse('Error connecting to API: ' + error.message);
  }
};

const handleCustomMessage = async () => {
  try {
    const response = await fetch(`https://devops-showcase-project.ovh:90/api/send/${customMessage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plaintext',
      }
    });
    const data = await response.json();
    setCustomMessage(data.message);
    // Clear API test response
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
              {['welcome','overview', 'infrastructure', 'pipeline', 'security', 'monitoring', 'source code'].map((section) => (
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
            <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Server className="w-6 h-6 text-purple-600 mr-3" />
                    <span>Apache Web Server with SSL/TLS</span>
                  </div>
                  <div className="flex items-center">
                    <Box className="w-6 h-6 text-purple-600 mr-3" />
                    <span>React Frontend, Java Spring Backend</span>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="w-6 h-6 text-purple-600 mr-3" />
                    <span>Docker & Docker Hub</span>
                  </div>
                  <div className="flex items-center">
                    <Computer className="w-6 h-6 text-purple-600 mr-3" />
                    <span>Linux - Debian</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <GitBranch className="w-6 h-6 text-purple-600 mr-3" />
                    <span>k3s Kubernetes Cluster</span>
                  </div>
                  <div className="flex items-center">
                    <Terminal className="w-6 h-6 text-purple-600 mr-3" />
                    <span>Helm Charts</span>
                  </div>
                  <div className="flex items-center">
                    <RefreshCw className="w-6 h-6 text-purple-600 mr-3" />
                    <span>Jenkins CI/CD</span>
                  </div>
                  <div className="flex items-center">
                    <LineChart className="w-6 h-6 text-purple-600 mr-3" />
                    <span>Prometheus</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'infrastructure' && (
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Infrastructure Components</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Server className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Server Infrastructure</h3>
                      <p>Load Balancing, Auto-scaling, High Availability, Monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Cloud className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
                      <p>Container Registry, Object Storage, CDN, DNS Management</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Network</h3>
                      <p>SSL/TLS, DDoS Protection, WAF, VPN</p>
                    </div>
                  </div>
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
                       <p className="text-white-600">GitHub</p>
                     </div>
                     <div>
                       <p className="font-semibold">Build & Package</p>
                       <p className="text-white-600">Docker, Helm</p>
                     </div>
                     <div>
                       <p className="font-semibold">Deploy</p>
                       <p className="text-white-600">Jenkins -> k3s</p>
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
                  <Shield className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold">Security Measures</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Infrastructure Security</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        SSL/TLS Encryption
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        DDoS Protection
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        WAF Implementation
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Application Security</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        Regular Security Scans
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        Dependency Monitoring
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        Access Control
                      </li>
                    </ul>
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
                    <h2 className="text-3xl font-bold text-purple-600">Welcome to my DevOps Showcase project</h2>
                    <h3 className="text-xl font-semibold text-center">Please follow the instructions below to navigate yourself through the page</h3>

                    <div className="space-y-6 w-full max-w-md">
                      <div className="space-y-4">
                        <button
                          onClick={handleApiTest}
                          className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
                        >
                          Click me 1st!
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
                            value={customMessage}
                            onChange={(e) => setCustomMessage(e.target.value)}
                            placeholder="Enter custom message"
                            className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                          />
                          <button
                            onClick={handleCustomMessage}
                            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
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