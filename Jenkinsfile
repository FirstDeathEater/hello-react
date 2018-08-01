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
            	bat 'start cmd.exe /c archive.bat'
            	bat 'del C:\\savvi\\websites\\hello-react\\* /f /q'
            	bat 'rmdir C:\\savvi\\websites\\hello-react\\static /s /q'
            	bat 'robocopy build "C:\\savvi\\websites\\hello-react" /MIR'
            }
        }
    }
}