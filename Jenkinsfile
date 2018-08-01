pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm --version'
                bat 'npm install'
                bat 'echo export function build_number() { return %BUILD_NUMBER% } > build_number.json'
                bat 'set HOST=hello-react && echo %HOST% && npm run build'
            }
        }
        stage('Deploy') {
            steps {
            	bat 'start cmd.exe /c rc.bat "C:\\savvi\\websites\\hello-react" "C:\\SavviArchive\\websites\\hello_react_%date:~10,4%-%date:~4,2%-%date:~7,2%_%BUILD_NUMBER%"'
            	bat 'del C:\\savvi\\websites\\hello-react\\* /f /q'
            	bat 'rmdir C:\\savvi\\websites\\hello-react\\static /s /q'
            	bat 'start cmd.exe /c rc.bat build "C:\\savvi\\websites\\hello-react"'
            }
        }
    }
}