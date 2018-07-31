pipeline {
    def shell(command) {
        return bat(returnStdout: true, script: "sh -x -c \"${command}\"").trim()
    }
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                shell 'npm --version'
                shell 'SET HOST=hello-react'
                shell 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                shell 'npm run serve'
            }
        }
    }
}