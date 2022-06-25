Link: 

**node-mutants-level-2-fpf**
----
  Returns json data about a single user.

* **URL**

  (https://node-mutants-level-2-fpf.herokuapp.com/mutants)

* **Method:**

  `POST`
  
*  **URL Params**

   **None**

* **Data Params**
  `</> Text - JSON`


* **Types Responses**  

  * **MUTANT DNA**<br />
  
  * **Code respoonse:** 200-OK <br />
    **Input Data Params example:** `{"dna": ["ACACGA", "CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
    **Return: ** `true` <br />
 
  * **HUMAN DNA**<br />

  * **Code:** 403-FORBIDDEN <br />
    **Input Data Params example:** `{"dna": ["ACACGA", "CCGTGA", "CCGTAA", "TGACCA", "TGACCT", "TCACTG"]}` <br />
    **Return: ** `false` <br />
    
  * **DNA TYPE NOT ALLOWED**<br />

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "DNA type not allowed." }`<br />

* **API - Tech Especifications** <br />

  * **Used NODEJS + Express** <br />
  * **Used HEROKU on cloud computing environment** <br />

* **Instalation**

  * **Install NODEJS + dependecies**<br />
  `npm install express cors dot env`
  * **Install dev dependecies**
   `npm install nodemon -D`
    

    
 
