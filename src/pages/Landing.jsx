
import { useEffect, useState } from "react";
import axios from "axios";
export default function Landing() {
    let dtToday = new Date();

    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    let maxDate = year + '-' + month + '-' + day;

    const [formData, setFormData] = useState({
        customerName: '',
        noOfPeople: '',
        phoneNumber: '',
        visitDate: ''
    })
    const [formError, setFormError] = useState({
        customerName: '',
        noOfPeople: '',
        phoneNumber: '',
        visitDate: ''
    })
    const [formvalid, setFormvalid] = useState({
        customerName: false,
        noOfPeople: false,
        phoneNumber: false,
        visitDate: false
    })
    const messages = {
        REQUIRED_VALIDATION: "This field is required",
        ALPHABATES_VALIDATION: "This field should contain only alphabates",
        DIGITS_VALIDATION: "This field should contain only digits",
        MINIMUM_LENGTH: "This field should contain oatleast 3 characters",
        PEOPLE_RANGE_VALIDATION: "Nnummber of people should be between 1- 4",
        PHONE_NUMBER_VALIDATION: "Phone number must contain 10 digits only"
    }
    const handelChange = ((event) => {
        const { name, value } = event.currentTarget;
        // console.log(name, value)
        setFormData({ ...formData, [name]: value })
        switch (name) {
            case "customerName":
                if (value.length < 1) {
                    console.log("Inside condition")
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.REQUIRED_VALIDATION })
                }
                else if (!value.match(/^[A-Z]+$/gi)) {
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.ALPHABATES_VALIDATION })
                }
                else if (value.length < 3) {
                    console.log("Inside condition")
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.MINIMUM_LENGTH })
                }
                else {
                    setFormvalid({ ...formvalid, [name]: true })
                    setFormError({ ...formError, [name]: "" })

                }
                break;
            case "noOfPeople":
                if (value.length < 1) {
                    console.log("Inside condition")
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.REQUIRED_VALIDATION })
                }
                else if (!value.match(/^[0-9]+$/g)) {
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.DIGITS_VALIDATION })
                }
                else if (value < 1 || value > 4) {
                    console.log("Inside condition")
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.PEOPLE_RANGE_VALIDATION })
                }
                else {
                    setFormvalid({ ...formvalid, [name]: true })
                    setFormError({ ...formError, [name]: "" })

                }
                break;
            case "phoneNumber":
                if (value.length < 1) {
                    console.log("Inside condition")
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.REQUIRED_VALIDATION })
                }
                else if (!value.match(/^[0-9]+$/g)) {
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.DIGITS_VALIDATION })
                }
                else if (value.length < 10 || value.length > 10) {
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.PHONE_NUMBER_VALIDATION })
                }
                else {
                    setFormvalid({ ...formvalid, [name]: true })
                    setFormError({ ...formError, [name]: "" })

                }
                break;
            case "visitDate":
                if (value.length < 1) {
                    console.log("Inside condition")
                    setFormvalid({ ...formvalid, [name]: false })
                    setFormError({ ...formError, [name]: messages.REQUIRED_VALIDATION })
                }

                else {
                    setFormvalid({ ...formvalid, [name]: true })
                    setFormError({ ...formError, [name]: "" })

                }
                break;
        }
    })
    const submitForm = ((e) => {
        e.preventDefault();
        console.log("From Useeffect", formData)
        bookingSubmit()
    })
    const bookingSubmit = (() => {
        axios.post('http://localhost:4000/bookings', formData)
            .then(res => {
                console.log("response", res)
            })
            .catch(err => {
                console.log("error", err)
            })
    })
    useEffect(() => {

    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label className="form-label">Customer Name</label>
                            <input onChange={handelChange} type="text" className="form-control" id="" name="customerName" placeholder="Customer Name" />
                            {
                                !formvalid.customerName &&
                                <p className="text-danger small fst-italic">{formError.customerName}</p>
                            }
                            {
                                formData.customerName
                            }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">No of people</label>
                            <input onChange={handelChange} min={1} step={1} max={4} type="number" className="form-control" id="" name="noOfPeople" placeholder="Ex. 0" />
                            {
                                !formvalid.noOfPeople &&
                                <p className="text-danger small fst-italic">{formError.noOfPeople}</p>
                            }
                            {
                                formData.noOfPeople
                            }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input onChange={handelChange} type="number" className="form-control" id="" name="phoneNumber" placeholder="Ex. 1234567890" />
                            {
                                !formvalid.phoneNumber &&
                                <p className="text-danger small fst-italic">{formError.phoneNumber}</p>
                            }
                            {
                                formData.phoneNumber
                            }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of visit</label>
                            <input onChange={handelChange} type="date" min={maxDate} className="form-control" id="" name="visitDate" placeholder="Ex. 1234567890" />
                            {
                                !formvalid.visitDate &&
                                <p className="text-danger small fst-italic">{formError.visitDate}</p>
                            }
                            {
                                formData.visitDate
                            }
                        </div>
                        <div className="mb-3">
                            <button disabled={(!formvalid.customerName || !formvalid.noOfPeople || !formvalid.phoneNumber || !formvalid.visitDate) ? "disabled" : ""} className="btn btn-info" type="submit">Submit Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
