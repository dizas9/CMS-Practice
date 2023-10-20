import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import './layout.css'
import Main from "../Main Section/main";
function Layout(){
return(
    <>
      <div className="container">
        <Sidebar/>
        <Header/>
        <Main/>
      </div>
    </>
)
}

export default Layout;