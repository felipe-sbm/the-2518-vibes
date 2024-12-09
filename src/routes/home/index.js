import Libary from "../../components/libary";
import style from "./style.css";

const Home = () => {
  return (
    <div class={style.home}>
      <img
        src="../../assets/the-2518-vibes.webp"
        alt="the-2518-vibes logo"
        height="160"
        width="160"
      />
      <p class={style.a}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        architecto vel corrupti aspernatur ratione harum ad et ullam labore iure
        voluptate optio obcaecati ea, alias nemo praesentium, nam repellat
        porro?
      </p>
      <p class={style.b}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        saepe incidunt nulla, ut reiciendis sint repudiandae possimus
        repellendus et quis beatae dicta aliquid iste quibusdam? Assumenda
        dolore nam culpa asperiores.
      </p>
      <p class={style.c}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa
        quos odit consectetur. Quasi, ullam atque quidem, beatae recusandae
        blanditiis corporis fugit facere at reiciendis magnam aperiam nam iste
        eum.
      </p>
      <p class={style.d}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates
        labore saepe totam optio. Soluta quae accusantium iusto eos impedit iure
        minima modi porro, illo quo excepturi maiores enim rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, atque
        quia, commodi dicta placeat ut veniam dolorem eaque odit esse quaerat
        distinctio, voluptatibus dolorum vel fugiat illo saepe velit impedit?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus optio
        ipsum obcaecati voluptas earum ducimus natus, officia tempora?
        Laboriosam voluptatem facilis, fugit dolor nam ad quo quos modi
        perferendis aspernatur.
      </p>
      <Libary />
      <section>
        <Resource
          title="This"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://fsbm.vercel.app"
        />
      </section>
    </div>
  );
};

const Resource = (props) => {
  return (
    <a href={props.link} class={style.resource}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default Home;
