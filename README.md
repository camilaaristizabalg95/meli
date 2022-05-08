# Desafío MeLi 👩🏽‍💻

El desafío era desarollar una aplicacioón con tres componentes:

- Caja de búsqueda
- Resultados de búsquedas
- Detalle del producto

Cada una de las vistas mencionadas anteriormente debían ser navegables y dos de ellas (resultados de bùsqueda y detalle del producto) debían enviar peticiones al server para consultar la API de mercado libre con el fin de mostrar los resultados correspondientes.

## Challenge Approach 🛬
El primer paso fue conocer un poco mas el desafío. Para ello inicialmente hice un mapeo de los componentes gráficos lo cual consitió "desmenuzar" los diseños en componentes que pudiesen ser reusables. El resultado del <strong>mapeo de componentes gráficos</strong> fue el siguiente:

![ProjectComponentMaping](assets/graphic-component-maping.gif)
![ProjectComponentMaping](assets/graphic-component-maping.png)

La siguiente etapa fue identificar los <strong> servicios y rutas</strong> tanto del cliente como del servidor.

### Servicios del Cliente

Los servicios del cliente se separaron por funcionalidad. Estos fueron los identificados:

![ClientServices](assets/client-services-1.png)
![ClientServices](assets/client-services-2.png)
![ClientServices](assets/client-services-3.png)

### Servicios y Rutas del Server
Los servicios del server se separaron por responsabilidad. Estos fueron los identificados:

![ServerServices](assets/server-service-1.png)
![ServerServices](assets/server-service-2.png)
![ServerServices](assets/server-service-3.png)

Después de esto planteé la estructura del proyecto (que cambioó en el proceso de desarrollo). A grandes rasgos el proyecto se divide en dos sub-proyectos `meli-items-finder`, que sería el proyecto del cliente y `meli-server`, el proyecto del servidor. Esta es la última actualizacioón de la estructura del proyecto: 

![ProjetStructure](assets/project-structure.gif)
![ProjetStructure](assets/project-structure-client.png)
![ProjetStructure](assets/project-structure-server.png)

La siguiente tabla explica los diferentes recursos del cliente:

|Nombre del Recurso          |Naturaleza |Explicación                                                                                                                     |
|----------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------|
|ItemsModule                 |Module     |Módulo de funcionalidad de items. Contiene los componentes y servicios relacionados y solamente relacionados con los items      |
|ItemsRoutingModule          |Module     |Módulo de ruteo de items. Se encarga de cargar los componentes necesarions para las diferentes ruas de la funcionalidad de items|
|ItemResultComponent         |Component  |Sección principal de los resultados de la búsqueda de items                                                                     |
|ItemDescriptionComponent    |Component  |Sección principal de la descripción extendida de un item                                                                        |
|ItemCardComponent           |Component  |Información del item en forma de card                                                                                           |
|ItemPurchaseInfoComponent   |Component  |Caja de información de purchase del item                                                                                        |
|ItemExtInfoComponent        |Component  |Caja de información extendida del item                                                                                          |
|Preloader Service           |Service    |Contiene todos los métodos y las propiedades relacionados con el preloader del aplicativo                                       |
|HttpService                 |Service    |Contiene los métodos necesarios para realizar peticiones http                                                                   |
|BreadcrumbService           |Service    |Contiene todos los métodos y propiedades relacionados para el manejo de los breadcrumbs del aplicativo                          |
|ItemsService                |Service    |Contiene todos los métodos y propiedades relacionados con el manejo de los items                                                |
|HttpInterceptor             |Interceptor|Servicio que intercepta todas las peticiones http del cliente para hacer manejo de errores y skeletons                          |
|BreadcrumbComponent         |Component  |Navegación tipo breadcrumb de la aplicación                                                                                     |
|PageNotFoundComponent       |Component  |Página de not found en caso de que alguna petición no haya encontrado resultados                                                |
|RectangularSkeletonComponent|Component  |Skeletons utilizados para dar loa sensación de carga mientras la petición http se resuelve                                      |
|SearchBarComponent          |Component  |Componente de búsqueda del aplicativo                                                                                           |
|Meli Theme                  |Style      |Paleta de colores y tipografía de MeLi                                                                                          |
|BreadcrumbModel             |Interface  |Interfaz de breadcrumbs                                                                                                         |
|CustomErrorModel            |Interface  |Interfaz de error model para el manejo de errores                                                                               |
|ItemSummaryModel            |Interface  |Interfaz de item                                                                                                                |
|SignatureModel              |Interface  |Interfaz de firma del autor                                                                                                     |
|ItemResultModel             |Interface  |Interfaz de resultado de busqueda de items por string                                                                           |
|RequestModel                |Interface  |Interfaz de peticiones http                                                                                                     |
|Function Utils              |Utilities  |Funciones de utilidad                                                                                                           |


La siguiente tabla explica los diferentes recursos del servidor:

Doing an analysis of the components and the requirements I decided to use a set of Angular Material components and functionalities:
![Tools](src/readme-assets/tools1.png)
![Tools](src/readme-assets/tools2.png)
![Tools](src/readme-assets/tools3.png)
![Tools](src/readme-assets/tools4.png)

This is a summary of the used tools:
- [Theming](https://material.angular.io/guide/theming)
- [Contracts Filter - Date Range](https://material.angular.io/components/datepicker/overview)
- [Contracts Filter - Type, Status](https://material.angular.io/components/select/overview)
- [Contracts Filter - Name](https://material.angular.io/components/input/overview)
- [Search Bar](https://material.angular.io/components/input/overview)
- [Tools Buttons - Filters, New Hire](https://material.angular.io/components/button/overview)
- [Contracts Actions](https://material.angular.io/components/menu/overview)
- [Support Button](https://material.angular.io/components/button/overview)
- [Icons](https://material.angular.io/components/icon/overview)
- [Nav Bar - Desktop](https://material.angular.io/components/list/overview)
- [Nav Bar - Mobile](https://material.angular.io/components/expansion/overview)
- [Contracts Info - Desktop](https://material.angular.io/components/table/overview)
- [Contracts Info - Mobile](https://material.angular.io/components/card/overview)

# Hands to Work 🙌🏽

## Development server

After cloning the git repository run `ng serve` on your terminal for a dev server (remember to run it within angular project's folder 😅). Navigate to `http://localhost:4200/`. The app will, On Top platform should be on your screen now!

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Desktop Performance
This is how the UI should behave on desktop

![DesktopBehavior](src/readme-assets/desktop-behavior.gif)

## Mobile Performance
This is how the UI should behave on mobile

![DesktopBehavior](src/readme-assets/mobile-behavior.gif)

## Tasks Performed by the App
- Supports resizing
- Supports Pagination (Weird behavior with filtering)
- Supports Filtering (Weird behavior with pagination)
- Supports Contractor Deletion within the same page
- Supports Contractor Edition within the same page
- Supports Signing (Just consoles log something)
- Supports View Summary (Just consoles log something)
- Filters can be cleared

# Some `<aside></aside>` Notes
On this section will be expoused the recommended improvements, some pendings and some known bugs (If some item is marked with ✅ it means it is resolved)

## Improvements ✨
- Paginator component ✅
- Dark mode
- Accesibility ✅
- Photo on contractor card ✅
- Labels if contractor item that matches the filter is not found ✅
- Photos placeholders ✅

## Pendings ❗️
- Filters fields validations
- Form Control custome Value Accesors

## Known Bugs 🐞
- Pagination should hiden in some cases
- Paginator filter not working well with other filters applied