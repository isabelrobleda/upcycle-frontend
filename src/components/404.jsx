import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-800">¡Oops!</h1>
      <p className="text-2xl mt-4 text-slate-400">Lo sentimos. Por el momento no estamos aceptando muebles para nuestro catálogo. <br /> Les informaremos tan pronto se abran nuevos espacios. Gracias.</p>
      <Link to="https://upcyclemex.com/" className="border border-slate-400 mt-2 text-slate-400 py-2 px-10 rounded-md text-sm hover:border-orange-300 hover:text-white hover:bg-orange-300">
        Ir a Home
      </Link>
    </div>
  );
}
