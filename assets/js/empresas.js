
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("footer")) {
        document.getElementById("footer").innerHTML = `
           <div class="footer-main" style="margin-top: 20px">
        <div class="container">
            <div class="row items align-items-center">
                <div class="col-lg-3 col-md-4 col-12 item">
                    <div class="widget-brand-info">
                        <div class="widget-brand-info-main">
                            <a href="index.html" class="logo" title="PathSoft">
                                <img src="assets/img/Unita/Logo_unita_vertical_branca.png" alt="Unitá Logo" data-loaded="true" style="opacity: 1;">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md item">
                    <div class="footer-item">
                        <nav class="footer-nav">
                            <ul class="footer-mnu footer-mnu-line">
                                <li><a href="#!" class="hover-link" data-title="Home"><span>Página Inicial</span></a></li>
                                <li><a href="#!" class="hover-link" data-title="About us"><span>Sobre Nós</span></a></li>
                                <li><a href="#!" class="hover-link" data-title="Services"><span>Serviços</span></a></li>
                                <li><a href="#!" class="hover-link" data-title="Contacts"><span>Fale conosco</span></a></li>
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
										<a href="services.html" data-title="Serviços">
											<span>Serviços</span>
										</a>
									</li>
									<li>
										<a href="tabs-and-accordions.html" data-title="Política de privacidade">
											<span>Política de privacidade</span>
										</a>
									</li>
									<li>
										<a href="news.html" data-title="Novidades">
											<span>Novidades</span>
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
								<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
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
								<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it.</div>
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
								<div class="iitem-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</div>
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
								<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
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
								<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
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
								<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
							</a>
						</div>
        `;
    }
});

const empresas = [
    {
        "id": 1,
        "nome": "Ezco Soluções em Gestão",
        "logo": "assets/img/ezco/logo_ezco_horizontal.png",
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
        <ul style= "padding-left: 10px">
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
        "logo": "assets/img/affarone/logo_affarone.png",
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
        "site": `<a href="https://affarone.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Affarone Construção & Incorporação</span></a>`,
        "fale_conosco": `Fale conosco a respeito da Affarone`
    },
    {
        "id": 3,
        "nome": "Bel Fiore Gelato",
        "logo": "assets/img/ezco/logo_ezco_horizontal.png",
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
        <ul style= "padding-left: 10px">
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
        "fale_conosco": "Fale conosco a respeito da Ezco Soluções em Gestão"
    },
    {
        "id": 4,
        "nome": "BRZ Consultoria",
        "logo": "assets/img/ezco/logo_ezco_horizontal.png",
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
        <ul style= "padding-left: 10px">
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
        "fale_conosco": "Fale conosco a respeito da Ezco Soluções em Gestão"
    },
    {
        "id": 5,
        "nome": "Jeed Mobilidade",
        "logo": "assets/img/ezco/logo_ezco_horizontal.png",
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
        <ul style= "padding-left: 10px">
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
        "fale_conosco": "Fale conosco a respeito da Ezco Soluções em Gestão"
    },
    {
        "id": 6,
        "nome": "Brain Algorithms",
        "logo": "assets/img/ezco/logo_ezco_horizontal.png",
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
        <ul style= "padding-left: 10px">
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
        "fale_conosco": "Fale conosco a respeito da Ezco Soluções em Gestão"
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
        document.getElementById("lista_topicos").innerHTML = `${empresas[index].lista}`
        document.getElementById("btn_site").innerHTML = `${empresas[index].site}`
        document.getElementById("fale_conosco_titulo").innerText = `${empresas[index].fale_conosco}`
    }
};
