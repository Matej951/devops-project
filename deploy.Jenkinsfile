pipeline {
    agent any

    environment {
        // Helm release names
        FRONTEND_RELEASE = 'devops-showcase-frontend-release'
        BACKEND_RELEASE = 'devops-showcase-backend-release'
        INGRESS_RELEASE = 'devops-showcase-ingress-release'
        // Namespace in Kubernetes
        NAMESPACE = 'devops-showcase-project'
        VERSION = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                withKubeConfig([
                    credentialsId: 'k3s-token',
                    serverUrl: 'https://57.129.134.113:6443'
                ]) {
                    // Deploy Frontend
                    sh """
                        helm upgrade --install ${FRONTEND_RELEASE} ./charts/frontend \
                            --namespace ${NAMESPACE} \
                            --set image.tag=${VERSION} \
                            --wait \
                            --timeout 5m
                    """

                    // Deploy Backend
                    sh """
                        helm upgrade --install ${BACKEND_RELEASE} ./charts/backend \
                            --namespace ${NAMESPACE} \
                            --set image.tag=${VERSION} \
                            --wait \
                            --timeout 5m
                    """

                    // Deploy ingress
                    sh """
                        helm upgrade --install ${INGRESS_RELEASE} ./charts/ingress \
                            --namespace ${NAMESPACE} \
                            --wait \
                            --timeout 5m
                    """
                }
            }
        }
    }
}
