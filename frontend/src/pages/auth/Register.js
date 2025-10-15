import React from 'react'
import Form from '../../components/shared/Form/Form'
import {useSelector} from 'react-redux'
import {DNA} from 'react-loader-spinner'

const Register = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <>
      {error && <span className="d-none">{alert(error)}</span>}
      <section className="min-vh-100">
        <div className="container-fluid">
          <div className="row g-0 min-vh-100">
            {/* Visual side */}
            <div className="col-lg-6 d-none d-lg-block order-lg-2">
              <img src="./assets/banner2.jpg" alt="Register illustration" className="w-100 h-100" style={{objectFit: 'cover'}} />
            </div>

            {/* Form side */}
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center order-lg-1">
              <div className="px-4 px-md-5 py-5">
                <div className="mb-4 d-flex align-items-center">
                  <img src="./assets/logo.png" className='logo-login me-2' alt="Red Gold" />
                </div>
                <div className="mb-4">
                  <h2 className="fw-bold mb-1">Create your account</h2>
                  <p className="text-muted mb-0">Join the Red Gold network to donate or request blood.</p>
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
                  <Form formTitle={"Register"} submitBtn={"Register"} formType={'register'} />
                )}
                <div className="mt-4 small text-muted">
                  <span>It’s free and only takes a minute.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register