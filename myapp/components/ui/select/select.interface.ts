import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IActor, IGenre } from '@/shared/types/movie.types'

import { IFieldProps } from './../form-elements/form.interface'

export interface IOption {
	_id: string
	label: string
	value: string
	name: string
}

export interface ISelect extends IFieldProps {
	options: Options<IGenre | IActor>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	name: string
}
