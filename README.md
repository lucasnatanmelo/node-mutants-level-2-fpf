**node-mutants-level-2-fpf**
----
  Returns json data about a DNA.

* **URL**

  **https://node-mutants-level-2-fpf.herokuapp.com/mutants**

* **Method:**

  `POST`
  
*  **URL Params**

   **None**

* **Data Params** <br/>
  `</> Text - JSON`


* **Types of Requests and Responses**  

  * **MUTANT DNA**<br />
  
    * **Code response:** 200-OK <br />
    * **Input Data params example:** <br/>`{"dna": ["ACACGA", "CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
    * **Return:** <br/> `true` <br />
 
  * **HUMAN DNA**<br />

    * **Code:** 403-FORBIDDEN <br />
    * **Input Data Params example:** <br/>`{"dna": ["ACACGA", "CCGTGA", "CCGTAA", "TGACCA", "TGACCT", "TCACTG"]}` <br />
    * **Return:** <br/> `false`<br/>
    
  * **DNA TYPE NOT ALLOWED**<br />

    * **Code:** 401 UNAUTHORIZED <br />
    * **Input Data Params example:** <br/>`{"dna": [1, true, "CCxTAA", "TGACCA", "TGACCT", "TCAXTG"]}` <br />
    * **Return:** <br/> `{ error : "DNA type not allowed." }`<br/>
   

    </br>
* **API - Tech Especifications** <br />

  * **NODEJS + Express** <br />
  * **HEROKU on cloud computing environment** <br />
    </br>
* **Instalation**

  * **Install NODEJS + dependecies**<br />
  `npm install express cors dot env`
  * **Install dev dependecies** <br/>
   `npm install nodemon -D`
    

    
 
