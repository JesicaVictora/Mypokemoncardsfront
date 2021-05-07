# MyPokemonCards

http://mypokemoncards.jesicavictora.es/

Este proyecto esta en estado muy beta.
Se trata de una web que utiliza una api externa para listar todas las cartas pokemon existentes y sus precios de venta correspondientes.

El objetivo final de esta aplicacion es poder tasar tu colección y tener un registro de las cartas que tienes.

#Completado

Seccion cards, donde se listan todas las cartas.
Incluye un buscador para poder buscar por nombre la carta deseada.
Al pulsar sobre una carta abre una ventana modal con la informacion y precios de ella.

Seccion Sets, donde se listan todos los sets de cartas.
Al pulsar sobre un set te muestra un listado con todas las cartas que lo componen.

#En desarrollo

//Login

//Perfil de Usuario

//Colección del usuario

//Estadisticas de su colección

//LogOut

Para su correcto funcionamiento, se debe de incluir el archivo .env con los siguientes datos :

```REACT_APP_BACK_URL=https://api.pokemontcg.io/
REACT_APP_API_KEY= //Aqui va la Key de pokemontcg.io//
REACT_APP_BACK_URL2= //La url de nuestro backend que manejara los usuarios y sus perfiles 
```
