import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useAuth from '@/hooks/useAuth'

const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()

	const redirect = String(query.redirect) || '/'

	useEffect(() => {
		if (user) {
			push(redirect)
		}
	}, [user, redirect, push])
}
export default useAuthRedirect
