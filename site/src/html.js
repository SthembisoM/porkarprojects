import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
				<script
					src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
					integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
					crossorigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
					integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
				{props.postBodyComponents}
				<script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
				<script>AOS.init();</script>
				<script
					dangerouslySetInnerHTML={{
						__html: `$(document).ready(function() {
									$(function() {
										$(document).scroll(function() {
										var $nav = $('.head');
										$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
										});
									
										$(document).scroll(function() {
										var $nav = $('.mobile');
										$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
										});
									
												
									$('#bt-toggle').click(function(){
										console.log('toggled');
										var $menu = $('#navbarSupportedContent1');
										$menu.toggleClass('collapse')
										$menu.removeClass("hide");
									});;});
								})
        `
					}}
				/>
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};
