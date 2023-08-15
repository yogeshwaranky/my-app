import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";



export default function EditUser() {
    const { userid } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(`https://63a3d79c471b38b206173b15.mockapi.io/users/${userid}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((usdata) => {
                setUser(usdata);
            });
    }, []);
    return user ? <EditUserForm user={user}/> : "Please wait........!!!"

}

function EditUserForm({user}) {
    const [avatar, setAvatar] = useState(user.avatar);
    const [Name, setName] = useState(user.Name);
    const [Age, setAge] = useState(user.Age);
    const [Email, setEmail] = useState(user.Email);
    const [Address, setAddress] = useState(user.Address);
    const [ContactNumber, setNumber] = useState(user.ContactNumber);
    
    const navigate = useNavigate();

    return (
       <div className="add-user-form" style={{marginLeft:'50px',marginTop:'50px'}}>
         <h1 style={{color:"green",fontWeight:'bolder',fontFamily:'cursive'}}>Edit and Save User 😜🤞✨</h1><br/>
            <TextField
                label="image"
                variant="outlined"
                onChange={(event) => setAvatar(event.target.value)}
                type="text"
                placeholder="Enter image url"
                value={avatar}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="Name"
                variant="outlined"
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Enter your name"
                value={Name}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="Age"
                variant="outlined"
                onChange={(event) => setAge(event.target.value)}
                type="text"
                placeholder="Enter your Age"
                value={Age}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                placeholder="Enter valid email"
                value={Email}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="Address"
                variant="outlined"
                onChange={(event) => setAddress(event.target.value)}
                type="text"
                placeholder="Enter your Address"
                value={Address}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Contact number"
                variant="outlined"
                onChange={(event) => setNumber(event.target.value)}
                type="text"
                placeholder="Enter your Contact Number"
                value={ContactNumber}
                style={{width:'800px'}}
            /><br/><br/>
            <Button
                color="success"
                variant="contained"
                onClick={
                    () => {
                        const updatedUser = {
                            avatar: avatar,
                            Name: Name,
                            Age: Age,
                            Email: Email,
                            Address: Address,
                            ContactNumber: ContactNumber,
                        };
                        fetch(`https://63a3d79c471b38b206173b15.mockapi.io/users/${user.idno}`, {
                            method: "PUT",
                            body: JSON.stringify(updatedUser),
                            headers: { "Content-Type": "application/json" },
                        })
                            .then((data)=>data.json())
                            .then(()=>navigate("/dashboard"));
                    }
                }
            >
             SAVE USER
            </Button>&nbsp;&nbsp;&nbsp;

            <Button color="success"
                variant="contained"
                onClick={()=>{navigate(-1)}}
                >
                    <ArrowBackIosIcon /> BACK
                    </Button>
        </div>
    )
}
