import Head from 'next/head';
import Script from 'next/script';
import { ReactNode, useEffect, useState } from 'react';
import { LoggedInUser } from '../interfaces';
import AccountSubPage from './website/AccountSubPage';
import CopyRight from './website/CopyRight';
import FooterArea from './website/FooterArea';
import HeaderArea from './website/HeaderArea';
import NavigationBar from './website/ProfileNavigationBar';
const cookie = require('react-cookies');

interface Props {
    menukey: string;
    children?: ReactNode;
    subpage?: boolean;
}

function AccountLayout({ menukey, children, subpage }: Props) {
    const userProfile: LoggedInUser = {
        firstname: 'SHQBTC',
        lastname: 'User',
        account: {
            usd: 0,
            btc: '0',
        },
    };
    const [profile, setProfile] = useState(userProfile);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cookies = cookie.loadAll();
                const token = cookies.token;
                const response = await fetch('/api/users/info', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        token: token,
                    }),
                });
                if (response.status == 200) {
                    const data = await response.json();
                    setProfile({
                        ...profile,
                        accid: data.accid,
                        email: data.email,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        account: data.account,
                    });
                } else {
                }
            } catch (error) {}
        };
        fetchData();
    }, [profile]);

    return (
        <>
            <Head>
                <title>{`${profile.firstname} ${profile.lastname}`} | SHQBTCI</title>
            </Head>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/png" />
                <title>{`${profile.firstname} ${profile.lastname}`} | SHQBTCI</title>
            </Head>
            <HeaderArea />
            <NavigationBar menukey={menukey} />
            <AccountSubPage userProfile={profile} subpage={subpage} />
            {children}
            <FooterArea />
            <CopyRight />
            <Script src="/assets/js/jquery-3.5.1.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/popper.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.meanmenu.js" strategy="lazyOnload" />
            <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/odometer.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.appear.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/custom.js" strategy="lazyOnload" />
        </>
    );
}

export default AccountLayout;
