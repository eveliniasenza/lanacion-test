import React from 'react';
import Card from "../Card";
import {Col} from "../Col";
import {Row} from "../Row";
import styles from './Box.module.css'

const mockedArticles = [
  {
    category: 'Análisis',
    title: "La amenaza verde",
    author: "Fernando Laborda",
    image:'https://assets.entrepreneur.com/content/3x2/2000/20160316185554-dolares-dolores.png?width=700&crop=2:1'  },
  {
    category: 'Inspirador',
    title: "La historia de Carlo Acutis, el adolescente italiano que será beato",
    author: "Elisabetta Pique",
    image: 'https://album.mediaset.es/eimg/10000/2020/10/02/clipping_VPyrZF_9ac5.jpg?w=480'
  },
  {
    category: 'Dejó el hospital',
    title: "Desafiante, Trump llegó a la casa blanca y se sacó el barbijo",
    author: "Rafael Mathus Ruiz",
    image: 'https://i2.wp.com/www.quediario.com.ar/wp-content/uploads/2020/10/3426627h768.jpg?resize=696%2C464&ssl=1'
  },
  {
    category: 'Coronavirus',
    title: "La autoridad sanitaria de EE.UU. confirma que se transmite por aire",
    author: "The Washington Post",
    image: 'https://bucket2.glanacion.com/anexos/fotos/05/3377205h186.jpg'
  },
  {
    category: 'Matar al peso',
    title: "El radical consejo de un economista norteamericano a la Argentina",
    image: 'https://es.mercopress.com/data/cache/noticias/77211/0x0/ar.jpg'
  },
  {
    category: 'Mike Rockefeller',
    title: "El heredero rebelde que se esfumó entre caníbales y cocodrilos",
    author: "German Wille",
    image: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/212450.jpg'
  },
  {
    category: 'Análisis',
    title: "La amenaza verde",
    author: "Fernando Laborda",
    image:'https://assets.entrepreneur.com/content/3x2/2000/20160316185554-dolares-dolores.png?width=700&crop=2:1'  },
  {
    category: 'Inspirador',
    title: "La historia de Carlo Acutis, el adolescente italiano que será beato",
    author: "Elisabetta Pique",
    image: 'https://album.mediaset.es/eimg/10000/2020/10/02/clipping_VPyrZF_9ac5.jpg?w=480'
  },
  {
    category: 'Dejó el hospital',
    title: "Desafiante, Trump llegó a la casa blanca y se sacó el barbijo",
    author: "Rafael Mathus Ruiz",
    image: 'https://i2.wp.com/www.quediario.com.ar/wp-content/uploads/2020/10/3426627h768.jpg?resize=696%2C464&ssl=1'
  },
]

const allowedTotalArticles = [3, 6, 9]

const Box = ({title, totalArticles}) => {
  if (!allowedTotalArticles.includes(totalArticles)) {
    totalArticles = 6
  }

  const articles = mockedArticles.splice(0, totalArticles)

  return(
    <div>
      { title && (
        <>
          <h2 className={`font-primary ${styles.h2}`}>
            {title}
          </h2>
          <hr className={styles.hr}/>
        </>
      ) }
      <Row>
        { articles.map(article => (
          <Col>
            <Card
              category={article.category}
              title={article.title}
              author={article.author}
              image={article.image}
            />
          </Col>
        )) }
      </Row>
    </div>
  )
}

export default Box;