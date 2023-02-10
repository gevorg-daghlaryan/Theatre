import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
//actions
import {signUp} from '../../store/user/user.action';

//styles
import './Register.css';

const Register = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const  dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(signUp(data)).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="auth">
            <div className="auth-container">
                <form
                    className="auth_form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className="auth-reg">Sign Up</p>
                    <div className="form-group">
                        <input
                            className="auth_form-input base-input"
                            type="text"
                            placeholder="FullName"
                            name='fullName'
                            {
                                ...register('fullName', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 4,
                                        message: 'Minimum 4 characters',
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Maximum 10 characters'
                                    }
                                })
                            }
                        />
                        {errors.fullName?.message && <p className="error_message">{errors.fullName.message}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            className="auth_form-input base-input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            {
                                ...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter a valid email',
                                    },
                                })
                            }
                        />
                        {errors.email?.message && <p className="error_message">{errors.email.message}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            className="auth_form-input base-input"
                            type="password"
                            placeholder="Password"
                            name='password'
                            {
                                ...register('password', {
                                    required: 'Password is required',
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: 'Please enter a valid password',
                                    },
                                })
                            }
                        />
                        {errors.password?.message && <p className="error_message">{errors.password.message}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            className="auth_form-input base-input"
                            type="password"
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            {
                                ...register('cnfPassword', {
                                    required: 'Password is required',
                                    validate: value => value === watch().password || "Passwords don't match"
                                })
                            }
                        />
                        {errors.cnfPassword?.message && <p className="error_message">{errors.cnfPassword.message}</p>}
                    </div>
                    <div className="form-group">
                        <button className="auth_form-button base-button">Sign Up</button>
                    </div>
                </form>
                <Link to="/login">Sign In</Link>
            </div>
        </div>
    );
};
export default Register;