
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("footer")) {
        document.getElementById("footer").innerHTML = `
           <div class="footer-main">
        <div class="container">
            <div class="row items align-items-center">
                <div class="col-lg-3 col-md-4 col-12 item">
                    <div class="widget-brand-info">
                        <div class="widget-brand-info-main">
                            <a href="index.html" class="logo" title="PathSoft">
                                <img data-src="assets/img/logo-white.svg" class="lazy" width="133" height="36" src="assets/img/Unita/Logo_unita_vertical.png" alt="Unitá Logo" data-loaded="true" style="opacity: 1;">
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
                <div class="col-auto header-fixed-col logo-wrapper">
                    <a href="index.html" class="logo" title="PathSoft">
                        <img src="assets/img/Unita/Logo_unita_horizontal.png" width="115" height="36" alt="PathSoft">
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
							<a href="single-service.html" class="iitem item-style iitem-hover">
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
							<a href="single-service.html" class="iitem item-style iitem-hover">
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
							<a href="single-service.html" class="iitem item-style iitem-hover">
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
							<a href="single-service.html" class="iitem item-style iitem-hover">
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
							<a href="single-service.html" class="iitem item-style iitem-hover">
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
							<a href="single-service.html" class="iitem item-style iitem-hover">
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

