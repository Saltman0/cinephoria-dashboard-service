# Cinéphoria Dashboard service
___

Microservice dédié au dashboard.

## Installation

### Logiciels
- [Docker](https://www.docker.com/) et [Docker compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org)
- [Deno](https://deno.com/)

### Librairies

Lancez la commande suivante pour générer les librairies nécessaires au bon fonctionnement du microservice :

```bash
  deno install
```

### Variables d'environnement

Vous aurez besoin de générer un fichier `.env.local` avec des différentes variables d'environnement pour mettre en
marche le microservice **Cinéphoria Dashboard**.
Un fichier `.env` est disponible dans le projet.

## Déploiement en local

Lancez la commande suivante pour lancer le microservice **Cinéphoria Dashboard** :

```bash
docker compose up -d --build
```

Le microservice est désormais disponible en local.