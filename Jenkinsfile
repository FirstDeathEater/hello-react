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
        stage('Pre-deploy Tests') {
            steps {
                bat 'echo "Success!"'
                bat 'exit /b 0'
            }
        }
        stage('Deploy - Development') {
            steps {
            	bat 'start cmd.exe /c rc.bat "C:\\savvi\\websites\\hello-react" "C:\\SavviArchive\\websites\\hello_react_%date:~10,4%-%date:~4,2%-%date:~7,2%_%BUILD_NUMBER%"'
            	bat 'del C:\\savvi\\websites\\hello-react\\* /f /q'
            	bat 'rmdir C:\\savvi\\websites\\hello-react\\static /s /q'
            	bat 'start cmd.exe /c rc.bat build "C:\\savvi\\websites\\hello-react"'
            }
        }
        stage('Post-deploy Tests') {
            steps {
                bat 'echo "Success!"'
                bat 'exit /b 0'
            }
        }
	stage('Deploy to QA?') {
	    mail to: 'bella.forrister@welltok.com',
		 subject: "Bella's Local Jenkins Server - Action Needed Project: ${env.JOB_NAME} Build #${env.BUILD_NUMBER}",
		 body: "${currentBuild.fullDisplayName} action needed:\n${env.BUILD_URL}"
            steps {
                input "Ready to deploy to QA?"
            }
        }
        stage('Deploy - QA') {
            steps {
                bat 'echo "There is no QA environment that has been set up!"'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
            echo 'To cause an error, add a line where you want the error to happen that says:'
            echo 'bat \'exit /b 1\''
            echo 'TO DO:'
            echo '  - modify build to clean up old archived versions of website, if the current build was successful'
        }
        success {
            echo 'This will run only if successful'
            mail to: 'bella.forrister@welltok.com',
	                 subject: "Bella's Local Jenkins Server - Success for Project: ${env.JOB_NAME} Build #${env.BUILD_NUMBER}",
             body: "${currentBuild.fullDisplayName} was successful:\n${env.BUILD_URL}"
        }
        failure {
            echo 'This will run only if failed'
            mail to: 'bella.forrister@welltok.com',
	                 subject: "Bella's Local Jenkins Server - Failed for Project: ${env.JOB_NAME} Build #${env.BUILD_NUMBER}",
             body: "Something is wrong with ${currentBuild.fullDisplayName}:\n${env.BUILD_URL}"
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