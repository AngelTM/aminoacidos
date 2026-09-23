# Memorama de Aminoácidos

Juego de memoria hecho con Angular: encuentra los pares entre el **nombre** de cada aminoácido y la **imagen de su estructura molecular**.

- 3 niveles: Fácil (6 pares), Medio (10) y Difícil (los 20 aminoácidos estándar).
- Contador de movimientos, pares encontrados y tiempo.
- Opción para mostrar u ocultar los códigos de 3 y 1 letra (Trp · W).
- Disponible en español e inglés.

## Requisitos

- [Node.js](https://nodejs.org/) 20.19 o más reciente (también sirve 22.12+ o 24+).
- npm (viene incluido con Node.js).

Para comprobar tu versión:

```bash
node -v
```

## Cómo ejecutarlo

1. Clona el repositorio y entra a la carpeta:

   ```bash
   git clone https://github.com/AngelTM/aminoacidos.git
   cd aminoacidos
   ```

2. Instala las dependencias (solo la primera vez):

   ```bash
   npm install
   ```

3. Inicia el juego:

   ```bash
   npm start
   ```

4. Abre **http://localhost:4200** en tu navegador.

Para detenerlo, presiona `Ctrl + C` en la terminal.

## Otros comandos

| Comando         | Qué hace                                                     |
| --------------- | ------------------------------------------------------------ |
| `npm test`      | Ejecuta las pruebas.                                         |
| `npm run build` | Genera la versión para producción en `dist/memorama/browser`. |
| `npm run deploy`| Publica el juego en Firebase Hosting (requiere `firebase login`). |

## Créditos

Las imágenes de las estructuras moleculares provienen de [PubChem](https://pubchem.ncbi.nlm.nih.gov/) (NCBI).
