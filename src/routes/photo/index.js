import Library from "/components/library";
import style from "./style.css";

const Home = () => {
    return (
        <div className={style.home}>
            <img
                src={require("/assets/the-2518-vibes.webp")}
                alt="the-2518-vibes logo"
                height="160"
                width="160"
            />
            <p className={style.a}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                architecto vel corrupti aspernatur ratione harum ad et ullam labore iure
                voluptate optio obcaecati ea, alias nemo praesentium, nam repellat
                porro?
            </p>
            <Library />
        </div>
    );
};

export default Home;
