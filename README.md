# mutantDiscover
Servidor utilizado para saber si un humano es mutante mediante su ADN.

Esta hosteado en un VM de Google 
  IP: 35.199.93.103:4000/
  
Para probar la api son los siguientes parametros:
  POST /mutant/ 
    ejemplo= 35.199.93.103:4000/mutant/
    
    en el body del mismo tiene que enviar el siguiente JSON:
    {
        "dna":["ACGCGA","CACGGC","TTACGT","AGACCC","ACCCTA","TCACTG"]
    }
    
 GET /stats/
    ejemplo= 35.199.93.103:4000/stats/

    Retornara un JSON con la cantidad de mutantes, la cantidad de humanos y el ratio de mutantes X humanos.
    
    ejemplo=
    {
        "count_mutant_dna": 62,
        "count_human_dna": 18,
        "ratio": 3.4444444444444446
    }
    
 GET /
    ejemplo= 35.199.93.103:4000/
    
    Retornara un Hello world.
    
Para ejecutar los Test se tiene que ejecutar el comando npm test.

*****************************************************************

Tambien se hosteo en App Engine de google.

https://melimutant.rj.r.appspot.com/

pero me falla el endpoint stats. no tuve tiempo de descubrir el motivo.

*****************************************************************

Autor Ignacio Grandi
