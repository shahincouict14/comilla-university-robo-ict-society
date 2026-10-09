import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <div className="p-10 text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="my-4">Page ta khuje paoa jay nai.</p>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;