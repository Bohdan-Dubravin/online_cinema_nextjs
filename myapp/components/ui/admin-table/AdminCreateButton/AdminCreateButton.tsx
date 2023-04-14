import Button from '@/ui/form-elements/Button'

const AdminCreateButton = ({ onClick }: { onClick?: () => void }) => {
	return <Button onClick={onClick}>Create new</Button>
}

export default AdminCreateButton
