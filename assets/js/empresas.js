
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("footer")) {
        document.getElementById("footer").innerHTML = `
           <div class="footer-main" style="margin-top: 20px">
        <div class="container">
            <div class="row items align-items-center">
                <div class="col-lg-3 col-md-4 col-12 item">
                    <div class="widget-brand-info">
                        <div class="widget-brand-info-main">
                            <a href="index.html" class="logo" title="Unità">
                                <img src="assets/img/Unita/logo_unita_vertical_branca.png" alt="Unità Logo" data-loaded="true" style="opacity: 1;">
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
                    <div class="copyright">© 2024 Unità - Todos os direitos reservados</div>
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
                    <a href="index.html" class="logo" title="Unità Holding">
                        <img src="assets/img/Unita/Logo_unita_horizontal.png" alt="Unità Holding">
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
							<a href="contacts.html">Fale conosco</a>
						</li>
        `;
    }
    if (document.getElementById("menu_empresas")) {
        document.getElementById("menu_empresas").innerHTML = `
           <div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(1)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">emergency</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">emergency</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Ezco Soluções em Gestão</h3>
								<div class="iitem-desc">Especialista em soluções inovadoras na área de saúde, a Ezco otimiza processos de gestão hospitalar e serviços de saúde, garantindo eficiência e qualidade no atendimento.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(2)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">engineering</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">engineering</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Affarone Construção & Incorporação</h3>
								<div class="iitem-desc">A Affarone se destaca na construção civil, desenvolvendo projetos residenciais, comerciais e industriais, com foco em sustentabilidade e inovação no setor imobiliário.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-12 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(3)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">cameraoutdoor</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">cameraoutdoor</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Telsa</h3>
								<div class="iitem-desc">Inovação em segurança pública, mobilidade e educação. Soluções tecnológicas avançadas para um mundo mais protegido e inteligente. Conectando pessoas, cidades e dados com excelência.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(4)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">trending_up</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">trending_up</i>
								</div>
								<h3 class="iitem-heading item-heading-large">BRZ Consultoria</h3>
								<div class="iitem-desc">A BRZ oferece consultoria estratégica para empresas e gestão pública, promovendo eficiência operacional, inovação e resultados transformadores em diversas áreas de negócios.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(5)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">car_rental</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">car_rental</i>
								</div>
								<h3 class="iitem-heading item-heading-large">Jeed Mobilidade</h3>
								<div class="iitem-desc">Com soluções práticas em locação de veículos, a Jeed Mobilidade atende às necessidades de transporte, oferecendo flexibilidade e conveniência para empresas e clientes particulares.</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 col-12 item">
							<a href="single-service.html" class="iitem item-style iitem-hover" onclick="selecionarEmpresa(6)">
								<div class="iitem-icon">
									<i class="material-icons material-icons-outlined md-48">code</i>
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">code</i>
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
        <p>
            A Ezco é especializada na gestão de serviços públicos, oferecendo terceirização completa em áreas como hospitais e unidades de saúde,
            além de gerir equipamentos e insumos hospitalares. Também fornece tecnologia avançada para monitorar desempenho e otimizar processos administrativos,
            com foco na eficiência. Atua desde a contratação de serviços até a implementação de soluções digitais,
            atendendo às necessidades de setores públicos e privados, com destaque em consultoria e projetos complexos.
        </p>
        </br>`,
        "site": `<a href="https://ezco.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Ezco Soluções em Gestão</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Ezco"
    },
    {
        "id": 2,
        "nome": "Affarone Construção & Incorporação",
        "logo": "assets/img/Affarone/logo_affarone.png",
        "lista": `
        <p>
            A Affarone é uma empresa do setor de construção civil e incorporação imobiliária, especializada em grandes projetos de infraestrutura, saneamento e pavimentação.
            Atua em todas as fases do processo construtivo e na incorporação imobiliária, com foco em sustentabilidade.
            Oferece soluções completas de arquitetura, engenharia e construção, destacando-se pela qualidade e cumprimento de prazos.
        </p>
        `,
        // "site": `<a href="https://affarone.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Affarone Construção & Incorporação</span></a>`,
        "fale_conosco": `Fale conosco a respeito da Affarone`
    },
    {
        "id": 3,
        "nome": "Bel Fiore Gelato",
        "logo": "assets/img/Belfiore/Logo_belfiore_sem_fundo.png",
        "lista": `
            <p>
            A Belfiore Gelato produz e distribui gelados artesanais como sorvetes, paletas e açaí. Com foco na qualidade e inovação, a empresa controla toda a produção, 
            desde os ingredientes até a distribuição. 
            Atende tanto grandes redes quanto consumidores finais por meio de plataformas digitais, destacando-se pela variedade e qualidade dos sabores.
            </p>
        `,
        "site": `<a href="https://belfiorealimentos.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Bel Fiore Gelato</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Belfiore"
    },
    {
        "id": 4,
        "nome": "BRZ Consultoria",
        "logo": "assets/img/BRZ/Logo_BRZ.png",
        "lista": `
            <p>
            A BRZ Participações oferece consultoria empresarial com foco em reestruturação financeira, planejamento tributário e governança corporativa.
            Auxilia em fusões, aquisições e IPOs, além de elaborar estudos de viabilidade econômica.
            A empresa se diferencia por estruturar operações complexas e identificar oportunidades de negócios para maximizar a eficiência e reduzir riscos.
            </p>
            </br>`,
        "site": `<a href="https://brzparticipacoes.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>BRZ Consultoria</span></a>`,
        "fale_conosco": "Fale conosco a respeito da BRZ"
    },
    {
        "id": 5,
        "nome": "Jeed Mobilidade",
        "logo": "assets/img/Jeed/logo_jeed.png",
        "lista": `
<p>
A Jeed Mobilidade oferece locação e gestão de frotas, incluindo veículos de passeio, ambulâncias e executivos, além de choferes.
 Seu sistema de gestão de frotas abrange manutenção, rastreamento em tempo real e telemetria, garantindo operações seguras e eficientes. 
A empresa se diferencia pela qualidade no atendimento e uso de tecnologias avançadas para personalizar soluções tanto para empresas privadas quanto para o setor público.
</p>
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
            A Brain Algorithms desenvolve soluções tecnológicas para automação e gestão empresarial, usando inteligência artificial e big data.
            A empresa cria softwares personalizados e sistemas integrados, além de consultoria em inovação, ajudando empresas a otimizar processos e aumentar a competitividade. 
            Atua em projetos complexos, desde o desenvolvimento de aplicativos móveis até sistemas empresariais completos.
            </p>
        </br>`,
        "site": `<a href="https://brainalgorithms.com.br" style="width: fit-content" class="btn btn-w240 ripple"><span>Brain Algorithms</span></a>`,
        "fale_conosco": "Fale conosco a respeito da Brain Algorithms"
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
            document.getElementById("img_empresa").style.backgroundColor ="none"
        }
        document.getElementById("lista_topicos").innerHTML = `${empresas[index].lista}`

        if(empresas[index].site != undefined){
        document.getElementById("btn_site").innerHTML = `${empresas[index].site}`
        }
        document.getElementById("fale_conosco_titulo").innerText = `${empresas[index].fale_conosco}`
    }
};
