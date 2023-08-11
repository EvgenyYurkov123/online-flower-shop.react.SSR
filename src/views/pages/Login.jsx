const React = require('react');
const Layout = require('../Layout');


module.exports = function Login({ userEmail, allCard }) {
  return (
    <Layout userEmail={userEmail} allCard={allCard}>
      
      <div className="logBG">
        <div className=" formLog d-flex justify-content-center">
          <hr />
          <h2 className="link-danger d-flex justify-content-center">Войдите в свой профиль</h2>
          <hr />
        </div>
        <h6 className="logMsg d-flex justify-content-center" />
        <script defer src="/js/log.js" />
        <div className="d-flex mt-1  max-w-700 position-relative  justify-content-center">
          <form  id="loginForm" > 
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
              <input className="form-control" name="login" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
              <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text" />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div>
              <p className="d-flex justify-content-center textLog mb-0 ">
                нет профиля жми регистрация
              </p>
            </div>
            <div className="mt-2 d-flex justify-content-start ">


              <button type="submit" className=" btn btn-success me-2">Отправить</button>
              <a className="nav-link regS d-flex align-items-center" href="/register">Регистрация</a>
            </div>
          </form>
          <hr />
        </div>
        
      <div id="mes" />
      </div>
    </Layout>
  );
};