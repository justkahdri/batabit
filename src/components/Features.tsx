import React from 'react'

const Features = () => {
    const features = [
        {title: 'Tiempo real', description: 'Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'},
        {title: 'No hay tasas escondidas', description: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'},
        {title: 'Compara monedas', description: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'},
        {title: 'Información confiable', description: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'}
    ];

    return (
        <section className="features">
          <div className="features--title-container">
            <h2>Creamos un producto sin comparación.</h2>
            <p>Confiable y diseñado para su uso diario.</p>
            {features.map(({title, description}) => <article><i>a</i>
            <h3>{title}</h3>
            <p>{description}</p> </article>)}
          </div>
        </section>
    )
}

export default Features
