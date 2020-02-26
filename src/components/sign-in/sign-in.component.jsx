import React from 'react'
import FormInput from '../../components/form-input/form-input.component'
import { auth, signinWithGoogle } from '../../firebase/firebase.utils'

import './sing-in.style.scss'
import CustomButton from '../../components/custom-button/custom-button.component'

class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async  event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label={'Εmail'} required />
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label={'Password'} required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signinWithGoogle} isGoogleSignIn> Sign in with google </CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default Signin