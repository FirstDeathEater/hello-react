pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Build') {
            steps {
                bat 'npm --version'
                bat 'SET HOST=hello-react'
                bat 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                bat 'npm run serve'
            }
        }
    }
}

