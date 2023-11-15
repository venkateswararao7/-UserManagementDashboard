import React, { useState } from 'react';
import { firestore } from ".././firebase";
import { addDoc, collection } from "@firebase/firestore";

import "../styles/InformationForm.css";
const InformationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        creationDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    //firebase collection creation


    const handleSubmit = async (e) => {
        e.preventDefault();
        const ref = collection(firestore, "UserData");
        // Update the creationDate field in formData with the current date and time
        const updatedFormData = {
            ...formData,
            creationDate: await getCurrentDateTime(),
        };

        // You can perform any actions with the updated form data here
        console.log('Updated Form Data:', updatedFormData);

        // Update the state with the new formData
        setFormData(updatedFormData);
        try {
            addDoc(ref, updatedFormData)
            console.log("try block", updatedFormData);
        }
        catch (e) {
            console.log(e);
        }

    };

    const getCurrentDateTime = () => {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString();
        console.log('Formatted DateTime:', formattedDateTime);
        return formattedDateTime;
    };


    return (
        <div className='Information-form'>
            <h2>Information Form</h2>
            <div className='information'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />

                    <p>Current Time and Date: {getCurrentDateTime()}</p>

                    <button type="submit" className='info-submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InformationForm;
