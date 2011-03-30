<!doctype html>
<head>
  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>ABPhoto - About</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="css/style.css">
	<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" />


  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
  <!-- <script src="js/libs/modernizr-1.7.min.js"></script> -->

</head>

<body class="nojs">

  <div id="container">
    <header class='At-the-Top'>
		<hgroup class='logo'>
			<h1><a href='./'>Logo</a></h1>
		</hgroup>
		<nav id="main_nav">
			<ul>
				<li id="portfolio_nav">
					<a href="gallery.php">Portfolios</a>
					<div class="nav_submenu">
						<span class="close_nav"></span>
						<h2>Portfolios</h2>
						<p>A little something about Portfolios</p>
						<ul>
							<li><a href="gallery.php?gallery=portraits">Portraits</a></li>
							<li><a href="gallery.php?gallery=lifestyle">Lifestyle</a></li>
							<li><a href="gallery.php?gallery=photojournalism">Photojournalism</a></li>
							<li><a href="gallery.php?gallery=sports">Sports</a></li>
							<li><a href="gallery.php?gallery=aerial">Aerial</a></li>
						</ul>
					</div>
				</li>
				<li id="projects_nav">
					<a href="gallery.php">Projects</a>
					<div class="nav_submenu">
						<span class="close_nav"></span>
						<h2>Projects</h2>
						<p>A little something about Projects</p>
						<ul>
							<li><a href="gallery.php?gallery=london_underground">London Underground</a></li>
						</ul>
					</div>
				</li>
				<li id="connections_nav">
					<a href="about.php">Connections</a>
					<div class="nav_submenu">
						<span class="close_nav"></span>
						<h2>Connections</h2>
						<p>A little something about Connections</p>
						<ul>
							<li><a href="about.php">About</a></li>
							<li><a href="blog.php">Blog</a></li>
							<li><a href="contact_us.php">Contact Us</a></li>
						</ul>
					</div>
				</li>
			</ul>
		</nav>

    </header>
    <div id="main" role="main">
		<h3>This is the About Page</h3>
    </div>
    <footer>

    </footer>
  </div> <!--! end of #container -->


  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.5.1.min.js">\x3C/script>')</script>
	<script type="text/javascript" src="js/libs/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/ceMenu.js"></script>
	
	<script>
		$(function(){
			$('body').removeClass('nojs');
			$('header').ce_menu();
		});
	</script>


  <!--[if lt IE 7 ]>
    <script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix('img, .png_bg'); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->

</body>
</html>