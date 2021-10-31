import { useState, useEffect } from "react";

export function UserDetails({ id, name }) {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
        </div>

    );
}

export default function GitHubRepos() {
    const [json, setJson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/sanjasanjuska/repos')
            .then(response => response.json())
            .then(json => setJson(json))
            .catch(error => setError(error));
    }, []);

    if (error !== null) {
        return <div>Error!</div>
    }

    if (json === null) {
        return <div>Wait...</div>;
    }

    return (
        <div>
            <h1>Repositories:</h1>
            {json.map(item =>
                <div>
                    {item.login.id}
                    {item.login.name}
                </div>)}
        </div>
    )
}