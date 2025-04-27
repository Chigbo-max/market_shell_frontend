import { Outlet } from "react-router-dom"
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/footer'
function MainLayout() {
  return (
    <div>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      
    </div>
  )
}

export default MainLayout
