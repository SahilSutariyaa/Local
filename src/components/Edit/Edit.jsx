import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Style from './Edit.module.css'

const Edit = () => {
    const { id } = useParams()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const Save_Data = JSON.parse(localStorage.getItem('ok'))
        const Edit_Data = Save_Data[id];
        setName(Edit_Data.name)
        setEmail(Edit_Data.email)
        setPassword(Edit_Data.password)


    }, [])

    const clickToUpdate = () => {
        const Save_Data = JSON.parse(localStorage.getItem('ok'))

        const newData = {
            name, password, email
        }
        Save_Data[id] = newData
        localStorage.setItem('ok', JSON.stringify(Save_Data));
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
                    />
                </label>
                <br /> <br />

                <div className={ Style.btn }>
                    <Link to={ "/list" }>
                        <button
                            onClick={ clickToUpdate }
                            className='mt-5'
                            type="submit">
                            Update
                        </button>
                    </Link>
                </div>
                <div className={ Style.btn }>
                    <Link to={ "/" }>
                        <button>Cancel</button>
                    </Link>
                </div>

            </div>
        </>
    )
}



export default Edit
