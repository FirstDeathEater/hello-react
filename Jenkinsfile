pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm --version'
                bat 'SET HOST=hello-react'
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat 'npm run serve'
            }
        }
    }
}