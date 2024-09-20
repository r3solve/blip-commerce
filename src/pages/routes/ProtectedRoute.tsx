import  { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
type ProtectedRouteProps = {
    state:boolean;
    element:ReactElement

}

function ProtectedRoute({state, element}:ProtectedRouteProps) {
    if (state === false) {
        return <Navigate to='/accounts/login' replace />
    }
  return (
     <>{element};</>
  )
}

export default ProtectedRoute