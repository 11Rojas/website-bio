# Bios with Friends

Este proyecto es una aplicación web desarrollada con **Next.js 14.2.6** que utiliza la API de Discord para crear y compartir bios con tus amigos.

## Requisitos

- Node.js
- Next.js 14.2.6
- Cuenta de Discord
- Token de una cuenta de Discord

## Configuración

Sigue los siguientes pasos para configurar el proyecto:

1. **Clona el repositorio:**

    ```bash
    git clone asd
    cd tu-repositorio
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura el token de la cuenta de Discord:**

    Necesitarás una cuenta de discord y que este en el servidor con tus amigos

    ```bash
    Token_Account=tu-token-de-bot-aqui
    ```

4. **Agregar los ID de tus amigos:**

    Edita el archivo `Users.ts` y añade los ID de Discord de tus amigos:

    ```typescript
   export const users = [
    { id: "815397981880320010", role: "Administrator" },
    { id: "797728978420891668", role: "Chocano"},
    { id: "1085280364601294870", role: "Administrator" },
    { id: "1075975022230900797", role: "Administrator" },
    { id: "769740562219401287", role: "Member" },
    { id: "1234396006485856317", role: "Member" },
    { id: "853723630218117120", role: "Member" },
    { id: "1150130162369843231", role: "Member" },
    ];
    ```

5. **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    El proyecto estará disponible en `http://localhost:3000`.

## Uso

Una vez que todo esté configurado, podrás acceder a la aplicación, crear bios y compartirlas con tus amigos a través de Discord.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
