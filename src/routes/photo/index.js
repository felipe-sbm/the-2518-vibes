import Library from "/components/library";
import style from "./style.css";

const Photo = () => {
    return (
        <div className={style.home}>
            <img
                src={require("/assets/the-2518-vibes.webp")}
                alt="the-2518-vibes logo"
                height="160"
                width="160"
            />
            <p className={style.a}>
            These are the vibes of the 2518. Images that remember the past and the good and bad momemories that I got.
            </p>
            <Library />
        </div>
    );
};

export default Photo;
