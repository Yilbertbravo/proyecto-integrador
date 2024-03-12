import { Box } from "@mui/material";
import "./about.scss";

const About = () => {
    return (
        <Box className="about">
            <Box
                component="section"
                className="about__section">
                <h3>Misión</h3>
                <img
                    src="/images/about/mision.png"
                    alt="Fotrografía de la misión de la empresa"/>
                <p>Proporcionar las tecnologías más innovadoras a medida de las necesidades personales, con el
                        objetivo de incrementar
                        su competitividad y productividad. Para ello implementamos sla busqueda de articulos
                        electrónicos prácticas adaptados a sus necesidades donde desarrollamos nuevas soluciones
                        creativas para el bienestar de nuestros clientes.</p>
            </Box>

            <Box
                component="section"
                className="about__section about__section--vision">
                <h3>Visión</h3>
                <img
                    src="/images/about/vision.png"
                    alt="Fotrografía de la visión de la empresa"/>
                <p>Proporcionar las tecnologías más innovadoras a medida de las necesidades personales, con el
                        objetivo de incrementar su competitividad y productividad. Para ello implementamos sla busqueda
                        de articulos electrónicos prácticas adaptados a sus necesidades donde desarrollamos nuevas
                        soluciones creativas para el bienestar de nuestros clientes.</p>
            </Box>

        </Box>
    );
};

export default About;