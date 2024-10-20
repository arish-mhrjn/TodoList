import React, { useState } from 'react';
import Loading from './Loading';
const Form = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [AllEntry, setAllEntry] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    const newEntry = { email: Email, password: Password };
    setAllEntry([...AllEntry, newEntry]);
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <div className="container my-5">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="on"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div>
          {AllEntry.map((currElem, index) => {
            const { email, password } = currElem;
            return (
              <div className="showDataStyle" key={index}>
                <h1>{currElem.email}</h1>
                <h1>{currElem.password}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Form;
