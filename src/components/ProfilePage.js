import React, { useState, useEffect } from 'react';
import './ProfilePage.css'; // Importing CSS for styling

const ProfilePage = () => {
  // User state with initial data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A passionate developer with a love for coding and open-source.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  // Effect hook for future API fetching (if needed)
  useEffect(() => {
    // Example: Simulate API fetch
    // fetchUserDetails().then(data => setUser(data));
  }, []);

  // Function to update the user's bio
  const updateBio = () => {
    setUser((prevUser) => ({
      ...prevUser,
      bio: 'Updated bio! This was dynamically changed.',
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-bio">{user.bio}</p>
        <button onClick={updateBio} className="update-bio-button">
          Update Bio
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
