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
            	bat 'robocopy "C:\\savvi\\websites\\hello-react" "C:\\SavviArchive\\websites\\hello_react_%date:~10,4%-%date:~4,2%-%date:~7,2%_%BUILD_NUMBER%" /mir /fp /v && if %ERRORLEVEL% LEQ 3 ( @set ERRORLEVEL=0 )'
            	bat 'del C:\\savvi\\websites\\hello-react\\* /f /q'
            	bat 'rmdir C:\\savvi\\websites\\hello-react\\static /s /q'
            	bat 'robocopy build "C:\\savvi\\websites\\hello-react" /MIR'
            }
        }
    }
}