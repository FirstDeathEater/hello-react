pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'SET HOST=hello-react'
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh 'npm run serve'
            }
        }
    }
}