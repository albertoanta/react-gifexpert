// import { heroes } from "./data/heroes";
import heroes, {owners} from "../data/heroes";
console.log(owners);

console.log(heroes);

export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroeById(5));

export const getHeroesbyOwner = (owner)  => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesbyOwner('DC'));
