pipeline{
    agent any
	/*tools {
        hudson.plugins.sonar.SonarRunnerInstallation 
    }
	*/
    stages{
		stage('Imprimir variables'){
			steps{
				sh 'echo "HOLA"'
				sh 'echo "QUE TAL"'
			}

		}
		stage('Sonarqube') {
			environment {
				scannerHome = tool 'SonarQubeScanner'
			}
			steps {
				withSonarQubeEnv('sonarqube') {
					sh "${scannerHome}/bin/sonar-scanner"
				}
				timeout(time: 10, unit: 'MINUTES') {
					waitForQualityGate abortPipeline: true
				}
			}
}

    }
    post{
	    always{
	    	sh 'echo "FIN"'
	    }
	
    }
}
