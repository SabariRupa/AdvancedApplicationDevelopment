import React, { useState } from 'react';
import './Profile.css';
import Sidebar from './Sidebar';

function Profile() {
  const initialProfileData = {
    fullName: 'Sabari Rupa M',
    email: 'sabari@gmail.com',
    phoneNumber: '9874563210',
    adharNumber: '9874 5632 1254',
    panNumber: 'OCHU7854IO7',
    Gender: 'Female',
    dob: '2004-02-24',
    amount: '5,00,000',
    address: '9/19,Nehru Street,Coimbatore',
  };

  const [profileData, setProfileData] = useState({ ...initialProfileData });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    setIsEditing(false);
    setProfileData({ ...initialProfileData });
  };

  return (
    <div className="prof" style={{ display: 'flex' }}>
    <div id="sideapp">
      <Sidebar />
      <h2 id="useprof">MY PROFILE</h2>
      <div className="profile-container" style={{ flex: 1, padding: '20px' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/256/9159/9159775.png"
          alt="Profile"
          className="profile-image"
        />
        <h5>{initialProfileData.fullName}</h5>
        <div className="profile-fields">
          {Object.entries(profileData).map(([key, value]) => (
            <div className="profile-field" key={key}>
              <label>{key.toUpperCase()}</label>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{value}</div>
              )}
            </div>
          ))}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <button className="update-btn" onClick={handleUpdateProfile}>
              Updated
            </button>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Update
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;