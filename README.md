[![Netlify Status](https://api.netlify.com/api/v1/badges/09d12600-b7a7-433b-be97-c9503b4417a4/deploy-status)](https://app.netlify.com/sites/statuesque-cucurucho-99b8cc/deploys)

# 🚒 FlashMan' - Générateur d'idées de manœuvres pour Sapeurs-Pompiers 🧑‍🚒

## Description
FlashMan' est une application web développée avec Vue.js permettant aux pompiers de générer rapidement des idées de manœuvres d'entraînement adaptées à différents critères. Souvent, les idées des manœuvres flash peut être compliqué, c'est pourquoi cette application facilite la sélection en fonction de :

- **Type de manœuvre** : Incendie, Divers, Secours à personne
- **Durée** : Courte, Moyenne, Longue
- **Nombre de personnes** : 2 / 3 / 4 / 5

L'application récupère ses données depuis une API externe contenant l'ensemble des manœuvres disponibles.

---

## 🚀 Fonctionnalités
- Sélection rapide des critères
- Proposition automatique de manœuvres adaptées
- Affichage des détails de chaque manœuvre
- Interface intuitive et réactive

---

## 🛠️ Installation et Exécution
### Prérequis
- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [Vue CLI](https://cli.vuejs.org/) (optionnel)

### Installation du projet
```bash
git clone https://github.com/thomasglc/flashMan-front.git
cd flashMan-front

npm install
```

### Lancer le projet en mode développement
```bash
npm run dev
```

### Build pour la production
```bash
npm run build
```

---

## 🔗 API
Le projet est connecté à une API qui fournit les manœuvres disponibles.

- **Endpoint principal** : `/api/maneuvers`
- **Filtres possibles** : `type`, `duree`, `nombre_personnes`

Exemple d'appel API :
```bash
GET /api/maneuvers?filters[theme_types][name][$eq]=INC&filters[duration][$eq]=5&filters[people][$eq]=1&populate=%2A
```

---

## 📌 Technologies utilisées
- Vue.js (Composition API)
- Vite
- Tailwind CSS / DaisyUI
- Axios (pour les requêtes API)

---

---

## 📜 Licence
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus d’informations.