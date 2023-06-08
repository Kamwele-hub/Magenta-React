import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function Search() {
  const pets = useStore(petsStore);

  const handleSearch = (e) => {
    console.log(e.target.value);

    fetch("http://localhost:9292//pets/search_all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        pets.setPetsStore(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search by name or breed"
      onChange={handleSearch}
    ></input>
  );
}

export default Search;
