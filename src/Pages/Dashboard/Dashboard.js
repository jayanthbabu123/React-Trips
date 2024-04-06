import React, { useState, useEffect } from "react";
import axios from "axios";
import { Badge, Button, Card, Spinner } from "react-bootstrap";
import styles from "./Dashboard.module.css";
function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [tripsCopy, setTripsCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/places`
        );
        setTrips(response.data);
        setTripsCopy(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrips();
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    const filteredTrips = tripsCopy.filter((value) => {
      return (
        value.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.city.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
    });
    setTrips(filteredTrips);
    setSearchText(event.target.value);
  };
  
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h3 className="text-center text-primary my-4">
            Book trips to amazing places ({tripsCopy.length})
          </h3>
        </div>
        <div className="col-md-4">
          <input
            className="form-control mt-4"
            type="text"
            placeholder="Search Places"
            aria-label="Search"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="container-fluid">
        {isLoading && (
          <div className="row text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {searchText.length > 0 && (
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h5 className="text-center text-primary my-4">
                {trips.length} results found
              </h5>
            </div>
            <div className="col-md-4"></div>
          </div>
        )}
        <div className="row">
          {trips.map((trip) => (
            <div className="col-sm-3 mb-3" key={trip._id}>
              <Card>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src={trip.imageUrl}
                />
                <Card.Body>
                  <Card.Title>{trip.name}</Card.Title>
                  <Card.Text
                    style={{
                      minHeight: "90px",
                      maxHeight: "90px",
                      overflow: "auto",
                    }}
                  >
                    {trip.description}
                  </Card.Text>
                  <div className="row">
                    <div className="col-md-6">
                      <Badge bg="success">{trip.city}</Badge>
                    </div>
                    <div className="col-md-6 text-end">
                      <Button variant="primary" size="sm">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {trips.length === 0 && searchText.length > 0 && (
          <div className="row">
            <div className="col-md-12">
              <p>No Search Results Found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
