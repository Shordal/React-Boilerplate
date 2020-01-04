import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// stateless functional component
export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">
                BoilerPlate
                <p className="box-layout__subText">
                    Tag line for app.
                </p>
            </h1>
            <button className="button" onClick={startLogin}> 
                Login with Google
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);