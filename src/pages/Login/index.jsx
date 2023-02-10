import {Link, Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {signIn,} from '../../store/user/user.action';
import {useForm} from 'react-hook-form';

//styles
import './Login.css';



const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const  dispatch = useDispatch();
    const access_token = useSelector((state) => state.user.accessToken);

    if (access_token) {
        return (
            <Navigate to={'/admin/plays'}/>
        );
    }

    const onSubmit = (data) => {
        dispatch(signIn(data));
    };

    return  (
        <div className="login">
            <div className="login_container">
                <p className="login_title">Sign In</p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login_form"
                >
                    <div className="login_form_group">
                        <input
                            className="login_form_input"
                            type="email"
                            placeholder="Email"
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
                    <div className="login_form_group">
                        <input
                            className="login_form_input"
                            type="password"
                            name="password"
                            placeholder="password"
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
                    <div className="login_form_group">
                        <button className="login_form_submit_button">Sign In</button>
                    </div>
                    <Link to='/register'>Sign Up</Link>
                </form>
            </div>
        </div>
    );
};
export default Login;