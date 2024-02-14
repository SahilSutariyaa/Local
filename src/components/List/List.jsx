/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Style from './List.module.css'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const List = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('ok')) || [])
    const clickToDelete = (id) => {
        const deleteData = data.filter((ele, i) => i !== id);
        setData(deleteData)
        localStorage.setItem('ok', JSON.stringify(deleteData))
    }
    return (
        <>
            <div>
                <Table striped bordered hover m-5>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((ele, index) => {
                                return (
                                    <tr key={ index }>

                                        <th>{ index + 1 }</th>
                                        <th>{ ele.name }</th>
                                        <th>{ ele.email }</th>
                                        <th>{ ele.password }</th>
                                        <th>  <img src={ ele.file } /></th>

                                        <th>
                                            <div className={ Style.btn }>

                                                <Button variant="danger" onClick={ () => clickToDelete(index) }>
                                                    Delete
                                                </Button>

                                                <Link to={ `/edit/${index}` }>

                                                    <Button variant="info">
                                                        Edit
                                                    </Button>
                                                </Link>
                                            </div>
                                        </th>

                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </Table>
                <div className={ Style.btn }>
                    <Link to={ "/" }>

                        <Button variant="danger">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default List
