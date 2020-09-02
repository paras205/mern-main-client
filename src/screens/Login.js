import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
	const responseGoogle = (response) => {
		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/v1/users/googleLogin',
			data: { tokenId: response.tokenId }
		}).then((response) => {
			console.log('google login success', response);
		});
	};
	const responseFacebook = (response) => {
		axios({
			method: 'POST',
			url: 'http://localhost:5000/api/v1/users/facebookLogin',
			data: { access_token: response.accessToken, userID: response.userID }
		}).then((response) => {
			console.log('facebook login success', response);
		});
	};

	return (
		<div className="login_wrapper">
			<div className="login_container">
				<form>
					<Input label="Enter your email" />
					<Input label="Enter your password" />
					<div className="rebember-me">
						<input type="checkbox" value="lsRememberMe" id="rememberMe" />
						<label htmlFor="rememberMe">Remember me</label>
					</div>
					<Button />
				</form>
				<p>
					<span>OR LOGIN WITH</span>
				</p>
				<div className="social_login_btns">
					<FacebookLogin
						textButton="Facebook"
						appId="1622382434592434"
						autoLoad={false}
						callback={responseFacebook}
					/>
					<GoogleLogin
						className="google_login_button"
						buttonText="Google"
						clientId="394735795480-e9n4424030u2f1uet9ahs5afhng56bml.apps.googleusercontent.com"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
