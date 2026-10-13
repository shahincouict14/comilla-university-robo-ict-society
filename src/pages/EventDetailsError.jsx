import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const EventDetailsError = () => {
    const error = useRouteError()
    const isNotFound = isRouteErrorResponse(error) && error.status === 404
    return (
        <main className="flex min-h-[60vh] items-center justify-center px-4 py-12">
            <div className="w-full max-w-lg rounded-box border border-base-300 bg-base-200 p-8 text-center">
                <p className="mb-3 text-5xl font-bold text-primary">
                    {isNotFound ? '404' : 'Oops!'}
                </p>

                <h1 className="mb-3 text-2xl font-bold">
                    {isNotFound ? 'Event Not Found' : 'Something Went Wrong'}
                </h1>

                <p className="mb-6 text-base-content/70">
                    {isNotFound
                        ? 'Sorry, we could not find this event.'
                        : 'We could not load this event. Please try again.'}
                </p>

                <Link to="/events" className="btn btn-primary">
                    Back to Events
                </Link>
            </div>
        </main>
    );
};

export default EventDetailsError;