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
				sh 'echo "jajajajajajx777"'
				sh 'echo $scannerHome'
				withSonarQubeEnv('sonarqube') {
            		sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=ayd2 \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://35.184.187.153 \
  -Dsonar.login=843506c8d44155471da1d9a524475a456b8ebb16"
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
