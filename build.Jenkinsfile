pipeline {
    agent any

    environment {
        FE_IMAGE_NAME = 'matejcihlar/devops-project-frontend'
        BE_IMAGE_NAME = 'matejcihlar/devops-project-backend'
        //VERSION = "${BUILD_NUMBER}"
        DOCKER_API_URL = 'index.docker.io/v1/'
    }

    stages {
        stage('Build Backend') {
            steps {
                    script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://${DOCKER_API_URL}']){
                        def backendImage = docker.build("${BE_IMAGE_NAME}:latest", "-f ./backend/dockerfile .")
                        backendImage.push('latest') }
                    }
                }
            }

        stage('Build Frontend') {
            steps {
                    script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://${DOCKER_API_URL}']){
                        def frontendImage = docker.build("${FE_IMAGE_NAME}:latest", "-f ./frontend/dockerfile .")
                        // frontendImage.push()
                        frontendImage.push('latest')}
                    }
                }
            }
        }
    }
