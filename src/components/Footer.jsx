export default function Footer() {
    return (
        <div style={{ padding: "12px 0px", backgroundColor: "rgb(232, 227, 227)", textAlign: 'center', width: '100%', height: 'auto' }}>
            <div className="text-center">
                <h5>
                    Developed and Maintained by  <a href="https:www.makemycelebrations.com/" style={{ textDecoration: "none", color: "red" }}>Make My Celebrations</a>
                </h5>
            </div>

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/akshata-ganbote-7a3847247/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://akshata-ganbote.netlify.app/" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://github.com/AkshataGanbote" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{ fontSize: "21px" }}></i>
                </a>

                <a href="mailto:akshataganbote61843@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{ fontSize: "21px" }}></i>
                </a>
            </div>
        </div>
    );
}
