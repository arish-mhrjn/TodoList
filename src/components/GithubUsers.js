import React from 'react';
import { FcApproval } from 'react-icons/fc';

const GithubUsers = ({ Users }) => {
  return (
    <div className="container-fluid">
      <h1 className="text-center mt-4">List of GitHub Users</h1>
      <div className="row text-center">
        {Users.map((curElem) => {
          const { id, avatar_url, login } = curElem;
          return (
            <div
              className="col-12 col-md-4 mt-5 d-flex justify-content-center"
              key={id}>
              <div
                className="card mb-3"
                style={{ maxWidth: '540px', borderRadius: '20px' }}>
                <div className="row no-gutters">
                  <div className="col-md-4 d-flex justify-content-center">
                    <img
                      src={avatar_url}
                      className="card-img"
                      alt="..."
                      style={{
                        borderRadius: '20px',
                        marginTop: '10px',
                        marginLeft: '10px',
                        maxHeight: '90%',
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title text-success"></h2>
                      <h5 className="card-title">
                        {login}
                        <FcApproval />
                      </h5>

                      <div className="card-text">
                        <p>
                          hello mfasdas asdasd asasdas sdasdasd asdasdasd
                          asdasdasdas d
                        </p>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Articles</span>{' '}
                            <span className="number1">38</span>{' '}
                          </div>
                          <div className="d-flex flex-column">
                            <span className="followers">Followers</span>{' '}
                            <span className="number2">980</span>{' '}
                          </div>
                          <div className="d-flex flex-column">
                            <span className="rating">Rating</span>{' '}
                            <span className="number3">8.9</span>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GithubUsers;
