import cn from 'classnames'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = ({ className, ...rest }: SkeletonProps) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#2c2f35"
			className={cn('rounded-lg', className)}
			highlightColor="#60626d"
		/>
	)
}

export default SkeletonLoader
