import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Access.css'; // Import the CSS file

function App() {
  const openGoogleCloudConsole = (mail) => {
    // Open Google Cloud Console using the selected mail provider
    if (mail === 'gmail') {
      // Open Google Cloud Console using Gmail
      window.open('https://console.cloud.google.com/', '_blank');
    } else {
      // Handle other mail providers
      alert(`Opening Google Cloud Console using ${mail} mail`);
    }
  };

  return (
    <Container className="container">
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={6} className="text-center">
          <h1>Gmail Access</h1>
          <div className="mb-4">
           
           <center> <Button variant="primary" className="button" onClick={() => openGoogleCloudConsole('gmail')}>
              Sign in with Gmail
            </Button>
            </center>
            <br></br>
            <p>Don't have OAuth credentials? <a href="https://console.developers.google.com/" target="_blank" rel="noopener noreferrer">Visit Google Developer Console</a></p>
          </div>
          {/* Add more mail providers as needed */}
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          </Col>
      </Row>
    </Container>
  );
}

export default App;
