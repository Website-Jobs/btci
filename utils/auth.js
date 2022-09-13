import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

export const login = ({ token }) => {
    var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    cookie.set('token', token, { expires: inFifteenMinutes })
    Router.push('/accounts/dashboard')
}

export const auth = ctx => {
    const { token } = nextCookie(ctx)
    // If there's no token, it means the user is not logged in.
    if (!token) {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/accounts/apply' })
            ctx.res.end()
        } else {
            Router.push('/accounts/apply')
        }
    }
    return token
}

export const logout = () => {
    cookie.remove('token')
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
    Router.push('/accounts/apply')
}

export const withAuthSync = WrappedComponent => {
    const Wrapper = props => {
        const syncLogout = event => {
            if (event.key === 'logout') {
                console.log('logged out from storage!')
                Router.push('/accounts/apply')
            }
        }
        useEffect(() => {
            window.addEventListener('storage', syncLogout)
            return () => {
                window.removeEventListener('storage', syncLogout)
                window.localStorage.removeItem('logout')
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    Wrapper.getInitialProps = async ctx => {
        const token = auth(ctx)
        const componentProps =
            WrappedComponent.getInitialProps &&
            (await WrappedComponent.getInitialProps(ctx))
        return { ...componentProps, token }
    }

    return Wrapper
}
