import "./css/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setImage] = useState(null); // Inicializa como null

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image); // Agrega el archivo al FormData

    console.log("Datos del producto:", formData);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/products/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Producto registrado con éxito");
      } else {
        console.error("Error al registrar el producto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Guarda el archivo seleccionado como un objeto File
  };

  return (
    <>
      <p className="hola">hola</p>
      <div className="mt-20 mx-auto max-w-5xl p-8 bg-cyan-400 shadow rounded-xl">
        <div className="mx-auto max-w-6xl py-2">
          <h1 className="text-4xl font-extrabold text-white">
            Amministratore dei prodotti
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-5xl font-bold text-color ">
            Registrare prodotti
          </h2>
          <Link to="/products">
            <button className="mt-4 bg-sky-800 hover:bg-purpuple-700 text-white font-bold py-2 px-4 rounded">
              vedere lista prodotti
            </button>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col gap-3 mt-2">
            <label htmlFor="name" className="text-2xl">
              Nome del prodotto:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Nome del prodotto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label htmlFor="price" className="text-2xl">
              Prezzo:
            </label>
            <input
              id="price"
              name="price"
              type="text"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              placeholder="Prezzo del prodotto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              caricare cartella
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400"
              id="image"
              type="file"
              onChange={handleFileChange} // Maneja el cambio del archivo
            />
          </div>
          <button
            type="submit"
            className="mt-10  bg-blue-600 hover:bg-blue-300 text-white font-bold py-4 px-4 rounded"
          >
            Registrare
          </button>
        </form>
      </div>
    </>
  );
}
