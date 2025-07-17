import React from 'react'
import profileImage from '../../assets/profile-image-mridul-srivastava.jpeg'

function ResumeProfileImage() {
  return (
    <div className="profile-image-container">
      <img
        src={profileImage}
        loading="lazy"
        alt="Mridul Srivastava (Technical Architect)"
        className="profile-image"
      />

      <style jsx="true">{`
        .profile-image-container {
          width: 120px;
          height: 80px;
          display: flex;
          justify-content: flex-end;
        }
        .profile-image {
          border-radius: 20%;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}

export default ResumeProfileImage
