import { createFileRoute } from '@tanstack/react-router'
import { UserHome } from '../../pages/User/UserHome'

export const Route = createFileRoute('/users/create')({
  component: UserHome,
})

