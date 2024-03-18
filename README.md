![img.png](logo.png)
## Start Usage

### Dev environment

- Install dependencies

   ```sh 
  npm install
    ````

- Run [Miseenscreen API](https://github.com/WhtsPoint/miseenscreen-api) dev server
- Run Dev server
   ```sh 
  npm run dev
    ```

### Prod environment

- Run [Miseenscreen API](https://github.com/WhtsPoint/miseenscreen-api) prod server

- Run docker container

    ```sh 
  docker compose up -d 
    ```


### Environment setup


|              Variable              |                               Description                                |                                            Default Value                                             |
|:----------------------------------:|:------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
| `NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY` |                        Public key of ReCaptcha v2                        |                                                  -                                                   |
|             `HOST_URL`             |          Url of host, where you run app (need for metadataBase)          |                        http://localhost:3000 (Prod: http://miseenscreen.com/)                        |
|       `NEXT_PUBLIC_API_URL`        | Url of [Miseenscreen API](https://github.com/WhtsPoint/miseenscreen-api) |              http://localhost:5500/api/v0/ (Prod: http://api.miseenscreen.com/api/v0/)               |