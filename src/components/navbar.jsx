import { IconHeader, IconHome, IconMovie, IconSearch, IconSerie } from "./icon";
import { Link, Router } from "react-router-dom";
import style from "../module/navBar.module.css"
import { Moviedetails } from "../../pages/moviedetails";
const routes = [
    {
        path: "/",
        name: "Inicio",
    },
    {
        path: "/movie",
        name: "Peliculas",
    },
    {
        path: "/serie",
        name: "Serie",
    },
];
export function NavBar() {
    return (
        <>

            <nav className={style.navbar}>
                <div className={style.IconHeader}>
                    <a href=""><IconHeader /><span>.co</span></a>
                </div>
                <div className={style.menu}>

                    <ul className={style.navMenu}>
                        {routes.map((route) => (
                            <li className={style.menuItem} key={route.name}><a href={route.path}><i><IconHome /></i>{route.name}</a></li>
                        ))}
                    </ul>

                </div>
                <label className={style.search}>
                    <IconSearch /><input type="search" />
                </label>
            </nav>

        </>
    );
}

