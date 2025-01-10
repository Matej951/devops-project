pipeline {
    agent any

    environment {
        FE_IMAGE_NAME = 'matejcihlar/devops-project-frontend'
        BE_IMAGE_NAME = 'matejcihlar/devops-project-backend'
        VERSION = "${BUILD_NUMBER}"
        DOCKER_API_URL = 'index.docker.io/v1/'
    }

    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://${DOCKER_API_URL}'])
                        def backendImage = docker.build("${BE_IMAGE_NAME}:${VERSION}", "-f ./backend/.")
                        backendImage.push()
                        backendImage.push('latest')
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://${DOCKER_REGISTRY}'])
                        def frontendImage = docker.build("${BE_IMAGE_NAME}:${VERSION}", "-f ./frontend/.")
                        frontendImage.push()
                        frontendImage.push('latest')
                    }
                }
            }
        }
    }
}