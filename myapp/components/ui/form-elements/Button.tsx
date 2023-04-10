import { IButton } from './form.interface'

const Button = ({ children, className, ...rest }: IButton) => {
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	)
}
export default Button
