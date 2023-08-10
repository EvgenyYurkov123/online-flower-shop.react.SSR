const React = require('react');

module.exports = function Navbar({ user }) {
  console.log(':::::::::<>', user);
    return (
        
      <nav user={user} className="navbar navbar-expand-lg bg-transparent">
        {user ? (<div className="container-fluid">
          <div className="container d-flex"  >
            <p className="nameMag d-flex navbar-brand" href="#">Онлайн магазин цветов</p>

          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container d-flex">
            <p className="logo">Aroma of Love</p>

          </div>

          <div className="container d-flex">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 ">

                <li className="nav-item">
                  <a className="d-flex nav-link ml-auto VhodA" href="/profile">Профиль</a>
                </li>
                <li className="nav-item">
                  <a className="d-flex nav-link ml-auto VhodA" href="/logout">Выйти</a>
                </li>
                <li className="nav-item">
                  <a className="text-outline d-flex nav-link  ml-auto grandA" aria-current="page" href="/">Главная</a>
                </li>


              </ul>

            </div>
          </div>
        </div>
        ): (<div className = "navCON container">
          <div className = " container d-flex"  >
            <p className = "nameMag d-flex navbar-brand" href = "#">Онлайн магазин цветов</p>

          </div >
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container d-flex">
          <p className="logo">Aroma of Love</p>

          </div>
          
            <div className="container d-flex ">

          <div className="divUL collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 ">
              
              <li className="nav-item">
                  <a className="d-flex nav-link ml-auto VhodA" href="/login">Войти</a>
              </li>
              <li className="nav-item">
                  <a className="text-outline d-flex nav-link  ml-auto grandA" aria-current="page" href="/">Главная</a>
              </li>
              
              
            </ul>
            
          </div>
          </div>
          </div >
        )}
        
      </nav>
       
    );
};

