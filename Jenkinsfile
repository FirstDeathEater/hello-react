pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm --version'
                bat 'SET HOST=hello-react'
                bat 'echo HOST is: %HOST%'
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
            	bat 'xcopy /E build "C:\savvi\websites\hello-react"'
            }
        }
    }
}