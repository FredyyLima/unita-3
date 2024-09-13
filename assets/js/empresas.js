
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("footer")) {
        document.getElementById("footer").innerHTML = `
           <div class="footer-main" style="margin-top: 20px">
        <div class="container">
            <div class="row items align-items-center">
                <div class="col-lg-3 col-md-4 col-12 item">
                    <div class="widget-brand-info">
                        <div class="widget-brand-info-main">
                            <a href="index.html" class="logo" title="Unitá">
                                <img src="assets/img/Unita/logo_unita_vertical_branca.png" alt="Unitá Logo" data-loaded="true" style="opacity: 1;">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md item">
                    <div class="footer-item">
                        <nav class="footer-nav">
                            <ul class="footer-mnu footer-mnu-line">
                                <li><a href="index.html" class="hover-link" data-title="Página inicial"><span>Página Inicial</span></a></li>
                                <li><a href="about-us.html" class="hover-link" data-title="Sobre Nós"><span>Sobre Nós</span></a></li>
                                <li><a href="contacts.html" class="hover-link" data-title="Fale conosco"><span>Fale conosco</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row justify-content-between items">
                <div class="col-md-auto col-12 item">
                    <nav class="footer-links">
                        <ul>
                            <li><a href="terms-and-conditions.html">Termos e condições</a></li>
                            <li><a href="privacy-policy.html">Politica de privadicade</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-auto col-12 item">
                    <div class="copyright">© 2024 Unitá - Todos os direitos reservados</div>
					<div>
						<p>Editado por <a href="https://linktr.ee/fredyycarneiro">FredyyCarneiro</a></p>
					</div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
    if (document.getElementById("topper")) {
        document.getElementById("topper").innerHTML = `
            <nav class="header-fixed">
        <div class="container">
            <div class="row flex-nowrap align-items-center justify-content-between">
                <div class="col-auto header-fixed-col logo-wrapper" >
                    <a href="index.html" class="logo" title="Unitá Holding">
                        <img src="assets/img/Unita/Logo_unita_horizontal.png" alt="Unitá Holding">
                    </a>
                </div>
                <div class="col-auto col-xl col-static header-fixed-col d-none d-xl-block">
                    <div class="row flex-nowrap align-items-center justify-content-end">
                        <div class="col header-fixed-col d-none d-xl-block col-static">
                            <!-- Begin main menu -->
							<nav class="main-mnu">
								<ul class="main-mnu-list">
									<li>
										<a href="index.html" data-title="Página inicial">
											<span>Página inicial</span>
										</a>
									</li>
									<li>
										<a href="about-us.html" data-title="Sobre Nós">
											<span>Sobre Nós</span>
										</a>
									</li>
									<li>
										<a href="contacts.html" data-title="Fale Conosco">
											<span>Fale Conosco</span>
										</a>
									</li>
								</ul>
							</nav><!-- End main menu -->
                        </div>
                    </div>
                </div>
                <div class="col-auto d-block d-xl-none header-fixed-col">
                    <div class="main-mnu-btn">
                        <span class="bar bar-1"></span>
                        <span class="bar bar-2"></span>
                        <span class="bar bar-3"></span>
                        <span class="bar bar-4"></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
        `;
    }
    if (document.getElementById("mobile_menu")) {
        document.getElementById("mobile_menu").innerHTML = `
            						<li>
							<a href="index.html">Página inicial</a>
						</li>
						<li>
							<a href="about-us.html">Sobre Nós</a>
						</li>
						<li>
							<a href="services.html">Serviços</a>
						</li>
						<li>
							<a href="tabs-and-accordions.html">Politica de privacidade</a>
						</li>
						<li>
							<a href="news.html">Novidades</a>
						</li>
						<li>
							<a href="contacts.html">Fale conosco</a>
						</li>
        `;
    }
    if (document.getElementById("menu_empresas")) {
        document.getElementById("menu_empresas").innerHTML = `
           <div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(1)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">corporate_fare</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">corporate_fare</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Ezco Gestão em Saúde</h3>
								<div class="iitem-desc">Especialista em soluções inovadoras na área de saúde, a Ezco otimiza processos de gestão hospitalar e serviços de saúde, garantindo eficiência e qualidade no atendimento.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(2)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">support_agent</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">support_agent</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Affarone Construção & Incorporação</h3>
								<div class="iitem-desc">A Affarone se destaca na construção civil, desenvolvendo projetos residenciais, comerciais e industriais, com foco em sustentabilidade e inovação no setor imobiliário.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-12 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(3)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">cloud_download</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">cloud_download</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Bel Fiore Gelato</h3>
								<div class="iitem-desc">Especialista em sorvetes artesanais, a Belfiore Gelato traz sabores únicos e ingredientes naturais, proporcionando uma experiência refrescante e saborosa aos amantes de alimentos gelados.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(4)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">corporate_fare</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">corporate_fare</i>
								</div>
								<h3 class="iitem-heading item-heading-large">BRZ Consultoria</h3>
								<div class="iitem-desc">A BRZ oferece consultoria estratégica para empresas e gestão pública, promovendo eficiência operacional, inovação e resultados transformadores em diversas áreas de negócios.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(5)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">corporate_fare</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">corporate_fare</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Jeed Mobilidade</h3>
								<div class="iitem-desc">Com soluções práticas em locação de veículos, a Jeed Mobilidade atende às necessidades de transporte, oferecendo flexibilidade e conveniência para empresas e clientes particulares.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(6)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">corporate_fare</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">corporate_fare</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Brain Algorithms</h3>
								<div class="iitem-desc">A Brain Algorithms desenvolve soluções tecnológicas customizadas, utilizando inteligência artificial e IoT para otimizar a produtividade e reduzir incertezas em diversos setores empresariais.</div>
							</a>
						</div>
        `;
    }
});

const empresas = [
    {
        "id": 1,
        "nome": "Ezco Soluções em Gestão",
        "logo": "assets/img/Ezco/logo_ezco_horizontal.png",
        "lista": `
        <ul>
            <h5>Gestão na área da saúde</h5>

            <li>Gestão integral dos serviços de saúde</li>
            <li>Contratação de recursos humanos e profissionais de saúde</li>
            <li>Fornecimento de sistemas de saúde e gestão de indicadores</li>
            <li>Terceirização de serviços de saúde</li>
            <li>Gestão de hospitais e unidades de saúde (SAMU, UPA, UBS)</li>
            <li>Fornecimento de medicamentos, materiais médicos, equipamentos e insumos</li>
            <li>Fornecimento de equipamentos e tecnologia em saúde</li>
        </ul>
            </br>
        <ul>
            <h5>Tecnologia e soluções em saúde</h5>
            <li>Data Center (Big Data) de saúde</li>
            <li>Softwares de saúde</li>
            <li>Outsourcing de informática e equipamentos de saúde</li>
            <li>Desenvolvimento de tecnologia para saúde</li>
            <li>Cartão Saúde e Prontuário Eletrônico</li>
            <li>TV Saúde</li>
            <li>Gestor de filas</li>
            <li>Sistema de Gestão de Saúde Pública</li>
            <li>Sistema de Gestão Hospitalar</li>
        </ul>
        </br>`,
        "site": `<a href="https://ezco.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Ezco Soluções em Gestão</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Ezco"
    },
    {
        "id": 2,
        "nome": "Affarone Construção & Incorporação",
        "logo": "assets/img/Affarone/logo_affarone.png",
        "lista": `
        <ul>
            <h5>Saneamento Básico</h5>
            <li>
                A <strong>AFFARONE</strong> planeja, projeta e executa sistemas de tratamento de esgoto com tecnologia avançada de lodos ativos e fornecimento de ar por difusão, otimizando o consumo de energia.
                O sistema pode ser alimentado por energia fotovoltaica, reduzindo custos operacionais, e oferece uma eficiência de até 97% na remoção de DBO,
                permitindo o reuso de efluentes em jardins ou limpeza pública. 
                Além disso, a empresa projeta estações elevatórias de esgoto adaptadas para diferentes projetos, incluindo obras residenciais e sistemas públicos.
            </li>
        </ul>
            
        <ul>
            <h5>Gestão de águas</h5>
            <li>
                A gestão de recursos hídricos envolve o controle e proteção das águas por meio de legislação, sistemas de monitoramento e cadastro de usuários.
                As operações incluem cobrança, fiscalização, manutenção de infraestruturas hídricas e controle de eventos críticos.
                A <strong>AFFARONE</strong> gerencia redes de fornecimento de água e tratamento de esgoto, cuidando de tarifas, atendimento ao consumidor,
                emissão de faturas e operação de estações de abastecimento e laboratórios de análises ambientais.
            </li>
        </ul>
        
        <ul>
            <h5>Obras públicas</h5>
            <li>
                A equipe de engenharia da <strong>Affarone</strong> realiza projetos de infraestrutura, como alargamento de leitos de rios, construção de rodovias,
                usinas hidrelétricas, portos, aeroportos, ferrovias, redes de distribuição de água e tratamento de esgoto. O trabalho abrange desde
                o levantamento de informações e elaboração de projetos até a execução e fiscalização de obras, mapeando todas as fases do processo até a entrega final.
            </li>
        </ul>

        <ul>
            <h5>Desenvolvimento urbano</h5>
            <li>
                A <strong>AFFARONE</strong> planeja, projeta e executa loteamentos residenciais, industriais e comerciais com foco em sustentabilidade e tecnologias de smart cities.
                A empresa também atua no desenvolvimento urbano, elaborando planos diretores municipais e apoiando o zoneamento e planejamento urbano,
                assegurando a normatização e fiscalização de obras para promover o desenvolvimento econômico, social e ambiental das cidades.
            </li>
        </ul>
        `,
        // "site": `<a href="https://affarone.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Affarone Construção & Incorporação</span></a>`,
        "fale_conosco": `Fale conosco a respeito da Affarone`
    },
    {
        "id": 3,
        "nome": "Bel Fiore Gelato",
        "logo": "assets/img/Belfiore/Logo_belfiore_sem_fundo.png",
        "lista": `
        <ul>
            <h5>Nossa linha de produtos</h5>

            <li><strong>AÇAÍKE:</strong> linha de açaí com sabores variados, perfeita para quem busca uma opção saudável e saborosa.</li>
            <li><strong>GELATO:</strong> Sorbets cremosos que trazem o verdadeiro sabor em cada colherada.</li>
            <li><strong>LOS PETALOS:</strong> Paletas recheadas, uma explosão de sabores e texturas que conquistam todos que provam.</li>
            <li><strong>BELFRUTTI:</strong> Picolés refrescantes, ideais para se deliciar em qualquer momento do dia.</li>
        </ul>`,
        "site": `<a href="https://belfiorealimentos.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Bel Fiore Gelato</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Belfiore"
    },
    {
        "id": 4,
        "nome": "BRZ Consultoria",
        "logo": "assets/img/BRZ/Logo_BRZ.jpg",
        "lista": `
        <div>
            <ul>
                <h5>Governo e serviços públicos</h5>

                <h6> Assesoria e consultoria</h6>
                <li>Banco Internacional de Reconstrução e Desenvolvimento</li>
                <li>Assessoria à Consórcio intermunicipais e associações de municípios</li>
                <li>Planos e programas de governo</li>
                <li>Planejamento, orçamento e gestão</li>
            </ul>
                </br>
            <ul>
                <h6>Serviços</h6>
                <li>Projetos para agências multilaterais de cooperação</li>
                <li>Empréstimos e financiamentos nacionais e internacionais</li>
                <li>Gestão de empresas públicas e autarquias</li>
                <li>Concessão de ativos públicos</li>
            </ul>
            </br>
        </div>

        <div>
            <h5>Instituições e setor privado</h5>
            <ul>    
                <h6>Estratégia empresarial</h6>
                <li>Montagem e análise de estudos de viabilidade</li>
                <li>Reestruturação empresarial e financeira</li>
                <li>Desenvolvimento de estudos e pesquisas de mercado</li>
                <li>Desenvolvimento estratégico de empresas</li>
                <li>Identificação de oportunidades</li>
                <li>Planejamento tributário</li>
                <li>Planejamento sucessório</li>
                <li>Blindagem patrimonial</li>
                <li>Desenvolvimento de soluções customizadas para empresas com utilização de IA</li>
            </ul>
                    </br>
            <ul>    
                <h6>Captação de recursos</h6>
                <li>Operações de crédito</li>
                <li>Captação via fundos de investimento</li>
                <li>Renegociação e alongamento de passivos</li>
                <li>Estruturação de venda de empresas e busca de investidores</li>
                <li>M&A</li>
                <li>Planejamento e coordenação de IPOs</li>
                <li>Emissão de debêntures</li>
            </ul>
                                </br>
            <ul>    
                <h6>Governança empresarial</h6>
                <li>Estruturação e coordenação de conselho de administração</li>
                <li>Governança corporativa</li>
                <li>Compliance</li>
                <li>Auditoria preventiva e corretiva</li>
                <li>Implantação de sistemas antifraude</li>
            </ul>
        </div>
            </br>`,
        "site": `<a href="https://brzparticipacoes.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>BRZ Consultoria</span></a>`,
        "fale_conosco": "Fale conosco a respeito da BRZ"
    },
    {
        "id": 5,
        "nome": "Jeed Mobilidade",
        "logo": "assets/img/Jeed/logo_jeed.png",
        "lista": `
        <ul>
            <li>
            A Jeed Mobilidade é uma empresa especializada na locação de veículos, oferecendo soluções ágeis e flexíveis para empresas e indivíduos que buscam praticidade e economia.
            Com uma frota diversificada e moderna, a Jeed atende às necessidades de transporte de diversos perfis de clientes, desde veículos para o uso cotidiano até opções para viagens
            corporativas e turismo. A empresa se destaca pela qualidade no atendimento, pela manutenção rigorosa de seus veículos e por oferecer pacotes personalizados,
            permitindo que seus clientes desfrutem de uma experiência segura e confortável.
            </li>
        </ul>
        </br>`,
        // "site": `<a href="https://jeedmobilidade.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Jeed Mobilidade</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Jeed"
    },
    {
        "id": 6,
        "nome": "Brain Algorithms",
        "logo": "assets/img/Brainalgorithms/logo_brain.png",
        "lista": `
  <p>
    A <strong>Brain Algorithms</strong> é uma empresa de tecnologia voltada para a criação de soluções avançadas utilizando 
    Inteligência Artificial (IA) e Internet das Coisas (IoT), com o objetivo de potencializar a produtividade e a rentabilidade de empresas.
  </p>

  <p>
    Com uma equipe altamente capacitada, a Brain Algorithms desenvolve algoritmos personalizados para resolver desafios específicos de 
    setores como gestão, recursos humanos, logística, vendas, transporte e muito mais. Nossos cases de sucesso comprovam ganhos significativos, 
    como um aumento de até 66% no lucro líquido das empresas atendidas.
  </p>
  <ul>
    <li><strong>Inteligência Artificial:</strong> Implementamos soluções de IA para melhorar a tomada de decisões e automatizar processos, 
    permitindo que as empresas se tornem mais eficazes e produtivas.</li>
    
    <li><strong>Internet das Coisas (IoT):</strong> A Brain utiliza IoT para ampliar o acesso à informação, monitorar operações em tempo real 
    e reduzir incertezas, proporcionando maior controle sobre todas as etapas dos negócios.</li>

    <li><strong>Big Data:</strong> Coletamos e analisamos grandes volumes de dados, transformando informações em estratégias valiosas que 
    aumentam a competitividade no mercado.</li>
  </ul>

  <p>
    A Brain Algorithms acredita que a transformação digital é o caminho para o sucesso nas próximas décadas. Ao integrar tecnologias emergentes 
    às operações do dia a dia, proporcionamos um novo nível de eficiência e inovação às empresas que desejam se destacar no cenário global.
  </p>

  <p>
    Explore como a <strong>Brain Algorithms</strong> pode revolucionar o seu negócio com soluções inteligentes e personalizadas, desenvolvidas 
    para maximizar o seu potencial na Era da Informação.
  </p>
        </br>`,
        "site": `<a href="https://brainalgorithms.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Brain Algorithms</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Brain Algorithmss"
    }
]


function selecionarEmpresa(Empresa) {
    localStorage.setItem('idEmpresa', Empresa);
    window.location.href = 'single-service.html';  // Redireciona para a página do produto
}

window.onload = function() {
    const EmpresaSelecionada = localStorage.getItem('idEmpresa');

   const index = empresas.findIndex((empresa) => {
        return +empresa.id === +EmpresaSelecionada
   })
   console.log(index)
   console.log(empresas[index].nome)
   console.log(empresas[index].descricao)
   console.log(empresas[index].img)
    if (index > -1) {
        document.getElementById("nome_empresa").innerText = `${empresas[index].nome}`
        // document.getElementById("nome_empresa_h1").innerText = `${empresas[0].nome}`
        document.getElementById("titulo").innerText = `${empresas[index].nome}`
        document.getElementById("img_empresa").src = `${empresas[index].logo}`

        if (empresas[index].nome === "Brain Algorithms"){
            document.getElementById("img_empresa").style.backgroundColor ="#062b4d"
        }
        document.getElementById("lista_topicos").innerHTML = `${empresas[index].lista}`

        if(empresas[index].site != undefined){
        document.getElementById("btn_site").innerHTML = `${empresas[index].site}`
        }
        document.getElementById("fale_conosco_titulo").innerText = `${empresas[index].fale_conosco}`
    }
};
