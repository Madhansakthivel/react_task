import { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  function fetchRandomUser() {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        setUser(response.results[0]);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="user">
        <img src={user.picture.medium} alt={user.name.first} />
        <div className="user-details">
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.location.city}</p>
        </div>
      </div>
      <button onClick={fetchRandomUser}>Get Random User</button>
    </div>
  );
}

export default App;