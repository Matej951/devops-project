pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'hub.docker.com/repositories/matejcihlar'
        FE_IMAGE_NAME = 'matejcihlar/devops-project-frontend'
        BE_IMAGE_NAME = 'matejcihlar/devops-project-backend'
        //VERSION = "${BUILD_NUMBER}"
        //VERSION = currentBuild.number
    }

    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://${DOCKER_REGISTRY}'])
                        def backendImage = docker.build("${DOCKER_REGISTRY}/${BE_IMAGE_NAME} -f ./backend/.")
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
                        def frontendImage = docker.build("${DOCKER_REGISTRY}/${FE_IMAGE_NAME} -f ./frontend/.")
                        frontendImage.push()
                        frontendImage.push('latest')
                    }
                }
            }
        }
    }
}