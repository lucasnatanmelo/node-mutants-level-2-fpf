**DNA VERIFIER - HUMAN OR MUTANT - API**
----
  **API to verifiy if data sent is a human or mutant DNA** <br/>
  *node-mutants-level-2-fpf*

<strong>POST: <STRONG> `https://node-mutants-level-2-fpf.herokuapp.com/mutants` (To verify DNA)


*  **URL Params**

   **None**

* **Data Params** <br/>
  `Text - JSON`


* **Types Responses and Requests**  

  * **MUTANT DNA**<br />
  
    * **Code respoonse:** <br/>200-OK <br />
    * **Input Data Params example:** <br /> 
     `{"dna": ["ACACGA", "CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
    * **Return:** <br/> `true` <br />
    
    <br/>
  * **HUMAN DNA**<br />

     * **Code:** <br/>403-FORBIDDEN <br />
     * **Input Data Params example:** <br/>`{"dna": ["ACACGA","CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
     * **Return:** <br/> `false` <br />
    
    <br />
  * **DNA TYPE NOT ALLOWED**<br />
  * **Input Data Params example:** <br/>`{"dna": ["ACxCyA","CAGTGA", "CCA", "2523", true, "TCACTG"]}` <br />
  * **Code:** 401 UNAUTHORIZED <br />
    * **Content:** <br/> `{ error : "DNA type not allowed." }`<br />

<br/>

* **API - Tech Especifications** <br />

  * **NODEJS + Express** <br />
  * **HEROKU on cloud computing environment** <br />

<br/>

* **INSTALL**

  * **Install NODEJS + dependecies**<br />
  `npm install express cors dot env`
  * **Install DEV dependecies** <br/>
   `npm install nodemon -D`
    

    
 
