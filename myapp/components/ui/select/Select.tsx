import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import formStyles from '../form-elements/form.module.scss'

import styles from './Select.module.scss'
import { IOption, ISelect } from './select.interface'

const animatedComponents = makeAnimated()

const Select = ({
	placeholder,
	error,
	isMulti,
	options,
	field,
	isLoading,
	name,
}: ISelect) => {
	const myValues = options.map((option) => ({
		value: option._id,
		label: option.name,
	}))
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item: IOption) => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? myValues.filter((option) => field.value.indexOf(option.value) >= 0)
				: myValues.find((option) => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}

	const getOptions = () => {
		return options.map((option) => ({
			value: option._id,
			label: option.name,
		}))
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					placeholder={''}
					options={getOptions()}
					value={getValue()}
					onChange={onChange}
					isMulti={isMulti}
					name={name}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
