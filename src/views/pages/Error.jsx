const React = require('react');

const Layout = require('../Layout');

module.exports = function ErrorPage({ userEmail, allCard }) {
  return (
    <Layout userEmail={userEmail} allCard={allCard}>
      <div className="error">
        <img className="errorImg" src="img/404.jpg" />
      </div>
    </Layout>
  );
};
