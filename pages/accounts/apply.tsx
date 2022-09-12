import Head from "next/head";
import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";

import { WebUser } from "../../interfaces";

function apply() {
  const newUser: WebUser = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const oldUser: WebUser = {
    email: "",
    password: "",
  };

  const [regUser, setRegUser] = useState(newUser);
  const [loginUser, setLoginUser] = useState(oldUser);

  const doLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginUser),
    });
    const data = await response.json();
    alert(JSON.stringify(data));
    return false;
  };

  const doRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    return false;
  };

  return (
    <>
      <Head>
        <title>Sign Up | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout menukey="contacts">
        <SubPage title="Sign Up" menutitle="Sign Up" />
        <div className="user-form-area ptb-100 bg-gray-300">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="container">
                  <div className="form-item">
                    <form>
                      <h2>Sign In</h2>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="email"
                              autoComplete="off"
                              className="form-control"
                              placeholder="Email"
                              value={loginUser.email}
                              onChange={(e) =>
                                setLoginUser({
                                  ...loginUser,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="password"
                              autoComplete="off"
                              className="form-control"
                              placeholder="Password"
                              value={loginUser.password}
                              onChange={(e) =>
                                setLoginUser({
                                  ...loginUser,
                                  password: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="button"
                            className="btn common-btn bg-orange-400"
                            onClick={doLogin}
                          >
                            Sign In
                            <span />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-item">
                  <form>
                    <h2>Sign Up</h2>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            placeholder="First Name"
                            value={regUser.firstname}
                            onChange={(e) =>
                              setRegUser({
                                ...regUser,
                                firstname: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Last Name"
                            value={regUser.lastname}
                            onChange={(e) =>
                              setRegUser({
                                ...regUser,
                                lastname: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="email"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Email"
                            value={regUser.email}
                            onChange={(e) =>
                              setRegUser({
                                ...regUser,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Password"
                            value={regUser.password}
                            onChange={(e) =>
                              setRegUser({
                                ...regUser,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="button"
                          className="btn common-btn bg-orange-500"
                          onClick={doRegister}
                        >
                          Sign Up
                          <span />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default apply;
