import Page from "../Page";

const Bibliography = () => (
  <Page
    title={"Biografia e Historia del Autor"}
    content={<BibliographyContent />}
  />
);

const BibliographyContent = () => (
  <>
    Naci en Guadalajara, Jalisco un dia 18 de Marzo de 1934 en la calle de Juan
    Alvarez 818 Barrio del Capilla de Jesús, hijo de Enrique Gutierrez Alvarez y
    Amparo Torres Torres, mis hermanos Enrique Maria de la Luz, Francisco
    Javier, Gustavo, Dolores Raulina, Germán, nacidos los 3 primeros en el
    estado de Nuevo Mexico (USA) y los 4 últimos en Guadalajara.
  </>
);

export default Bibliography;
