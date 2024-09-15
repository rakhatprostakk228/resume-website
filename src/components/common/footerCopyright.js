import eyes from '../../assets/images/eyes.png';

function FooterCopyright() {
    return (
        <div className="footerCopyright">
            <div className="container">
                <div className="copyright">©2024 Created by RakhatProstakk</div>
                <div className="toTop"><img src={eyes} alt='eyes' /></div>
            </div>
        </div>
    )
}

export default FooterCopyright;