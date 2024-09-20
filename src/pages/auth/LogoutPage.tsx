import { useEffect } from "react"
import { Navigate } from "react-router-dom"

function LogoutPage() {
    useEffect(()=>{
        localStorage.removeItem('user')
    },[])
  return (
    <Navigate to={'/'} replace />
  )
}

export default LogoutPage