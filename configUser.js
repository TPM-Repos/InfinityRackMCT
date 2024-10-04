// COPY THIS FILE TO 'configUser.js' AND UPDATE THE VALUES TO MATCH YOUR SERVER URL & GROUP ALIAS
// Version 1.2.9

const config = {
	version: "1.2.9",
	driveWorksMajorVersion: 22, // DriveWorks Live API major version
	// the full path the site running the DriveWorks Live API
	// serverUrl: "https://dw22.api.tpmautomation.com/",
	serverUrl: "https://22.dwapi.infinity-rack.com/",
	licenseDataUrl: "https://22.dwapi.infinity-rack.com/license", // Example: http://YOUR-LICENCE-SERVER:27080 - See https://docs.driveworkspro.com/topic/LicenseManagerDriveWorksLive#driveworks-live-licensing-api
	maxConnections: 20, // Maximum number of concurrent connections to the DriveWorks Live API
	sessionRefreshInterval: 10, // Refresh interval in seconds
	// The default alias for the DriveWorks Group
	// This is a custom string that must match the name in the ConfigUser.xml file
	groupAlias: "InfinityRack",
	// (Optional) Configure ping & update intervals - in seconds
	// A Specification will timeout after a configured period of inactivity (see DriveWorksConfigUser.xml).
	// This function prevents a Specification timing out as long as the page is in view.
	// Disable the ping by setting to 0
	specificationPingInterval: 0,
	// (Optional) Enter custom redirect URLs for login/logout and Project/DriveApp close/cancel
	folder: "",
	login: {
		redirectUrl: "projects.html",
		redirectGuestUrl: "run.html?project=CarportConfiguratorUIFlow",
		// Set this to left, center, or right to position the login form on the page
		columnLocation: "left",
	},
	logout: {
		redirectUrl: "index.html",
	},
	project: {
		// you may put "logout" instead of a page location
		redirectOnClose: "details.html",
		redirectOnCancel: "projects.html",
	},
	driveApp: {
		// you may put "logout" instead of a page location
		redirectOnClose: "details.html",
		redirectOnCancel: "drive-apps.html",
	},
	// (Optional) Configure 'Run' view
	run: {
		showWarningOnExit: true, // Toggle warning dialog when exiting "Run" view with potentially unsaved changes (where supported)
		loadCustomProjectAssets: {
			scripts: false,
			styles: false,
		},
	},
	// (Optional) Configure 'Details' view
	details: {
		updateInterval: 5, // Interval to refresh content - in seconds
		showStartNewSpecificationAction: true,
	},
	// (Optional) Configure the query function
	// Enter a default Group Alias and/or Project name to be used (when none are passed in the query string)
	// Choose how sessions are handled
	query: {
		defaultGroupAlias: "InfinityRackGuest",
		defaultProjectName: "",
		autoLogin: true,
		requireNewSession: false,
		requireExactAlias: true,
	},
	copyright: {
		show: true,
		holder: "Infinity Rack",
		year: "2024",
	},
	// Add a watermark over pages in order to indicate that the site is a development site
	// comment out or set to "" to disable
	watermark: "",
	// Set the title of the site, this will be displayed in the browser tab
	// pageName | siteName
	siteName: "Infinity Rack",
	// Set whether a username or email address will be used
	// username | email address
	usernameType: "Email Address",
	loginReturnUrls: true, // Toggle appending return urls to restore the previous location when redirected to the login form
	locale: "en-US", // Set the default locale for displaying dates and numbers
	dateFormat: {
		month: "long",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	},
	// Whether to show debugging information in the console
	debug: true,
	allowSingleSignOn: false,
	guestLogin: {
		enabled: true,
		alias: "InfinityRackGuest",
	},
	accountManagement: {
		createAccount:
			"query?run=AccountManagement&DWMacroNavigate=CreateAccount",
		forgotPassword:
			"query?run=AccountManagement&DWMacroNavigate=ForgotPassword",
		resetPassword:
			"query?run=AccountManagement&DWMacroNavigate=ResetPassword",
	},
	sidebarLinks: [
		{
			title: "Projects",
			icon: "projects",
			href: "projects.html",
		},
		// {
		// 	title: "DriveApps",
		// 	icon: "drive-apps",
		// 	href: "drive-apps.html",
		// },
		{
			title: "History",
			icon: "history",
			href: "history.html",
		},
	],
	images: {
		// You may use a different (or same) company logo for the login and sidebar
		// You may wish to do this due to the color of the logo and contrast with the background color
		// Here is an example with svgs and with pngs
		// login: "dist/img/logo-dark.svg",
		// sidebar: "dist/img/logo-light.svg",
		login: "dist/img/Infinity Rack - Logo Inverted.svg",
		sidebar: "dist/img/Infinity Rack - Logo inverted no background.svg",
		// By default the login screen will show a static cover image
		// You can change it to a different image here.
		// loginCover: "dist/img/carousel/1.webp",
		// You can use a series of images instead of a static cover image by enabling the carousel
		// These will fade into the next image every 'interval' seconds
		// You may use as many as you want but the more you use the longer the page will take to load
		carousel: {
			enabled: true,
			interval: 7.5,
			images: [
				"dist/img/carousel/1.webp",
				"dist/img/carousel/DJI_0665.webp",
				"dist/img/carousel/DJI_0631.webp",
				"dist/img/carousel/2.webp",
				"dist/img/carousel/3.webp",
				"dist/img/carousel/4.webp",
				"dist/img/carousel/5.webp",
			],
		},
	},
	// Use this section to easily set the branding of your site.
	// Available fonts are Roboto (Flex), Inter, and Poppins
	// you may @import any additional fonts you require in dist/css/theme/theme.css: for more info: https://www.w3schools.com/css/css3_fonts.asp
	// Sizes can be various units (%, pt, px, em, rem, vh, vw, etc): for more info: https://www.w3schools.com/css/css_units.asp
	// don't use % with radius
	// Colors can be names, hexadecimal, rgb(a), hsl(a): for more info: https://www.w3schools.com/cssref/css_colors_legal.php
	// line height can be px, pt, or unit-less. unit-less is * font size
	styles: {
		text: {
			font: "Bai Jamjuree, sans-serif",
			size: "12pt",
			color: "black",
			lineHeight: "1.8",
		},
		heading: {
			font: "Michroma, sans-serif",
			size: "30px",
			color: "rgb(244, 123, 15)",
			weight: "600",
			lineHeight: "40px",
		},
		caption: {
			font: "Bai Jamjuree, sans-serif",
			size: "12pt",
			color: "white",
			weight: "light",
		},
		color: {
			primary: "rgb(244, 123, 15)",
			secondary: "rgb(23, 54, 91)",
			background: "white",
			icon: "#00AEEF",
			focus: "#00AEEF",
		},
		sidebar: {
			background: "rgb(23, 54, 91)",
			width: "18em",
			logoPadding: "1em",
			textColor: "white",
		},
		loginForm: {
			background: "rgb(23, 54, 91)",
			padding: "1em",
			textColor: "white",
		},
		button: {
			// not recommended to use %
			radius: "9px",
			color: "rgb(244, 123, 15)",
		},
		logo: {
			width: "50%",
		},
		projectCard: {
			background: "#efeeed",
			margin: "22px",
		},
		// not recommended to use %
		inputRadius: "9px",
	},
}

