import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from "@mui/material/Tooltip";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [detail, setDetail] = useState([]);
    const getDetail = () => {
        fetch("https://63a3d79c471b38b206173b15.mockapi.io/users",
            { method: "GET" })
            .then((data) => data.json())
            .then((res) => setDetail(res));
    }

    const navigate = useNavigate();

    useEffect(() => getDetail(), [])
    return (
        <div className='row' >
            <div class="col-md-12" style={{ justifyItems: 'center' }}>
                {detail.map((object, index) => (
                    <container>
                        <row>
                            <Card key={index} style={{ width: '18rem', display: 'inline-flex', marginLeft: '50px', marginTop: '50px' }}>
                                <Card.Img variant="top" src={object.avatar} />
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Id No : {object.idno}</ListGroup.Item>
                                    <ListGroup.Item>Name : {object.Name}</ListGroup.Item>
                                    <ListGroup.Item>Age : {object.Age}</ListGroup.Item>
                                    <ListGroup.Item>Email : {object.Email}</ListGroup.Item>
                                    <ListGroup.Item>Address : {object.Address}</ListGroup.Item>
                                    <ListGroup.Item>Contact Number : {object.ContactNumber}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Tooltip title="Information" arrow><Button variant="primary"><InfoIcon onClick={() => navigate(`/userdetail/${object.idno}`)} /></Button></Tooltip>&nbsp;&nbsp;

                                    <Tooltip title="Edit" arrow><Button variant="success"><EditIcon onClick={() => navigate(`/edit/${object.idno}`)} /></Button></Tooltip>&nbsp;&nbsp;

                                    <Tooltip title="delete" arrow><Button variant="danger" onClick={() => {
                                        fetch(`https://63a3d79c471b38b206173b15.mockapi.io/users/${object.idno}`, { method: "DELETE" })
                                            .then(() => getDetail());
                                    }}
                                    >
                                        <DeleteIcon /></Button></Tooltip>&nbsp;&nbsp;
                                </Card.Body>
                            </Card>
                        </row>
                    </container>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;