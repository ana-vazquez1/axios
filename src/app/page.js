'use client'
import axios from "axios";

export default function Home() {
  const getUsers = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await axios.get(url);
      console.log(response.data)
    } catch (error){
      console.error(error);
    }
  };

  const createPost = async () => {
    try {
      const url= "https://jsonplaceholder.typicode.com/posts";
      const body = {
        id: 1,
        title: 'TinCode.es',
        body: 'HTTP tarea',
        userId: 1
      }
      const response = await axios.post(url, body);
      console.log(response);
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>HTTP - Axios</h1>
      <button onClick={getUsers}>Obtener Usuarios</button>
      <button onClick={createPost}>Crear Publicación</button>
    </div>
  )
}
