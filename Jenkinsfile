pipeline {
    agent any

    stages {
        stage('Stop and Remove Old Manual Containers') {
            steps {
                echo 'Stopping and removing old manual containers if they exist...'

                // Stop and remove specific containers
                sh 'docker stop frontend_ci_container_v2 || true'
                sh 'docker rm frontend_ci_container_v2 || true'
                sh 'docker stop backend_ci_container_v2 || true'
                sh 'docker rm backend_ci_container_v2 || true'
            }
        }

        stage('Build and Deploy with Docker') {
            steps {
                echo 'Building and deploying Docker containers for ecommerce_pipeline project...'
                sh 'docker-compose -p ecommerce_pipeline -f docker-compose.yml up -d --build --remove-orphans'
            }
        }

        stage('Clean Up Dangling Images') {
            steps {
                echo 'Cleaning up unused Docker images...'
                sh 'docker image prune -f'
            }
        }
    }
}
