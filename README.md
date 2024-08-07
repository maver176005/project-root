# Проект Root

## Установка и запуск проекта

1. Клонировать репозиторий:
    ```bash
    git clone https://github.com/maver176005/project-root.git
    cd project-root
    ```

2. Настроить базу данных:
   Создайте базу данных PostgreSQL с именем `carsdb` и пользователя с учетными данными, указанными в файле `.env` (или измените файл `.env`, чтобы он соответствовал вашей настройке).

   Вы можете создать базу данных и пользователя с помощью следующих SQL-команд:
    ```sql
    CREATE DATABASE carsdb;
    CREATE USER admin WITH ENCRYPTED PASSWORD '12345';
    GRANT ALL PRIVILEGES ON DATABASE carsdb TO admin;
    ```

3. Настроить переменные окружения:
   Создайте файл `.env` в каталоге `backend` со следующим содержимым:
    ```plaintext
    DB_HOST=localhost
    DB_USER=admin
    DB_PASSWORD=12345
    DB_NAME=carsdb
    DB_PORT=5432
    PORT=8085
    ```

4. Установить зависимости для бэкенда:
    ```bash
    cd backend
    npm install
    ```

5. Установить зависимости для фронтенда:
    ```bash
    cd ../frontend
    npm install
    ```

6. Инициализировать схему базы данных:
    ```bash
    cd backend
    node scripts/initDb.js
    ```

7. Запустить бэкенд сервер:
    ```bash
    cd backend
    npm start
    ```

8. Запустить фронтенд сервер:
    ```bash
    cd ../frontend
    npm run serve
    ```

9. Доступ к приложению:
   Откройте браузер и перейдите по адресу http://localhost:8080.

10. Использование приложения:
    - Перейдите на страницу Магазины (http://localhost:8080/stores), чтобы добавить новые магазины.
    - Перейдите на страницу Автомобили (http://localhost:8080/cars), чтобы добавить новые автомобили и назначить их существующим магазинам.
