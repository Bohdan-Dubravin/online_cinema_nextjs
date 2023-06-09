import { FieldError, UseFormRegister } from 'react-hook-form'

import InputField from '../InputFIeld'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField = ({ generate, register, error }: ISlugField) => {
	return (
		<div className="relative">
			<InputField
				{...register('slug', {
					required: 'Slug is required!',
				})}
				placeholder="Slug"
				error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				generate
			</div>
		</div>
	)
}

export default SlugField
