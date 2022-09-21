import Link from 'next/link';
import { ApiUser, LoggedInUser, TUser } from '../../interfaces';
let money = require('currency-formatter');

interface pageProps {
    userProfile: ApiUser;
    subpage?: boolean;
}

function SubPage({ userProfile, subpage }: pageProps) {
    return (
        <>
            <section className="provide-area pt-[150px] pb-70">
                <div className="container">
                    {subpage && (
                        <div className="section-title three">
                            <h2>{`${userProfile?.firstname} ${userProfile?.lastname}`}</h2>
                            <span className="sub-title">Account Balance</span>
                            <h2>
                                <span className="text-green-600">
                                    <span className="text-orange-700">{`${userProfile.account.btc} BTC`}</span>
                                </span>
                                &nbsp;~&nbsp; {money.format(userProfile.account.usd, { code: 'USD' })}
                            </h2>
                        </div>
                    )}

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link href="/accounts">
                                <a className="nav-link">
                                    <button className="w-full h-full">
                                        <div className="provide-nav">
                                            <i className="flaticon-graph" />
                                            <h3>Dashboard</h3>
                                        </div>
                                    </button>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/accounts/investments">
                                <a className="nav-link">
                                    <button className="w-full h-full">
                                        <div className="provide-nav">
                                            <i className="flaticon-growth" />
                                            <h3>My Investments</h3>
                                        </div>
                                    </button>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/accounts/invest">
                                <a className="nav-link">
                                    <button className="w-full h-full">
                                        <div className="provide-nav">
                                            <i className="flaticon-education-cost" />
                                            <h3>Create Investment</h3>
                                        </div>
                                    </button>
                                </a>
                            </Link>
                        </li>{' '}
                        <li className="nav-item">
                            <Link href="/accounts/transactions">
                                <a className="nav-link">
                                    <button className="w-full h-full">
                                        <div className="provide-nav">
                                            <i className="flaticon-loan-1" />
                                            <h3>Transactions</h3>
                                        </div>
                                    </button>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/accounts/deposits">
                                <a className="nav-link">
                                    <button className="w-full h-full">
                                        <div className="provide-nav">
                                            <i className="flaticon-consultation" />
                                            <h3>Deposits</h3>
                                        </div>
                                    </button>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/accounts/withdrawals">
                                <a className="nav-link">
                                    <button className="w-full h-full">
                                        <div className="provide-nav">
                                            <i className="flaticon-investment" />
                                            <h3>Withdrawals</h3>
                                        </div>
                                    </button>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default SubPage;
