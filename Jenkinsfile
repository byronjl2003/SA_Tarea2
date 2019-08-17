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
		stage('Sonar'){
			/*environment{
				scannerHome = tool 'SonarScanner 4.0'
			}
			*/
			steps {
                withSonarQubeEnv('sonar-in-jenkins') {
                    // Optionally use a Maven environment you've configured already
                    sh 'sonar-scanner'
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
