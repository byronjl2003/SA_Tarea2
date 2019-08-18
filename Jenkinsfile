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
            		sh "${scannerHome}/bin/sonar-scanner -X"
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
