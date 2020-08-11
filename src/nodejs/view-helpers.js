const _ = require('lodash');
module.exports = function (conf) {
	return {
		body_colour_mode() {
			return "dark";
		},

		account_info() {
			return "Login";
		},

		account_menu() {
			return "<div class='account-menu'></div>";
		},

		site_title() {
			return "Bingo Writing Contest";
		}
	}
};