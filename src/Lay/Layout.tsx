
import { Outlet } from 'react-router-dom'
import Header from '../components/static/Header'

const layout = () => {
  return (
    <div>
<Header/>
        <Outlet/>


    </div>
  )
}

export default layout