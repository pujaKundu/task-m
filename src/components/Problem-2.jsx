import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
  }, [url]);

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
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleButtonClick}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleButtonClick}
          >
            US Contacts
          </button>
        </div>

        {modalOpen && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Contact List</h5>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleAllContacts}
                  >
                    All contacts
                  </button>
                  <button
                    type="button"
                    className=" btn btn-primary"
                    onClick={handleUSContacts}
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
