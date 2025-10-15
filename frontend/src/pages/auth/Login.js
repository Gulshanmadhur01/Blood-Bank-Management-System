import React, { useState } from 'react'
import Form from '../../components/shared/Form/Form'
import {useSelector} from 'react-redux'
import {DNA} from 'react-loader-spinner'
import toast from 'react-hot-toast'

const Login = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row g-0 vh-100 overflow-hidden">
            {/* Visual side */}
            <div className="col-lg-6 d-none d-lg-block">
              <img src="./assets/banner1.jpg" alt="Blood donation illustration" className="w-100 h-100" style={{objectFit: 'cover'}} />
            </div>

            {/* Form side */}
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center vh-100">
              <div className="px-4 px-md-5 py-5 h-100 d-flex flex-column justify-content-center">
                <div className="mb-4 d-flex align-items-center">
                  <img src="./assets/logo.png" className='logo-login me-2' alt="Red Gold" />
                </div>
                <div className="mb-4">
                  <h2 className="fw-bold mb-1">Welcome back</h2>
                  <p className="text-muted mb-0">Log in to manage donations, requests, and inventory.</p>
                </div>
                {loading ? (
                  <div className="d-flex w-100 align-items-center justify-content-center" style={{minHeight: '320px'}}>
                    <DNA
                      visible={true}
                      height="240"
                      width="240"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  </div>
                ) : (
                  <Form formTitle={"Log In"} submitBtn={"Login"} formType={'login'} />
                )}
                <div className="mt-4 small text-muted">
                  <span>Tip: Use your registered email and password to continue.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login