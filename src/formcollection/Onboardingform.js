import React, { useState } from 'react'
import "./OnBoardForm.css"
import { set, ref } from "firebase/database";
import database from "./firebasedatabase"
export default function Onboardingform() {

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [sem, setSem] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");

    const clk = () => {
        if (first != "" && last != "" && sem != "" && department != "" && email != "" && phone != "" && linkedin != "" & instagram != "") {
            const now = new Date();
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const dayName = days[now.getDay()];
            const monthName = months[now.getMonth()];
            const day = now.getDate().toString().padStart(2, '0');
            const year = now.getFullYear();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            const fullDate = `${dayName}, ${monthName} ${day}, ${year}`;
            const fullTime = `${hours}:${minutes}:${seconds}`;
            
            
            
            
            set(ref(database, `OnBoardingForm/${first} ${last}`), {
                FirstName: first,
                LastName: last,
                Semester: sem,
                Department: department,
                Email: email,
                Phone: phone,
                Linkedin: linkedin,
                Instagram: instagram,
                Time : `${fullDate}, ${fullTime}`,
            });
            alert(`${first} ${last} Has Successfully Submitted`);
            setFirst("");
            setLast("");
            setSem("");
            setDepartment("");
            setEmail("");
            setPhone("");
            setLinkedin("");
            setInstagram("");
        }
        else {
            alert("All Are Required Feild");
        }
    }
    return (
        <div className='Main'>
            <h1 className='main-text'>JEM 2024 OnBoarding Form</h1>
            <label htmlFor="first">First Name</label>
            <br />
            <input type="text" id="first" value={first} onChange={(e) => setFirst(e.target.value)} />
            <br />
            <label htmlFor="last">Last Name</label>
            <br />
            <input type="text" id="last" value={last} onChange={(e) => setLast(e.target.value)} />
            <br />
            <label htmlFor="semester">Semester</label>
            <br />
            <input type="text" id="semester" value={sem} onChange={(e) => setSem(e.target.value)} />
            <br />
            <label htmlFor="department">Department</label>
            <br />
            <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br />
            <label htmlFor="linkedin">Linkedin</label>
            <br />
            <input type="text" id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            <br />
            <label htmlFor="instagram">Instagram</label>
            <br />
            <input type="text" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
            <br />
            <div className='btn-div'><button onClick={clk}>Submit</button></div>
            <p className='developed-by'>Developed By SIT Photography Club & Team</p>
            {/* <p>{first}</p>
            <p>{last}</p>
            <p>{sem}</p>
            <p>{department}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{linkedin}</p>
            <p>{instagram}</p> */}

        </div>
    )
}
