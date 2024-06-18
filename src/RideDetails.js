import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import mapImage from './assets/map.jpg'; // Ensure you have a map image in the assets folder

const RideDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  color: #333;
`;

const MapImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const RideDetails = () => {
  const location = useLocation();
  const { name, pickup, destination } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ride confirmed!'); // Handle ride confirmation here
  };

  // Placeholder price calculation
  const price = 50;

  return (
    <RideDetailsContainer>
      <Header>Ride Details</Header>
      <MapImage src={mapImage} alt="Map" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          readOnly
        />
        <Input
          type="text"
          name="pickup"
          value={pickup}
          readOnly
        />
        <Input
          type="text"
          name="destination"
          value={destination}
          readOnly
        />
        <Input
          type="text"
          name="price"
          value={`$${price}`}
          readOnly
        />
        <Button type="submit">Confirm Ride</Button>
      </Form>
    </RideDetailsContainer>
  );
}

export default RideDetails;
