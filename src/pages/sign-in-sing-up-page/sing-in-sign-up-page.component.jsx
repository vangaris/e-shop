import React from 'react'

import './sing-in-sign-up-page.style.scss'
import Singin from '../../components/sign-in/sign-in.component'
import SingUp from '../../components/sing-up/sing-up.compnent'

const SignInAndSingUpPage = () => (
    <div className="sign-in-sing-up-page">
        <Singin />
        <SingUp />
    </div>
)

export default SignInAndSingUpPage