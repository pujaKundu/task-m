import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [data, setData] = useState([]);
  const [usData, setUsData] = useState(false);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data.results);
        setData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = () => {
    if (usData === true) {
      return data.filter((el) => el.country.name === "United States");
    } else {
      return data;
    }
  };

  const handleAllContacts = () => {
    setUsData(false);
  };
  const handleUSContacts = () => {
    setUsData(true);
  };
  const handleButtonClick = () => {
    setModalAOpen(true);
  };

  const handleCloseModal = () => {
    setModalAOpen(false);
  };
  const handleUSButtonClick = () => {
    setModalBOpen(true);
  };

  const handleUSCloseModal = () => {
    setModalBOpen(false);
  };
  const handleDetailButtonClick = () => {
    setModalCOpen(true);
  };

  const handleDetailCloseModal = () => {
    setModalCOpen(false);
  };
  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg"
            type="button"
            onClick={handleButtonClick}
            style={{ backgroundColor: "#46139F", color: "#fff" }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg "
            type="button"
            onClick={handleUSButtonClick}
            style={{ backgroundColor: "#ff7f50", color: "#fff" }}
          >
            US Contacts
          </button>
        </div>

        {modalAOpen && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">All Contact List</h5>
                  <button
                    type="button"
                    className="btn "
                    style={{ backgroundColor: "#46139F", color: "#fff" }}
                    onClick={handleAllContacts}
                  >
                    All contacts
                  </button>
                  <button
                    type="button"
                    className=" btn btn-primary"
                    onClick={handleUSContacts}
                    style={{ backgroundColor: "#ff7f50", color: "#fff" }}
                  >
                    US contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
                <div className="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData().map((el) => (
                        <tr key={el.id} onClick={handleDetailButtonClick}>
                          <td>{el.id}</td>
                          <td>{el.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        {modalBOpen && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">US Contact List </h5>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleAllContacts}
                    style={{ backgroundColor: "#46139F", color: "#fff" }}
                  >
                    All contacts
                  </button>
                  <button
                    type="button"
                    className=" btn btn-primary"
                    onClick={handleUSContacts}
                    style={{ backgroundColor: "#ff7f50", color: "#fff" }}
                  >
                    US contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleUSCloseModal}
                  >
                    Close
                  </button>
                </div>
                <div className="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData().map((el) => (
                        <tr
                          key={el.id}
                          onClick={handleDetailButtonClick}
                          style={{ cursor: "pointer", padding: "5px" }}
                        >
                          <td>{el.id}</td>
                          <td>{el.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        {modalCOpen && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Contact Details </h5>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDetailCloseModal}
                  >
                    Close
                  </button>
                </div>
                <div className="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Phone</th>
                        <th>Country ID</th>
                        <th>Country Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData().map((el) => (
                        <tr key={el.id}>
                          <td>{el.id}</td>
                          <td>{el.phone}</td>
                          <td>{el.country.id}</td>
                          <td>{el.country.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
