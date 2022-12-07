import LynlakkLogo from "../assets/LynlakkLogoHeader.png";

function Header() {
  return (
    <div className="HeaderCont">
      <div className="HeaderCont1">
        <img src={LynlakkLogo} alt="Logo Lynlakk" className="TopLogo" />
        <ul className="MenuTop">
          <li>Service</li>
          <li>Om Oss</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
