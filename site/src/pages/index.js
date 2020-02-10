import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import '../css/nav.css';
import '../css/mobile-nav.css';
import '../css/home.css';
import '../css/about.css';
import '../css/services.css';
import '../css/people.css';
import '../css/projects.css';
import '../css/contact.css';
import '../css/aos.css';
import '../css/footer.css';
import menu from '../images/menu.png';
import { library } from '@fortawesome/fontawesome-free';
import scrollTo from 'gatsby-plugin-smoothscroll';
import $ from 'jquery';
console.log(menu);
/* import '../js/main.js'; */
const IndexPage = ({ data }) => (
	<Layout>
		<nav class="desktop head container-fluid ">
			{data.allStrapiLogo.edges.map((document) => (
				<div class="logo" key={document.node.id}>
					<Link to="/">
						<Img fixed={document.node.logo.childImageSharp.fixed} />
					</Link>
				</div>
			))}
			<div class="menu">
				<ul>
					<li>
						<a onClick={() => scrollTo('#home')}>Home</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#about')}>About Us</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#services')}>Our Services</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#people')}>Our People</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#project')}>Our Projects</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#contact')}>Contact Us</a>
					</li>
				</ul>
			</div>
		</nav>

		<nav class="mobile navbar navbar-light light-blue lighten-4">
			{/*  <!-- Navbar brand --> */}
			<div class="">
				{data.allStrapiLogo.edges.map((document) => (
					<div class="" key={document.node.id}>
						<Link to="/">
							<Img fixed={document.node.logo.childImageSharp.fixed} />
						</Link>
					</div>
				))}
				{/* <!-- <img src="http://via.placeholder.com/50x50" alt="" /> --> */}
			</div>
			{/* <!-- Collapse button --> */}
			<a
				id="bt-toggle"
				class="navbar-toggler toggler-example"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent1"
				aria-controls="navbarSupportedContent1"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="white-text">
					<img src={menu} alt="Logo" />
				</span>
			</a>

			{/* <!-- Collapsible content --> */}
			<div id="show-hide" class="navbar-collapse hide" id="navbarSupportedContent1">
				{/* <!-- Links --> */}
				<ul>
					<li>
						<a onClick={() => scrollTo('#home')}>Home</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#about')}>About Us</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#services')}>Our Services</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#people')}>Our People</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#project')}>Our Projects</a>
					</li>
					<li>
						<a onClick={() => scrollTo('#contact')}>Contact Us</a>
					</li>
				</ul>
				{/* <!-- Links --> */}
			</div>
			{/* <!-- Collapsible content --> */}
		</nav>

		<div class="">
			{data.allStrapiHome.edges.map((document) => (
				<div id="home" class="" key={document.node.id}>
					<div class="hover" />
					<div class="home-text container">
						<h1>{document.node.title}</h1>
						<p>{document.node.sub_title}</p>
						<p>{document.node.content}</p>
						{/* <Img fluid={document.node.bg_img.childImageSharp.fluid} /> */}
					</div>
				</div>
			))}
		</div>
		<div class="container-fluid">
			<div id="about" class="section">
				{data.allStrapiAbout.edges.map((document) => (
					<div class="row" key={document.node.id}>
						<div class="col-md-6 col-xs-12 col-sm-5">
							<h1>About Us</h1>
							<p>{document.node.abt_description}</p>
							<a class="btn btn-outline-primary" href="#contact">
								Contact Us
							</a>
						</div>
						<div class="col-md-6 col-xs-12 col-sm-7">
							<Img fluid={document.node.abt_image.childImageSharp.fluid} />
						</div>
					</div>
				))}
			</div>
		</div>
		<div class="container">
			<div id="services" class="section">
				<h1 class="text-center">Our Services</h1>
				<div class="row">
					<ul>
						{data.allStrapiService.edges.map((document) => (
							<div class="col-md-6 col-xs-12 col-sm-6 service">
								<li key={document.node.id}>
									{/* <div class="">
										<p>{document.node.service}</p>
									</div> */}

									<table cellspacing="0" cellpadding="0" border="0">
										<tr>
											<td height="132" valign="middle" width="40">
												{data.allStrapiGallery.edges.map((document) => (
													<Img fixed={document.node.g_image.childImageSharp.fixed} />
												))}
											</td>
											<td height="132" valign="middle">
												<p>{document.node.service}</p>
											</td>
										</tr>
									</table>
								</li>
							</div>
						))}
					</ul>
				</div>
			</div>
			<div id="people" class="section">
				<h1 class="text-center">Our People</h1>
				{data.allStrapiOurpeople.edges.map((document) => (
					<div class="text-center" key={document.node.id}>
						<p>{document.node.description}</p>
					</div>
				))}
				{
					<div class="row roles">
						<ul>
							{data.allStrapiMgrole.edges.map((document) => (
								<div class="role col-md-4 col-xs-12 col-sm-6 text-center">
									<div class="gray-bg text-center">
										<li key={document.node.id}>
											<div class="ppl-img">
												<Img fluid={document.node.mg_image.childImageSharp.fluid} />
											</div>
											<div class="ppl-role">
												<p>{document.node.mg_role}</p>
											</div>
										</li>
									</div>
								</div>
							))}
						</ul>
					</div>
				}
			</div>
			{
				<div id="project" class="section text-center">
					<h1 class="">Our Projects</h1>
					<div class="row">
						<ul>
							{data.allStrapiOurproject.edges.map((document) => (
								<div class="col-md-4 col-sm-4 col-sx 12 image">
									<li key={document.node.id}>
										<Img fluid={document.node.pr_image.childImageSharp.fluid} />
									</li>
								</div>
							))}
						</ul>
					</div>
				</div>
			}
			<div id="contact">
				<h1 class="text-center">Contact Us</h1>
				<div class="row details">
					<div class="mg col-md-6 col-sm-5 col-xs-12">
						<h2 class="mg">Let's Get In Touch</h2>
						{data.allStrapiContactus.edges.map((document) => (
							<div key={document.node.id} class="address">
								<h3>Our Address</h3>
								<p>{document.node.address}</p>
								<h3 class="mt">Contact Details</h3>
								<p>Email:{document.node.email}</p>
								<p>Office Telephone:{document.node.office}</p>
								<p>Mobile Telephone:{document.node.mobile}</p>
							</div>
						))}
					</div>
					<div class=" col-md-6 col-sm-7 col-xs-12">
						<h2 class="mg">Tell Us About Yourself</h2>
						<form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
							<div class="row">
								<div class="col-md-6">
									<label>
										<span>Name</span>
									</label>
									<input type="text" name="email" />
								</div>
								<div class="col-md-6">
									<label>
										<span>Email</span>
									</label>
									<input type="email" name="name" />
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<label />
									<label class>
										<span>Phone</span>
									</label>
									<input type="text" name="message" />
								</div>
								<div class="col-md-6">
									<label>
										<span>Address</span>
									</label>
									<input type="text" name="message" />
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<label>
										<span>Company</span>
									</label>
									<input type="text" name="message" />
								</div>
							</div>
							<a class="btn" href="">
								Send
							</a>
						</form>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-md-6 .float-l">
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#about">About Us</a>
							</li>
							<li>
								<a href="#services">Our Services</a>
							</li>
							<li>
								<a href="#people">Our People</a>
							</li>
							<li>
								<a href="#project">Our Projects</a>
							</li>
							<li>
								<a href="#contact">Contact Us</a>
							</li>
						</ul>
					</div>
					<div class="col-md-6 .float-r">
						{data.allStrapiLogo.edges.map((document) => (
							<div class="logo" key={document.node.id}>
								<Link to="/">
									<Img fixed={document.node.logo.childImageSharp.fixed} />
								</Link>
							</div>
						))}
						{data.allStrapiContactus.edges.map((document) => (
							<div key={document.node.id} class="address">
								<p>Email:{document.node.email}</p>
								<p>Office Telephone:{document.node.office}</p>
								<p>Mobile Telephone:{document.node.mobile}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	</Layout>
);

export default IndexPage;

export const pageQuery = graphql`
	query IndexQuery {
		allStrapiHome {
			edges {
				node {
					title
					sub_title
					bg_img {
						childImageSharp {
							fluid(maxWidth: 300) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		allStrapiLogo {
			edges {
				node {
					logo {
						childImageSharp {
							fixed(width: 200) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
		allStrapiAbout {
			edges {
				node {
					abt_description
					abt_image {
						childImageSharp {
							fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		allStrapiService {
			edges {
				node {
					service
				}
			}
		}
		allStrapiOurpeople {
			edges {
				node {
					description
				}
			}
		}
		allStrapiMgrole {
			edges {
				node {
					mg_role
					mg_image {
						childImageSharp {
							fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		allStrapiOurproject {
			edges {
				node {
					pr_image {
						childImageSharp {
							fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		allStrapiContactus {
			edges {
				node {
					address
					email
					mobile
					office
				}
			}
		}
		allStrapiGallery {
			edges {
				node {
					g_image {
						childImageSharp {
							fixed(width: 32) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	}
`;
