import React, { useState, useEffect } from "react";
import axios from "axios";
import { Badge, Button, Card, Modal, Spinner } from "react-bootstrap";
import styles from "./Dashboard.module.css";
function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [tripsCopy, setTripsCopy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState({});
  const [numPersons, setNumPersons] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/places`);
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

  const handleClose = () => {
    setNumPersons(1);
    setShow(false);
  };
  const openModal = (trip) => {
    console.log(trip);
    setSelectedTrip(trip);
    setShow(true);
  };
  // const handleDeleteAllPlcesinDB = () => {
  //   axios
  //     .delete(`http://localhost:5000/api/places`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
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
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => openModal(trip)}
                      >
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
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTrip.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <img
                className="w-100"
                style={{ height: "300px" }}
                src={selectedTrip.imageUrl}
                alt={selectedTrip.name}
              />
            </div>
            <div className="col-md-12 mt-4">
              <p>{selectedTrip.description}</p>
            </div>
            <div className="col-md-12">
              <p>
                <strong>Price:</strong>{" "}
                <span className="text-primary">
                  {" "}
                  ${numPersons * selectedTrip.price}
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Number of Persons</label>
                <input
                  type="number"
                  className="form-control"
                  value={numPersons}
                  onChange={(e) => setNumPersons(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <button className="btn btn-primary" onClick={handleDeleteAllPlcesinDB}>
        Delete All places
      </button> */}
    </div>
  );
}

export default Dashboard;
