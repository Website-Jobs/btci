import { NextPage, GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { useRef, useEffect } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

const Investments: NextPage = ({ token, result,profile }: any) => {
    const tableRef = useRef<HTMLTableElement | null>(null);
    useEffect(() => {
        const table = $(tableRef.current).DataTable({
            data: result,
            columns: [{ data: '_id' }, { data: 'amount' }, { data: 'starts' }, { data: 'expires' }],
            destroy: true,
        });
        return function () {
            console.log('Table destroyed');
            table.destroy();
        };
    });

    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={false}>
                <div className="section-title three">
                    <h2>
                        Investments
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <table id="myDataTable" className="display w-full m-[20px]" width="100%" ref={tableRef}></table>
                    </div>
                </div>
            </AccountLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = nextCookie(context);
    if (!token) {
        if (typeof window === 'undefined') {
            context.res.writeHead(302, { Location: '/auth/login' });
            context.res.end();
        } else {
            Router.push('/auth/login');
        }
    }
    // const investments;
    const investments = await fetch(`${process.env.DOMAIN}/api/investments/${token}/list`);
    const investmentlist = await investments.json();

    const response = await fetch(`${process.env.DOMAIN}/api/users/${token}/info`);
    const userInfo = await response.json();

    http: return {
        props: {
            token: token,
            result: investmentlist.data,
            profile: userInfo,
        },
    };
};

export default Investments;
