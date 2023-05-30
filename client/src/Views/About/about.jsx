import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.background}>
      <div className={style.topnav}>
        <a className={style.active} href="/home">
          Home
        </a>
      </div>
      <div className={style.about}>
        <div className={style.titulo}>
          <h1>Individual Project by: Federico Cativiela</h1>
        </div>
        <div className={style.parrafo}>
          <p>
          This single-page application (SPA) was developed utilizing React.js, Redux, Node.js, Express,
          and Sequelize. It has presented a considerable challenge, but I am delighted to declare that 
          it has now been successfully completed.
          </p>
        </div>
      </div>
    </div>
  );
}
