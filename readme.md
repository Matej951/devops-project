# Project Overview

This full-stack project is designed to demonstrate my ability to approach deployment cycle as a DevOps engineer. The primary focus of this project is on **containerization**, **automated deployment**, **clustering**, **security**, and **monitoring**.

The application itself serves as a practical showcase:
- **Frontend**: Displays documentation about the project and the technologies used.
- **Backend**: A simple API that allows sending messages.

---

## Technologies Used

### Backend:
- **Spring Boot**: Framework for building Java-based applications.
- **Java**: Programming language used for backend logic.
- **Maven**: Build and dependency management tool.
- **Docker**: Used to containerize the backend service.

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Node.js**: Runtime for managing dependencies and building the frontend.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PostCSS**: CSS processing tool.
- **Apache Web Server**: Used to host the built frontend.
- **Docker**: Used to containerize the frontend service.

### Infrastructure:
- **Kubernetes (k3s)**: Lightweight Kubernetes distribution for managing containerized applications.
- **Nginx Ingress**: Configured for secure routing of external traffic to the cluster.
- **Linux Server (Debian)**: Operating system hosting the application.
- **Prometheus**: Used for monitoring and alerting.

### Deployment:
- **Jenkins**: CI/CD tool for automating builds and deployments.
- **Helm**: Kubernetes package manager for simplified deployment configuration.

### Version Control:
- **GitHub**: Repository hosting and version control.

---

## Project Highlights

1. **Frontend Application**:
    - Displays documentation about the project, including details about the technologies used.
    - Styled using **Tailwind CSS** and processed with **PostCSS**.

2. **Backend API**:
    - Provides a simple endpoint for sending messages.
    - Built with **Spring Boot** and exposed via **Kubernetes Ingress**.

3. **DevOps Focus**:
    - **Containerization**: Both frontend and backend are containerized using Docker.
    - **Clustering**: Application runs on a **Kubernetes (k3s)** cluster.
    - **Automated Deployment**: CI/CD pipeline configured in **Jenkins** automates building, testing, and deployment.
    - **Security**: External access is secured using **Nginx Ingress**.
    - **Monitoring**: Metrics collected and visualized with **Prometheus**.

4. **Secrets Management**:
    - Sensitive data are securely stored in Jenkins.
---

### How to Run the Project
1. Clone this repository: `git clone https://github.com/Matej951/devops-project`
2. Follow the deployment guide in [Documentation Link].
3. Access the application at `http://localhost` after deployment.

---
## Note

 **This project emphasizes the DevOps lifecycle rather than application functionality. <br> 
   The primary goal is to demonstrate proficiency in:**

   - Building and containerizing applications.
   - Automating deployments.
   - Managing infrastructure using Kubernetes.
   - Securing and monitoring the system.
