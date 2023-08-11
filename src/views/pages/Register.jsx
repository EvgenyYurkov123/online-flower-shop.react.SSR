const React = require('react');
const Layout = require('../Layout');


module.exports = function Register({ userEmail }) {
  return (
    <Layout userEmail={userEmail}>
      <div className="Der regBG">
        <div className=" ddd formReg">

          <h2 className="link-danger d-flex justify-content-center" >Зарегистрируйтесь</h2>
        </div>
        <h6 className="regMsg d-flex justify-content-center" />
        <script defer src="/js/reg.js" />
        <div className="d-flex mt-3  max-w-700 position-relative  justify-content-center">
          <form action="/register" method="POST" id="regForm">
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
            <div className="mt-3 d-flex justify-content-center ">

              <button type="submit" className=" btn btn-success">Отправить</button>
            </div>
          </form>
          <hr />
        </div>

      </div>
    </Layout>
  );
};