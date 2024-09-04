import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/Lautrec400x600.jpg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>PORTRAITS</h3>
        <audio controls src="/PORTRAITSnew.mp3" className={styles.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Being the author of a unique body of works, Toulouse-Lautrec captures
          in these works - as if they were photo snapshots - different aspects
          of daily life in Parisian neighborhoods: a multicultural accumulation
          marked by attitudes, gestures and shapes that convey the truest
          essence of life. Street scenes, interiors, couples, groups or single
          figures are nearly secretly captured and laid bare in their
          spontaneity. One of Lautrec's favorite places, despite his notorious
          rejection of landscape painting as an artistic discipline, was the
          Bois de Boulogne, where he spent many hours sketching members of all
          levels of society walking, horse riding, bicycling or taking public
          transportation, and who are part of this sometimes-unclassifiable
          work. The study of the different poses, gestures, and environment that
          surrounded these subjects shows Lautrec's formal attention, his
          aesthetic interests, and his taste for the atmosphere, which led him
          to develop a peculiar and unique working technique which was marked by
          rapid live-taking. In the sketches made in pastel, sanguine or pencil
          presented in the exhibition, Toulouse-Lautrec's skill as a drawer is
          more than clear. His concise, rapid and incisive stroke manages to
          render in a few marks a whole human story or a very rich atmosphere,
          even in the lack of details. Furthermore, his great skill as a drawer
          would be of paramount importance in his graphic work: Lautrec almost
          always drew directly on stone, and it was rare to see him use
          autographic paper, which would have been impossible without the
          drawing skill he had developed since he was a child.
        </p>
      </div>
    </main>
  );
}
