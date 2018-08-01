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
            	bat 'set tscript=%time: =0% && set archivePath="C:\\SavviArchive\\websites\\hello_react_%date:~10,4%-%date:~4,2%-%date:~7,2%_%tscript:~0,2%%tscript:~3,2%%tscript:~6,2%" && echo %archivePath% && mkdir %archivePath% && robocopy "C:\\savvi\\websites\\hello-react" %archivePath% /MIR /MOVE'
            	bat 'rmdir C:\\savvi\\websites\\hello-react\\static /s /q'
            	bat 'xcopy /E build "C:\\savvi\\websites\\hello-react"'
            }
        }
    }
}