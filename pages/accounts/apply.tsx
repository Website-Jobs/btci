import Head from "next/head";
import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
import { WebUser } from "../../interfaces";

import { login, logout } from "../../utils/auth";

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

  const [error, setError] = useState("");

  const [regUser, setRegUser] = useState(newUser);
  const [loginUser, setLoginUser] = useState(oldUser);

  const doLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      if (response.status == 200) {
        const data = await response.json();
        const token = data.accid;
        await login({ token });
      } else {
        setError(
          "<span className='txt-red-500 text-lg text-center'>Login failed: User details may be incorrect.</span>"
        );
      }
    } catch (error) {
      setError(
        "<span className='txt-red-500 text-lg text-center'>Login failed: User details may be incorrect.</span>"
      );
    }
  };

  const doRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/create", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regUser),
      });
      if (response.status == 200) {
        const data = await response.json();
        const token = data.accid;
        await login({ token });
      } else {
        await logout();
      }
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <title>Sign Up | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout menukey="apply">
        <SubPage title="Sign Up" menutitle="Sign Up" />
        <div className="user-form-area ptb-100 bg-gray-300">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="container">
                  <div className="form-item">
                    <form id="applyLoginForm" onSubmit={doLogin}>
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
                            type="submit"
                            className="btn common-btn bg-orange-400"
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
                  <form id="applyRegisterForm" onSubmit={doRegister}>
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
                          type="submit"
                          className="btn common-btn bg-orange-500"
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
