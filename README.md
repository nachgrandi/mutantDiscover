# mutantDiscover
Servidor utilizado para saber si un humano es mutante mediante su ADN.

Esta hosteado en Google App Engine 
  URL: https://melimutant.rj.r.appspot.com/

Tambien esta corriendo en un VM de Google 
  IP: 35.199.93.103:4000/
  
Para probar la api son los siguientes parametros:
  POST /mutant/ 
    ejemplo= https://melimutant.rj.r.appspot.com/mutant/ O 35.199.93.103:4000/mutant/
    
    en el body del mismo tiene que tener la siguiente info:
    {
        "dna":["ACGCGA","CACGGC","TTACGT","AGACCC","ACCCTA","TCACTG"]
    }
    
 GET /stats/
    ejemplo= https://melimutant.rj.r.appspot.com/stats/ O 35.199.93.103:4000/stats/

    Retornara un JSON con la cantidad de mutantes, la cantidad de humanos y el ratio de mutantes X humanos.
    
    ejemplo=
    {
        "count_mutant_dna": 62,
        "count_human_dna": 18,
        "ratio": 3.4444444444444446
    }
    
 GET /
    ejemplo= https://melimutant.rj.r.appspot.com/O 35.199.93.103:4000/
    
    Retornara un Hello world.
    
Para ejecutar los Test se tiene que ejecutar el comando npm test.

Autor Ignacio Grandi
