import { ErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as ErrorResponse
    console.error(error);

    if (error instanceof Error) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.message || error.stack}</i>
                </p>
            </div>
        );
    }

    return (
        <div id="error-page">
            <h1>{error.status} </h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.data}</p>
        </div>
    );
}
