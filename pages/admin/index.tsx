import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import Link from 'next/link';

const Index: NextPage = ({ users, profile }: any) => {
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={true}>
                <div className="section-title three">
                    <h2>
                        All Accounts & Members
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <table
                            id="myDataTable"
                            className="display w-full m-[20px] table table-responsive table-altered"
                            width="100%"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">MOBILE</th>
                                    <th scope="col">REGISTERED</th>
                                    <th scope="col">LAST SEEN</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item: any, i: any) => (
                                    <>
                                        <tr>
                                            <th scope="row">{item._id}</th>
                                            <td>
                                                {item.firstname} {item.lastname}
                                            </td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.updatedAt}</td>
                                            <td>{item.createdAt}</td>
                                            <td>
                                                <Link href={`/admin/users/${item._id}/info`} key={i}>
                                                    <a className="btn btn-sm btn-success text-white">User Profile</a>
                                                </Link>{' '}
                                                <Link href="#" key={i}>
                                                    <a className="btn btn-sm btn-danger text-white">Activate</a>
                                                </Link>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
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

    const domain = process.env.DOMAIN || 'http://localhost:3000';
    const response = await fetch(`${domain}/api/users/${token}/info`);
    const result = await response.json();

    const users = await fetch(`${domain}/api/users`);
    const usersResult = await users.json();

    http: return {
        props: {
            profile: result,
            users: usersResult.data,
        },
    };
};

export default Index;
