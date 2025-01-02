import React, { useState } from 'react';
import { Terminal, Cloud, Shield, GitBranch, Box, RefreshCw, Server, Globe } from 'lucide-react';

const DevOpsShowcase = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [apiResponse, setApiResponse] = useState('');

  const handleApiTest = async () => {
    try {
      const response = await fetch('https://your-api-endpoint/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setApiResponse(data.message);
    } catch (error) {
      setApiResponse('Error connecting to API');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">DevOps Infrastructure Project</h1>
          <p className="text-xl">Automated, Secure, and Scalable Deployment Pipeline</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 py-4">
            {['overview', 'infrastructure', 'pipeline', 'security', 'monitoring'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  activeSection === section
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Terminal className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Tech Stack</h2>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  Apache Web Server with SSL/TLS
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  React Frontend
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  Docker & Docker Hub
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  k3s Kubernetes Cluster
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  Helm Charts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  Jenkins CI/CD
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Infrastructure</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Fully automated infrastructure deployment using Infrastructure as Code (IaC) principles.
                Containerized applications orchestrated by k3s for optimal resource utilization and scalability.
              </p>
              <button
                onClick={handleApiTest}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Test API Connection
              </button>
              {apiResponse && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                  <p className="text-sm font-mono">{apiResponse}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Infrastructure Section */}
        {activeSection === 'infrastructure' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <Server className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Apache Configuration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>SSL/TLS Encryption</li>
                <li>ModSecurity WAF</li>
                <li>Custom Virtual Hosts</li>
                <li>HTTP/2 Support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Box className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Container Orchestration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>k3s Cluster Management</li>
                <li>Auto-scaling Policies</li>
                <li>Load Balancing</li>
                <li>Resource Quotas</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Globe className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Network Architecture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Service Mesh</li>
                <li>Ingress Controllers</li>
                <li>Network Policies</li>
                <li>Service Discovery</li>
              </ul>
            </div>
          </div>
        )}

        {/* Pipeline Section */}
        {activeSection === 'pipeline' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-6">
              <RefreshCw className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">CI/CD Pipeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <GitBranch className="w-8 h-8 text-blue-600" />
                <div className="flex-1 h-2 bg-blue-100 rounded">
                  <div className="w-full h-full bg-blue-600 rounded" />
                </div>
                <Box className="w-8 h-8 text-blue-600" />
                <div className="flex-1 h-2 bg-blue-100 rounded">
                  <div className="w-3/4 h-full bg-blue-600 rounded" />
                </div>
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="font-semibold">Code & Test</p>
                  <p className="text-gray-600">Git, Jest, ESLint</p>
                </div>
                <div>
                  <p className="font-semibold">Build & Package</p>
                  <p className="text-gray-600">Docker, Helm</p>
                </div>
                <div>
                  <p className="font-semibold">Deploy</p>
                  <p className="text-gray-600">k3s, ArgoCD</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Section */}
        {activeSection === 'security' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <Shield className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Security Measures</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2" />
                  <div>
                    <p className="font-medium">SSL/TLS Encryption</p>
                    <p className="text-gray-600">All traffic encrypted with modern TLS 1.3</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2" />
                  <div>
                    <p className="font-medium">Container Security</p>
                    <p className="text-gray-600">Regular security scans and minimal base images</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2" />
                  <div>
                    <p className="font-medium">Network Policies</p>
                    <p className="text-gray-600">Strict pod-to-pod communication rules</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Security Configurations</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {`# Sample Security Configurations
ServerTokens Prod
ServerSignature Off
TraceEnable Off
Header set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000"
Header always set X-Frame-Options "SAMEORIGIN"`}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DevOpsShowcase;