import React, { useState } from 'react';

function Login({show, onClose}) {
  return (
    show && <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
            style={{ zIndex: 1050 }}
            >
            <div
                className="bg-white rounded border p-4 position-relative"
                style={{ maxWidth: '400px', width: '90%' }}
            >
                {/* Dismiss button */}
                <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3"
                aria-label="Close"
                onClick={onClose}
                />

                <h2 className="mb-4 text-center">Login</h2>
                <form>
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-dark w-100">Sign In</button>
                </form>
            </div>
            </div>
  );
}

export default Login;
