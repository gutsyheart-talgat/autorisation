import React from 'react'
import Nav from '../Nav'
import './login.css'

export default function Login (){
    const [name, setName] = React.useState([])
    const [pass, setPass] = React.useState([])
    const HanddleName = (e)=>{
        setName(e.target.value)
    }
    const HanddlePass = (e)=>{
        setPass(e.target.value)
    }
    const HanddleLogin = (e)=> {
        e.preventdefault()
        fetch('http://localhost:5432/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ name, pass })
        })
            .then(response => {
                if(!response.ok) throw new Error('Ошибка удаления')
                return response.json
            } )
            .then(( {user}  ) => {
                window.localStorage.setItem('token', user.token)
            })

    }
    return(
        <div className="login-back">
            <div className="login-cont">
                <div className="login-textCont">
                    <Nav />
                    <input type="text" placeholder="UserName" className="name-in" onChange={e => HanddleName(e)}>{name}</input>
                    <input type="text" placeholder="Password" className="pass-in" onChange={e => HanddlePass(e)}>{pass}</input>
                    <button onClick={HanddleLogin}>ВХОД</button>
                </div>
            </div>
        </div>

    )
}