pipeline{
    agent any
    stages{
	stage('Imprimir variables'){
            steps{
                sh 'echo "HOLA"'
                sh 'echo "QUE TAL"'
            }

	}
	    stage('Docker'){
		    steps{
			    sh 'docker -v'
		    }
	    }
	    stage('Sonarqube'){
		    steps{
			    sh 'echo "Sonnar"'
		    }
	    }
	    

    }
    post{
	    always{
	    	sh 'echo "FIN"'
	    }
	
    }
}
