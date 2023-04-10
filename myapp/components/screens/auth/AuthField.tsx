import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

export const AuthField = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}: IAuthFields) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: { value: validEmail, message: 'Enter valid email address' },
				})}
				placeholder="Email"
				error={errors.email}
			/>
			<Field
				{...register('password', {
					required: 'Password is required',
					minLength: { value: 6, message: 'Enter password longer than 6' },
				})}
				placeholder="Password"
				error={errors.password}
			/>
		</>
	)
}
