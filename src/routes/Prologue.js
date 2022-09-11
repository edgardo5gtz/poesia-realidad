import Page from "../Page";

const Prologue = () => {
  return <Page title={<PrologueTitle />} content={<PrologueContent />} />;
};

const PrologueTitle = () => (
  <>
    <div>Prólogo del autor</div>
    <div>Por Carlos Alfredo Hernandez Alatorre</div>
    <div>Poeta y escritor</div>
  </>
);

const PrologueContent = () => (
  <>
    <p>
      El poeta Jorge Gutierrez Torres, por medio de su poesia profunda,
      nostálgica y evocadora, busca trascender el rostro cruel y frío del
      silencio y el olvido, para dar paso a la inmortalidad de momentos
      gloriosos, sublimes y dolorosos, que se han grabado para siempre en lo más
      profundo de su alma y de su corazón, en su largo andar por los sinuosos y
      azarosos caminos de este mundo.
    </p>
    <p>
      En las sendas infatigables de sus versos, encontrarán escritas con letras
      de oro en el pavimento azul de sus recuerdos, todad una gama de momentos
      felices, sublimes y traumáticos, que dejaron una honda huella en su alma
      sensible de poeta. Ahí encontrarán lo mismo que el canto romántico y
      sublime a la eterna y dulce compañera de sus pasos, el recuerdo
      inolvidable de su amada madre, aquella dulce y abnegada mujer que se fue
      un día para siempre por los insondables caminos de la eternidad, para ir
      radiante a su encuentro con Dios. La nostalfia de un tiempo que se fue
      para no volver, el recuerdo de una fresca primavera, el otoño con sus
      hojas que cayeron... y el invierno de una vida que se va.
    </p>
    <p>
      Ahora ya puede descansar tu alma en paz, poeta, en esta pequeña obra
      literaria, compendio de tus alegrías, amores, tristezas y sinsabores, has
      dejado plasmada con letras, la historia de tu vida larga y productiva y tu
      recuerdo inborrble vivirá perenne e inmortal en la memoria de todos los
      seres que te aman...
    </p>
    <p>Y no morirá jamás.</p>
  </>
);

export default Prologue;
