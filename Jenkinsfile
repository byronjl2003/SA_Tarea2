pipeline{
    agent any
	tools {
        sonar 'sonar-in-jenkins' 
    }
    stages{
		stage('Imprimir variables'){
				steps{
					sh 'echo "HOLA"'
					sh 'echo "QUE TAL"'
				}

		}
		stage('Sonar'){
			environment{
				scannerHome = tool 'SonarScanner 4.0'
			}
			steps{
				sh 'echo $scannerHome'
			}
		}

    }
    post{
	    always{
	    	sh 'echo "FIN"'
	    }
	
    }
}
