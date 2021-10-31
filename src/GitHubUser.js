import { useState, useEffect } from "react";

export function UserForm() {
    const [state, setState] = useState({ text: '' })

    const handleOnChange = (event) => {
        setState({ text: event.target.value });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>GitHub username</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={state.text} onChange={handleOnChange} />
                <button>Go!</button>
            </form>
        </div>
    )
}

export default function GitHubUser() {
    const [json, setJson] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/sanjasanjuska')
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
            {json.map(item =>
                <div key={item.login.id}>
                    {item.login.avatar_url}
                    {item.login.name}
                    {item.login.location}
                    {item.login.bio}</div>)}
        </div>
    )
}