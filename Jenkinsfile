pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm --version'
                bat 'SET HOST=hello-react'
                bat 'echo HOST is: %HOST%'
                bat '--------- Installing App ---------'
                bat 'npm install'
                bat '--------- Run Build --------------'
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat '--------- Deploy -----------------'
                bat 'npm run serve'
            }
        }
    }
}