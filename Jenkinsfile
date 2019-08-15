pipeline{
    agent any
    stages{
	stage('Imprimir variables'){
            steps{
                sh 'echo "HOLA"'
                sh 'echo "QUE TAL"'
            }

	}

    }
    post{
	    always{
	    	sh 'echo "FIN"'
	    }
	
    }
}
