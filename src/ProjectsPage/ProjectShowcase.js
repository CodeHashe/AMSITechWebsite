import React from 'react';

function ProjectShowcase({ name, image, description }) {
  const styles = {
    projectCard: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '20px auto',
      width: '320px',
      textAlign: 'center',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      cursor: 'pointer',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      },
    },
    projectImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '15px',
    },
    projectTitle: {
      fontSize: '22px',
      fontFamily: 'MagistralBlack, sans-serif',
      fontWeight: 'normal',
      marginBottom: '12px',
      color: '#333',
    },
    projectDescription: {
      fontSize: '16px',
      fontFamily: 'PoppinsMedium, sans-serif',
      color: '#666',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.projectCard}>
      <img src={image} alt={name} style={styles.projectImage} />
      <h3 style={styles.projectTitle}>{name}</h3>
      <p style={styles.projectDescription}>{description}</p>
    </div>
  );
}

export default ProjectShowcase;
