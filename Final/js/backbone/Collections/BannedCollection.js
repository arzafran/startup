var BannedCollection = Backbone.Collection.extend({
	default:{
		nombre: null
	},
	initialize: function() {
		this.fetch();
	},
	model: Banned,
	localStorage: new Backbone.LocalStorage("bloqueados")
});