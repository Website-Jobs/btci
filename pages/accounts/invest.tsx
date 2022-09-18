import { NextPage, GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import React, { useState } from 'react';
import { Context } from 'vm';

interface Packed {
    package?: string;
    amount?: number;
    starts?: string;
    ends?: string;
}
const Invest: NextPage = ({ lists }: any) => {
    const [createError, setCreateError] = useState('');
    const [packed, setPacked] = useState<Packed>({ package: '' });

    const doCreate = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setCreateError('');
        alert(JSON.stringify(packed));
    };
    return (
        <>
            <AccountLayout menukey="dashboard" subpage={false}>
                <section className="provide-area pt-[0px] pb-70">
                    <div className="section-title three">
                        <h2>
                            Create Bitcoin Investment <hr />
                        </h2>
                    </div>
                    <div className="container">
                        <div className="m-[30px]">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="container">
                                        <div className="form-item">
                                            <form id="applyLoginForm" onSubmit={doCreate}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <span className="text-red-500 text-lg text-center">
                                                            {createError}
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label htmlFor="package" className="text-xl">
                                                            Select Package
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <select
                                                                name="package"
                                                                id="package"
                                                                className="form-control text-lg"
                                                                onChange={(e) =>
                                                                    setPacked({ ...packed, package: e.target.value })
                                                                }
                                                            >
                                                                <option value="">Select Package</option>
                                                                {lists.map((listed: any, i: any) => (
                                                                    <option value={listed._id} key={i}>
                                                                        {listed.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="amount" className="text-xl">
                                                            Investment Amounts
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                name="amount"
                                                                id="amount"
                                                                type={'number'}
                                                                value={packed.amount}
                                                                className="form-control text-lg"
                                                                onChange={(e) =>
                                                                    setPacked({
                                                                        ...packed,
                                                                        amount: parseInt(e.target.value),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mt-3">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label htmlFor="starts" className="text-xl">
                                                                    Start Date
                                                                </label>
                                                                <div className="form-group mt-2">
                                                                    <input
                                                                        name="starts"
                                                                        id="starts"
                                                                        type={'datetime-local'}
                                                                        value={packed.starts}
                                                                        className="form-control text-lg"
                                                                        onChange={(e) =>
                                                                            setPacked({
                                                                                ...packed,
                                                                                starts: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="ends" className="text-xl">
                                                                    End Date
                                                                </label>
                                                                <div className="form-group mt-2">
                                                                    <input
                                                                        name="ends"
                                                                        id="ends"
                                                                        type={'datetime-local'}
                                                                        value={packed.ends}
                                                                        className="form-control text-lg"
                                                                        onChange={(e) =>
                                                                            setPacked({
                                                                                ...packed,
                                                                                ends: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 my-3">
                                                        <button type="submit" className="btn common-btn bg-orange-400">
                                                            Sign In
                                                            <span />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </AccountLayout>
        </>
    );
};

export async function getServerSideProps(context: Context) {
    const { token } = nextCookie(context);
    if (!token) {
        if (typeof window === 'undefined') {
            context.res.writeHead(302, { Location: '/accounts/apply' });
            context.res.end();
        } else {
            Router.push('/accounts/apply');
        }
    }
    try {
        const packages = await fetch(`${process.env.DOMAIN}//api/packages/list`);
        const packagesData = await packages.json();
        console.log(packagesData);
        return {
            props: { lists: packagesData.data },
        };
    } catch (error) {
        console.log(error);
    }
}

export default Invest;
