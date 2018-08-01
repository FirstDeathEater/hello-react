pipeline {
    agent any
    
    environment {
        HOST = 'hello-react'
    }

    stages {
        stage('Build') {
            steps {
                bat 'npm --version'
                bat 'npm install'
                bat 'echo export function build_number() { return %BUILD_NUMBER% } > ".\\src\\build_number.js"'
                bat 'echo %HOST%'
                bat 'npm run build'
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
        stage('Test') {
            steps {
                bat 'echo "Fail!"; exit 1'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
            echo 'TO DO:'
            echo '  - modify build to clean up old archived versions of website, if the current build was successful'
            echo '  - figure out if we can set an environment variable in a batch script instead of trying it at the command line where it does not seem to work'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
            echo 'Right now the Test stage should always fail, but we don\'t care.'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }    
}