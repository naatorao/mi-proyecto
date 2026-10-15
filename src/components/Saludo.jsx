import './Saludo.css';

function Saludo() {
  const alumnosFavoritos = ["Alumno1", "Alumno2", "Alumno3", "Alumno4", "Alumno5"];

  return (
    <>
      <h1 className="SaludoComponente">
        Hola, bienvenido a mi proyecto de React!
      </h1>
      <h2>Lista de mis alumnos favoritos:</h2>
      <ol>
        {alumnosFavoritos.map((alumno) => (
          <li key={alumno}>{alumno}</li>
        ))}
      </ol>
    </>
  );
}

export default Saludo;