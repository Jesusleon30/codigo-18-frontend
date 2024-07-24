import "./css/index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsEditare() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [image, setImage] = useState(null); // Para almacenar la nueva imagen
  const [currentImage, setCurrentImage] = useState(""); // Para almacenar la URL de la imagen actual

  const getData = async () => {
    const data = await fetch(`http://127.0.0.1:8000/api/v1/products/${id}`);
    const response = await data.json();
    setNombre(response.nombre);
    setPrecio(response.precio);
    //  setCurrentImage(response.image); // Establece la URL de la imagen actual
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("precio", precio);
    if (image) formData.append("image", image);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/products/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Guarda el archivo seleccionado como un objeto File
  };

  return (
    <>

      <main className="mt-10 mx-auto max-w-5xl p-8 bg-orange-400 shadow rounded-2xl">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-5xl font-bold text-black">Editare 🖋</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col gap-3 mt-2">
            <label htmlFor="nombre" className="text-1xl">
              Nome del Prodotto:
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nome del prodotto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label htmlFor="precio" className="text-1xl">
              Prezzo:
            </label>
            <input
              id="precio"
              name="precio"
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Prezzo del prodotto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              caricare immagine
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              type="file"
              onChange={handleFileChange} // Maneja el cambio del archivo
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Aggiornare
          </button>
        </form>
      </main>
    </>
  );
}
