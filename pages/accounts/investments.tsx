import { NextPage, GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { useRef, useEffect } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

const Investments: NextPage = ({ token, result }: any) => {
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
            <AccountLayout menukey="dashboard" subpage={false}>
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
            context.res.writeHead(302, { Location: '/accounts/apply' });
            context.res.end();
        } else {
            Router.push('/accounts/apply');
        }
    }
    // const invest;
    const domain = process.env.DOMAIN || 'http://localhost:3000';
    const response = await fetch(`${domain}/api/investments/${token}/list`);
    const result = await response.json();
    http: return {
        props: {
            token: token,
            result: result.data,
        },
    };
};

export default Investments;
