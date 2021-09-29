//Form component with the main fields for signup in the platform
//imported from libraries
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { catchError } from 'rxjs/operators';
import { useEffect } from 'react';

//imported internal classes, variables, files or functions
import { store } from 'pages/index';
import { userService } from 'services/Users';
import { alertService } from 'services/Alert';
import { SignupEvent } from 'pages/Signup/data';
import CrossIcon from './../public/assets/svg/icons/cross1.tsx'

//imported react components
import Alert from 'components/overlay/Alert';
import { Link } from 'elements/Link';
import Popup from 'components/popup/Popup';



export default function PopupSignup() {

  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
      email: Yup.string()
          .required('Email is required'),
      password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
      //emit is called to trigger the event by the observable
      store.emit(new SignupEvent(user.email, user.password));

  }

  return (

        <Popup title="Signup">

          <Alert />

                <div className="popup__img">
                  <img src="https://dummyimage.com/550x200/#ccc/fff" alt="Register_img" className=""></img>
                </div>

                <div className="popup__section">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form__field">
                            <label>Email</label>
                            <input name="username" type="text" {...register('email')} className={`form__input ${errors.username ? '' : ''}`} />
                            <div className="">{errors.username?.message}</div>
                        </div>
                        <div className="form__field">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form__input  ${errors.password ? '' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>

                        <button disabled={formState.isSubmitting} className="btn-with-icon button-with-icon--offer">
                            {formState.isSubmitting && <span className=""></span>}
                            <div className="btn-filter__icon">
                            </div>
                            <div className="btn-with-icon__text">
                              REGISTER
                            </div>
                        </button>

                    </form>

                </div>

                <div className="popup__options-v">

                  <Link href="/Login" className="popup__options-btn">I have an account</Link>

                </div>


      </Popup>

  );

}