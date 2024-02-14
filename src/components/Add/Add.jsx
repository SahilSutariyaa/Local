/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Style from './Add.module.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';

const Add = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Conform_password, setConform_password] = useState('')
    const [file, setFile] = useState('');

    var Save_Data = JSON.parse(localStorage.getItem('ok')) || [];
    function findData(arr, emailToFind) {
        return arr.find(function (item) {
            return item.email === emailToFind
        })
    }
    const clickToChange = () => {
        const local = JSON.parse(localStorage.getItem('ok'))
        const result = local && findData(local, email);
        const newData = {
            name,
            email,
            password,
            Conform_password
        };

        if (password !== Conform_password) {
            toast.warning("Password is inCorrect")
        } else if (result) {
            toast.warning("Email  is Already existed")
        } else {
            Save_Data.push(newData)
            localStorage.setItem('ok', JSON.stringify(Save_Data))
            toast.success("Data Add Successfully")
            setConform_password("")
            setEmail("")
            setName("")
            setPassword("")
        }

    }
    return (
        <>
            <div>
                <label

                >
                    Name:
                    <input
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        type="text"
                        id='name'
                        required
                        placeholder="your name...?"
                    />
                </label>

                <br /> <br />
                <label

                >
                    Email:
                    <input
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                        type="text"
                        id='email'
                        required
                        placeholder="enter email...?"
                    />
                </label>
                <br /> <br />

                <label
                >
                    Password:
                    <input
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        type="text"
                        id='password'
                        required
                        placeholder="enter password...?"
                    />
                </label>
                <br /> <br />
                <label
                >
                    Conform-Password:
                    <input
                        value={ Conform_password }
                        onChange={ (e) => setConform_password(e.target.value) }
                        type="text"
                        id='password'
                        required
                        placeholder="enter Conform-password...?"
                    />
                </label>
                <br /> <br />
                <label>
                    Add Image:
                    <input
                        type="file"
                        id='file'
                        // value={ file }
                        required
                        onChange={ (e) => setFile(URL.createObjectURL(e.target.files[0])) }
                        placeholder="Enter your image"
                    />

                </label>

                <div className={ Style.btn }>
                    <Button variant="success"
                        onClick={ clickToChange }
                        type="submit">
                        Submit
                    </Button>
                </div>
                <div className={ Style.btn }>
                    <Link to={ "/" }>
                        <Button variant="danger">Cancel</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Add
