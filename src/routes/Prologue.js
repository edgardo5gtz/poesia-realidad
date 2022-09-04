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
    El poeta Jorge Gutierrez Torres, por medio de su poesia profunda, nostalgica
    y evocadora, busca trascender el rostro cruel y frio del silencio y el
    olvido, para dar paso a la inmortalidad de momentos gloriosos, sublimes y
    dolorosos, que se han grabado para siempre en lo mas profundo de su alma y
    de su corazon, en su largo andar por los sinuosos y azarosos caminos de este
    mundo.
  </>
);

export default Prologue;
