import {} from 'react';
import './style_home.css';

function Home() {
  return (
    <>
      <section id="banner">

        <div id="banner-text">
            <h1>Somos referência 
                em Oncologia 
                infanto-juvenil</h1>
            <button className="exame">Marque seu exame</button>
        </div>

        <div id="banner-image">
            <img src = ''/>
        </div>

        </section>

        <section id="units">
        <div id="units-title">
            <h2>Nossas unidades</h2>
        </div>

        <div id="units-grid" >
            <div className="unit-image">
                <img src="../img/show_image.jpeg" alt=""/>
                <h3>Instituto Central</h3>
            </div>
            <div className="unit-image">
                <img src="../img/show_image (1).jpeg" alt=""/>
                <h3>Instituto de Psiquiatria</h3>

            </div>
            <div className="unit-image">
                <img src="../img/show_image (2).jpeg" alt=""/>
                <h3>Instituto de Medicina Fisica e Reabilitação</h3>

            </div>
            <div className="unit-image">
                <img src="../img/show_image (3).jpeg" alt=""/>
                <h3>Instituto do Coração</h3>

            </div>
            <div className="unit-image">
                <img src="../img/show_image (4).jpeg" alt=""/>
                <h3>Prédio dos Ambulatórios</h3>

            </div>
            <div className="unit-image">
                <img src="../img/show_image (5).jpeg" alt=""/>
                <h3>Instituto de Ortopedia e Traumatologia</h3>

            </div>
            <div className="unit-image">
                <img src="../img/show_image (6).jpeg" alt=""/>
                <h3>Instituto da criança e do adolescente</h3>

            </div>
            <div className="unit-image">
                <img src="../img/show_image (7).jpeg" alt=""/>
                <h3>Instituto de Radiologia</h3>

            </div>



        </div>
        </section>


        <section id="problem-impact">
        <div className="problem-impact-text"/>
        <nav className="navbar"/>
            <ul>
                <li><h2>Problematica abordada</h2></li>
            </ul>
        </section>


        <div id="banner">

            <div id="problem">
            
                <h3>Dificuldade na entrega de informação credibilizada:</h3>
                    <p>O Hospital das Clínicas tem veículos de informação consolidados (Redes Sociais/Website). A ideia da solução é utilizar esses canais consolidados para direcionar o público alvo para um repositório de informações credibilizado pelo instituto.</p>
                <h3>Didática acadêmica para lidar com as grandes massas:</h3>
                    <p>Um ponto notado durante a análise desse problema é a didática utilizada para a divulgação científica nesses canais. Ela é enviesada pelo dialeto amplamente difundido no meio acadêmico.</p>
                    <p>Entendemos que hoje, as grandes massas podem não estar preparadas para receber e absorver informações formatados pelo viés acadêmico. Alterar o dialeto pode ser um caminho viável para aumentar a aderência do público a solução.</p>
                <h3>Déficit na aderência aos tratamentos e operações:</h3>
                    <p>Conforme levantado pelo instituto, um dos problemas relacionados a diminuição da aderência aos tratamentos é a desinformação. O grupo opta por atacar essa frente, sob a credibilidade de informações mantidas e curadas pelo IC.</p>
            
            </div>

        </div>

        <div id="problem-impact">
        <nav className="navbar">
        <ul>
            <li><h2>Solução do problema</h2></li>
        </ul>
        </nav>

        <div id="banner-2">

        <div id="problem-solving">
            <h2>A solução pode entregar valor em duas escalas:</h2>
            <h3>Micro:</h3>
            <p>Pacientes e seus responsáveis tenderão a compreender melhor os diagnósticos clínicos, contribuindo para uma melhora na aceitação e engajamento no tratamento.</p>
            <p>Tendência de diminuição de perdas relacionadas a falta de informação repassadas a pacientes e responsáveis.</p>
            <p>Pacientes e seus responsáveis terão uma fonte confiável e moldada ao dialeto popular para entregar um conteúdo científico.</p>
            <h3>Macro:</h3>
            <p>Desmistificação de diagnósticos clínicos;
            </p>
            <p>Aumento na absorção e proliferação da divulgação científica nacional;
            </p>
            <p>Melhor aproveitamento das mídias sociais consolidadas dos institutos para entregar frutos da pesquisa científica</p>
                
        </div>

        </div>
        </div>

            </>
          );
        }

export default Home;
