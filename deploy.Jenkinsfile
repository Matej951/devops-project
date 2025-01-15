pipeline {
    agent any

    environment {
        // Helm release names
        FRONTEND_RELEASE = 'frontend'
        BACKEND_RELEASE = 'backend'
        // Namespace v Kubernetes
        NAMESPACE = 'devops-showcase-project'
        // Image tag - můžeme použít třeba git commit hash nebo BUILD_NUMBER
        //VERSION = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
        VERSION = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy Frontend') {
            steps {
                script {
                    sh """
                        helm upgrade --install ${FRONTEND_RELEASE} ./charts/frontend \
                            --namespace ${NAMESPACE} \
                            --set image.tag=${VERSION} \
                            --wait \
                            --timeout 5m
                    """
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                script {
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

        stage('Verify Deployment') {
            steps {
                script {
                    sh """
                        kubectl rollout status deployment/${FRONTEND_RELEASE} -n ${NAMESPACE}
                        kubectl rollout status deployment/${BACKEND_RELEASE} -n ${NAMESPACE}
                    """
                }
            }
        }
    }

/*     post {
        failure {
            script {
                sh """
                    helm rollback ${FRONTEND_RELEASE} -n ${NAMESPACE}
                    helm rollback ${BACKEND_RELEASE} -n ${NAMESPACE}
                """
            }
        }
    } */
}