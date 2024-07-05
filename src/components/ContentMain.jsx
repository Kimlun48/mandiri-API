import "../components/ContentMain.css";
import Cards from "./Cards";


const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <h4 className="text-white"> Selamat datang kembali <bold>Super Admin</bold>👋, dashboard Anda sudah siap!</h4>
        <div className="content-grid-one">
            <Cards/>
        </div>
    </div>
  )
}

export default ContentMain
