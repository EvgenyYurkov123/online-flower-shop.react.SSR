const React = require('react');
const Layout = require('../Layout');

module.exports = function Home({ allCateg }) {
  return (
    <Layout>
        <div className="up1 ">
          <div className="btnHome ">
          <ul className=" btnHomeUL ">
              {allCateg.map((el) => (
                <li>
                  <a className="nav-link" href={`/card/${el.id}`}>{el.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

    </Layout>
  );
};

 
