import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';

const Index: NextPage = ({ token }: any) => {
    return (
        <>
            <AccountLayout menukey="dashboard" subpage={true}></AccountLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = nextCookie(context);
    if (!token) {
        if (typeof window === 'undefined') {
            context.res.writeHead(302, { Location: '/accounts' });
            context.res.end();
        } else {
            Router.push('/accounts');
        }
    }
    http: return {
        props: {
            token: token,
        },
    };
};

export default Index;
