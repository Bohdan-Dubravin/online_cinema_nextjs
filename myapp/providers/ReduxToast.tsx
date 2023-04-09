import ReduxToastr from 'react-redux-toastr'

const ReduxToast = () => {
	return (
		<ReduxToastr
			newestOnTop
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast
