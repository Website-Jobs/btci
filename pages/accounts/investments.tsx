import { NextPage, GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { useRef, useEffect, useState } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

interface IData {
    amount?: Number;
    starts?: String;
    expires?: String;
    id?: String;
}
const Investments: NextPage = ({ token }: any) => {
    const tableRef = useRef<HTMLTableElement | null>(null);
    const [idata, setIData] = useState<IData[]>([]);

    useEffect(() => {
        const ListAll = async () => {
            try {
                const response = await fetch(`/api/investments/${token}/list`);
                if (response.status == 200) {
                    const result = await response.json();
                    setIData(result.data);
                }
            } catch (error) {}
        };
        ListAll();
        const table = $(tableRef.current).DataTable({
            data: idata,
            columns: [{ data: '_id' }, { data: 'amount' }, { data: 'starts' }, { data: 'expires' }],
            destroy: true, // I think some clean up is happening here
        });
        // Extra step to do extra clean-up.
        return function () {
            console.log('Table destroyed');
            table.destroy();
        };
    }, [idata, token]);

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
    http: return {
        props: {
            token: token,
        },
    };
};

export default Investments;
