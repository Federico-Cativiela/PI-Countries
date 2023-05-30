import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import { useState } from "react";

export default function NavBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setError(""); // Limpiar el mensaje de error al realizar una nueva búsqueda
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search.length) {
      try {
        await dispatch(getCountryByName(search));
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("No se encontró ningún país con ese nombre.");
        } else {
          setError("Ocurrió un error en la búsqueda. Por favor, inténtalo de nuevo más tarde.");
        }
      }
    }
  };

  return (
    <div className={style.topnav}>
      <a className={style.active} href="/home">
        Home
      </a>
      <a href="/about">Acerca de</a>
      <a href="/form">Crear</a>
      <div className={style.searchContainer}>
        <form>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={search}
            autoComplete="on"
            onChange={handleSearch}
          />
          <button type="submit" onClick={handleSubmit}>
            Buscar
          </button>
        </form>
        {error && <p className={style.error}>{error}</p>} {/* Mostrar el mensaje de error si existe */}
      </div>
    </div>
  );
}



