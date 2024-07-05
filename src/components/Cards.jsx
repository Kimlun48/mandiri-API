import { iconsImgs } from "../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Bank Mandiri</h3>
            </div>
            
            <div className="grid-c-title">
                <span>Tambah Bank</span>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
            </div>      
       

        <div className="grid-c1-content">
            <p>Balance</p>
            <div className="lg-value">Rp 10.000.000</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden"> **** **** **** </span>
                <span>2323</span>
            </div>

            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text">Expired</p>
                    <p className="text text-sm text-white">06/26</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cards
