import { useEffect, useState } from "react";
import { githubProfileData } from "./githubProfileData";
const GithubProfile = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("VTU9730");
  const [userData, setUserData] = useState(null);

  const handleClick = () => {
    setName(userName);
    setUserName("");
  };
  console.log(`https://api.github.com/users/${name}`);
  const fetchProfileData = async () => {
    setName(userName);
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {}, []);
  return (
    <div className="github-profile-container">
      <h1>Check your Profile</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <button
          onClick={() => {
            fetchProfileData();
          }}
        >
          search
        </button>
      </div>
      {userData && (
        <div>
          <article>
            <img
              src={userData.avatar_url}
              alt={userData.avatar_url}
              width="150"
              heigth="150"
            />
          </article>
          <section className="profile-section">
            <p>Name: {userData.name}</p>
            <p>Company: {userData.company}</p>
            <p>Place: {userData.location}</p>
            <p>Repos: {userData.public_repos}</p>
            <p>Open to Work: {userData.hireable ? "Yes" : "No"}</p>
          </section>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
