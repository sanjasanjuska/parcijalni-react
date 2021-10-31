import GitHubRepos, { UserDetails } from "./components/GitHubRepos";
import GitHubUser, { UserForm } from "./components/GitHubUser";

function App() {
  return (
    <div>
      <UserForm />
      <GitHubUser />
      <UserDetails />
      <GitHubRepos />
    </div>
  );
}

export default App;
