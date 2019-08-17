pipeline{
    agent any
    stages{
		stage('Imprimir variables'){
				steps{
					sh 'echo "HOLA"'
					sh 'echo "QUE TAL"'
				}

		}
		stage('Sonar'){
			environment{
				scannerHome = 'HOLA-Scanner'
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
