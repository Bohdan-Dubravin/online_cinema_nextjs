import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const AuthProvider = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}: TypeComponentAuthFields) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const Children = () => <>{children}</>
	const { pathname } = useRouter()
	const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			checkAuth()
		}
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (refreshToken && user) {
			// logout()
		}
	}, [pathname])

	if (!isOnlyAdmin && !isOnlyUser) {
		return <Children />
	} else {
		return (
			<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
				{children}
			</DynamicCheckRole>
		)
	}
}
export default AuthProvider
