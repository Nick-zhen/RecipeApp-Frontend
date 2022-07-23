import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/users/authSlice'
import Spinner from './Spinner'

export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    })

    const { name, password } = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )


    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (isSuccess || user) {
        navigate('/')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
          name,
          password,
        }

        dispatch(login(userData));
    }

    if (isLoading) {
      return <Spinner />
    }
  return (
    <div>
      <section className="heading">
        <h1>
            <FaSignInAlt /> Login
            <p>Login and start add recipes</p>
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={name}
                placeholder='Enter your name'
                onChange={onChange}
                />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
