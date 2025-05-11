Andrzej Insadowski Web Wroclaw

Lekka aplikacja SPA stworzona w React + Vite do przeglądania produktów i zarządzania koszykiem zakupów.

Założenia i podejście

Dane produktów z data/products.json, standaryzowane typem ProductType w TypeScript.

Routing za pomocą React Router z właściwym basename dla ścieżki aplikacji.

Zarządzanie stanem koszyka (cart) w React useState, operacje dodawania, usuwania i aktualizacji ilości (metody some, reduce, filter).

Finalizacja zamówienia: zapis koszyka do localStorage i przekierowanie na statyczny confirmation.html (public), z prostym skryptem do renderowania podsumowania.

Uruchomienie

Sklonuj repozytorium:

git clone https://github.com/soulting/Andrzej_Insadowski_Web_Wroclaw.git
cd Andrzej_Insadowski_Web_Wroclaw

Zainstaluj zależności:

npm install

Uruchom środowisko deweloperskie:

npm run dev

Otwórz w przeglądarce:

http://localhost:5173/
