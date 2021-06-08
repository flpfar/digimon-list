export const DigimonCard = ({digimon}) => (
  <article>
    <img loading="lazy" src={digimon.img} alt={digimon.name} style={styles.image} />
    <p>{digimon.name}</p>
  </article>
)

const styles = {
  image: {
    width: '100px'
  }
}