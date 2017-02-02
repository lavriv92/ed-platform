import React from 'react';

const Guide = () => (
  <section className="guide container">

    <h2>Grid</h2>
    <section className="row">
      <section className="col col1">.col .col1</section>
    </section>

    <section className="row">
      <section className="col col2">.col .col2</section>
    </section>

    <section className="row">
      <section className="col col3">.col .col3</section>
    </section>

    <section className="row">
      <section className="col col4">.col .col4</section>
    </section>

    <section className="row">
      <section className="col col5">.col .col5</section>
    </section>

    <section className="row">
      <section className="col col6">.col .col6</section>
    </section>

    <section className="row">
      <section className="col col7">.col .col7</section>
    </section>

    <section className="row">
      <section className="col col8">.col .col8</section>
    </section>

    <section className="row">
      <section className="col col9">.col .col9</section>
    </section>

    <section className="row">
      <section className="col col10">.col .col10</section>
    </section>

    <section className="row">
      <section className="col col11">.col .col11</section>
    </section>

    <section className="row">
      <section className="col col12">.col .col12</section>
    </section>

    <h2>Buttons</h2>
    <button className="button">
      Default button
    </button>

    <button className="button success">
      Button Success
    </button>

    <button className="button warning">
      Button warning
    </button>

    <button className="button error">
      Button error
    </button>

    <button className="button info">
      Button info
    </button>

    <h3>Large buttons</h3>

    <button className="button success large">
      Button large
    </button>

    <h2>Small button</h2>
    <button className="button success small">
      Button small
    </button>

    <h2>Link</h2>
    <a href="#">Link name</a>

    <h2>Text</h2>
    <p className="text success">Text success</p>
    <p className="text warning">Text warning</p>
    <p className="text error">Text error</p>
    <p className="text info">Text info</p>

    <h2>Tables</h2>

    <table className="table">
      <thead>
        <tr>
          <th>Test</th><th>User</th><th>1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test</td><td>User</td><td>1</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Guide;
