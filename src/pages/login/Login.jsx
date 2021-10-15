import React, {useRef,useState} from 'react'
import axios from 'axios'
import './login.scss'

function Login() {

    const [userName,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const username = useRef(null)
    const userPassword = useRef(null)
    const subBtn = useRef(null)

    if(userName.length > 0 && password.length > 0) {
        subBtn.current.disabled = false
    }

    function loginSub(e) {
        e.preventDefault();

        axios.post('https://matras-app.herokuapp.com/login', {
            userName: username.current.value,
            password: userPassword.current.value
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='login'>
            <div className="login-wrapper">
                <h4 className="login-wrapper__title">
                    Kirish
                </h4>

                <form onSubmit={loginSub} className="login-wrapper-form">
                    <div className="login-wrapper-form-user">
                        <input value={userName} onChange={(e) => setUsername(e.target.value)} ref={username} type="text" placeholder='Login' className="login-wrapper-form-user__input" />
                    </div>
                    <div className="login-wrapper-form-password">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} ref={userPassword} type="password" placeholder='Parol' className="login-wrapper-form-user__input" />
                    </div>

                    <button disabled ref={subBtn} className="login-wrapper-form__btn">
                        Kirish
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
