// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-2'>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Contactez-nous</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to='/contact'>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </li>
                </Link>
                <Link to='/contact'>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>

            <div className='col-md-7 col-lg-8'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 md-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Nos filières</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Présentation</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Vie Etudiantine</li>
                    </Link>

                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Adresse: 20 Avenue de la Corniche, Monastir, Tunisie</p>
                    </li>
                    <li>
                      <p>Téléphone: 70 011 920</p>
                    </li>
                    <li>
                      <p>Email: isimm@isimm.u-monastir.tn</p>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className='big-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>Copyright @ made by Omar Kassar et Ala Kerkeni</p>
          </div>
        </div>

      </footer>
  );
}

export default Footer;
