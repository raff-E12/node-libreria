## Libreria Node: Avvio del Progetto  

1. Inizializza il progetto con `npm init -y`.  
2. Installa Express con `npm i express`.  
3. Avvia il server con `npm run watch` per aggiornamenti automatici.  
4. Alla partenza, un messaggio in console confermerà l'attivazione.  
5. Crea una cartella "controllers" per gestire la logica CRUD (Index, Show, Store, Update, Destroy). Il router smista le richieste, mentre il controller prepara e invia le risposte.  
6. Usa Postman per testare le API:  
   - **GET** `http://127.0.0.1:3000/books` → lista libri (Index).  
   - **GET** `http://127.0.0.1:3000/books/:id` → singolo libro (Show).  
   - **POST** `http://127.0.0.1:3000/books` → crea un libro (Store).  
   - **PUT** `http://127.0.0.1:3000/books/:id` → modifica un libro (Update).  
   - **DELETE** `http://127.0.0.1:3000/books/:id` → elimina un libro (Destroy).