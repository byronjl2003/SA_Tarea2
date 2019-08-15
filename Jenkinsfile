pipeline{
    agent any
    stages{
	stage('Imprimir variables'){
            steps{
                sh 'echo "HOLA"'
                sh 'echo "QUE TAL"'
            }

	}
	    stage('Sonarqube'){
		    steps{
			    sh 'sonar-scanner'
		    }
	    }
	    

    }
    post{
	    always{
	    	sh 'echo "FIN"'
	    }
	
    }
}
