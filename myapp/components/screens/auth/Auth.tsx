import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import { AuthField } from './AuthField'
import { IAuthInput } from './auth.interface'
import useAuthRedirect from './useAuthRedirect'

const Auth = () => {
	useAuthRedirect()

	const [type, setType] = useState<'login' | 'register'>('login')
	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onBlur' })

	const { login, register } = useActions()
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
					<AuthField
						register={registerInput}
						formState={formState}
						isPasswordRequired={true}
					/>
					<div className={styles.buttons}>
						<Button disabled={isLoading} onClick={() => setType('login')}>
							Login
						</Button>
						<Button disabled={isLoading} onClick={() => setType('register')}>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth
