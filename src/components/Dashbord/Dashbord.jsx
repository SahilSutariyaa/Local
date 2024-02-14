import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Dashbord.module.css'
import Button from 'react-bootstrap/Button';

const Dashbord = () => {
    return (
        <>
            <div className={ Style.btn }>
                <Link to={ "/add" }>
                    <Button variant="success">Add</Button>
                </Link>
                <Link to={ "/list" }>
                    <Button variant="danger">List</Button>
                </Link>

            </div>
        </>
    )
}

export default Dashbord
