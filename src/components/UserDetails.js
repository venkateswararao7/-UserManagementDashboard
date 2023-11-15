import React, { useState, useEffect } from "react";
import TopNavBar from "../components/topNavBar";
import "../styles/UserDetails.css";
import { firestore } from './../firebase';
import { collection, getDocs, query, where, startAt, endAt } from "firebase/firestore";

export default function UserDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]);
  const collectionRef = collection(firestore, 'UserData');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const getUsers = async () => {
      let usersQuery;

      if (searchTerm.trim() !== "") {
        // If searchTerm is not empty, create a query to filter by username
        usersQuery = query(collectionRef, where("name", ">=", searchTerm), where("name", "<=", searchTerm + "\uf8ff"));
      } else {
        // If searchTerm is empty, get all users
        usersQuery = collectionRef;
      }

      const data = await getDocs(usersQuery);
      setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [searchTerm, collectionRef]);

  return (
    <>
      <TopNavBar />
      <div className="table-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <br />
      </div>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>userName</th>
              <th className="phone-number">phone</th>
              <th>emailId</th>
              <th>creationDate</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} className="table-row">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td className="phone-number">{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
