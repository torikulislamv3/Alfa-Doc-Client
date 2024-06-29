import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-center text-5xl">Oops!</h1>
      <img className="text-center size-[500px]" src="https://i.postimg.cc/7hvZfppX/404.jpg" alt="opps.." />
      <button className="btn btn-ghost text-center">go to <Link to='/' className="text-4xl text-red-400">Home</Link></button>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}