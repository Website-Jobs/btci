import { NextPage, GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { useRef, useEffect } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

const Investments: NextPage = () => {
    const tableRef = useRef<HTMLTableElement | null>(null);
    useEffect(() => {
        console.log(tableRef.current);
        const table = $(tableRef.current).DataTable({
            data: [['Agu Chux', 'Engineer']],
            columns: [{ title: 'Name' }, { title: 'Position' }],
            destroy: true, // I think some clean up is happening here
        });
        // Extra step to do extra clean-up.
        return function () {
            console.log('Table destroyed');
            table.destroy();
        };
    }, []);

    return (
        <>
            <AccountLayout menukey="dashboard" subpage={false}>
                <div className="section-title three">
                    <h2>
                        Invetments
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
