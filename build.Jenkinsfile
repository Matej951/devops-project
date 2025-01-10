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
                        def backendImage = docker.build("${BE_IMAGE_NAME}:latest", "-f ./frontend/Dockerfile .")
                        // def backendImage = docker.build("${BE_IMAGE_NAME}:${buildTag}", "-f ./backend/.") # takto bych mohl označit image tagem z gitu
                        // backendImage.push() # mohl bych pushnout obraz s default tagem
                        backendImage.push('latest') }
                    }
                }
            }

        stage('Build Frontend') {
            steps {
                    script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://${DOCKER_REGISTRY}']){
                        def frontendImage = docker.build("${BE_IMAGE_NAME}:latest", "-f ./backend/Dockerfile .")
                        // frontendImage.push()
                        frontendImage.push('latest')}
                    }
                }
            }
        }
    }
