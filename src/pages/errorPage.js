import { useRouteError } from "react-router-dom";
import '../index.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-red-600 text-[40px]">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}