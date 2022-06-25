**<strong>DNA VERIFIER - HUMAN OR MUTANT - API<strong>**
----
  **API to verify if data sent is a human or mutant DNA** <br/>
  *node-mutants-level-2-fpf*

<strong>POST: <STRONG> `https://node-mutants-level-2-fpf.herokuapp.com/mutants`


*  **URL Params**

   **None**

* **Data Params** <br/>
  `Text - JSON`


* **TYPES OF RESQUESTS AND RESPONSES:**  

  * **MUTANT DNA:**
  
    * **Code response:** <br/>200-OK <br />
    * **Input Data Params example:** <br /> 
     `{"dna": ["ACACGA", "CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
    * **Return:** <br/> `true` <br />
    
    
  * **HUMAN DNA:**

     * **Code response:** <br/>403-FORBIDDEN <br />
     * **Input Data Params example:** <br/>`{"dna": ["ACACGA","CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
     * **Return:** <br/> `false` <br />
    
    
  * **DNA TYPE NOT ALLOWED:**
    * **Input Data Params example:** <br/>`{"dna": ["ACxCyA","CAGTGA", "CCA", "2523", true, "TCACTG"]}` <br />
    * **Code response:** 401 UNAUTHORIZED <br />
    * **Return:** <br/> `{ error : "DNA type not allowed." }`<br />

<br/>

* **API - Tech Especifications** 

  * **NODEJS + Express** <br />
  * **HEROKU on cloud computing environment** <br />



* **INSTALL**

  * **Install NODEJS + dependecies**
  `npm install express cors dot env`
  * **Install DEV dependecies** <br/>
   `npm install nodemon -D`
    

    
 
