import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/heading/Heading'

import useAuth from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'
import useAuthRedirect from './useAuthRedirect'

const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onBlur' })

	const login = (data: any) => {}

	const register = (data: any) => {}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<Meta title="auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<div className={styles.buttons}>
						<button disabled={isLoading} onClick={() => setType('login')}>
							Login
						</button>
						<button disabled={isLoading} onClick={() => setType('login')}>
							Register
						</button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth
