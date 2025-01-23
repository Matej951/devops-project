pipeline {
    agent any

    environment {
        // Helm release names
        FRONTEND_RELEASE = 'frontend'
        BACKEND_RELEASE = 'backend'
        // Namespace in Kubernetes
        NAMESPACE = 'devops-showcase-project'
        // Image tag
        VERSION = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Debug Path') {
            steps {
                sh "pwd"
                sh "ls -l ./charts/frontend"
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
                }
            }
        }
    }
}

/*
        stage('Verify Deployment') {
            steps {
                withKubeConfig([
                    credentialsId: 'k3s-token',
                    serverUrl: 'https://57.129.134.113:6443'
                ]) {
                    sh """
                        kubectl rollout status deployment/${FRONTEND_RELEASE} -n ${NAMESPACE}
                        kubectl rollout status deployment/${BACKEND_RELEASE} -n ${NAMESPACE}
                    """
                }
            }
        }
    }
 */

/*     post {
        failure {
            withKubeConfig([
                credentialsId: 'k3s-token',
                serverUrl: 'https://vas-k3s-server:6443'
            ]) {
                sh """
                    helm rollback ${FRONTEND_RELEASE} -n ${NAMESPACE}
                    helm rollback ${BACKEND_RELEASE} -n ${NAMESPACE}
                """
            }
        }
    } */