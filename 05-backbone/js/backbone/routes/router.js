//Router
define(['jquery', 'backbone','Movie', 'CollectionView'],function ($, Backbone, Movie, CollectionView){
	var Router = Backbone.Router.extend({
	    routes: {
	      "": "default"
			},
	    default: function () {
				$(document).ready(function(){
					var aux = JSON.parse(localStorage.getItem("movies"));
					Collection = new Movie.Collection();
					if(aux==undefined){
						var testDrive = [
							  { img:'img/01.jpg', title: "Bom yeoreum gaeul gyeoul geurigo bom", director: "Ki-duk Kim", releaseyear: 2003, duration:103, synopsis: "On an isolated lake, an old monk lives on a small floating temple. The wise master has also a young boy with him who learns to become a monk. And we watch as seasons and years pass by."},
							  { img:'img/02.jpg', title: "Everyone's Going to Die", director: "Jones", releaseyear: 2014, duration: 83, synopsis: "Two lost souls. One last chance. Melanie's life in a seaside town is going nowhere until she meets Ray, back in town with a shady job to do. A moment's escape becomes a chance to save themselves, and each other. Everyone's Going To Die is a modern British story about coming home, getting by and the redemptive power of feeling you're not alone. A story where porn hotlines rub shoulders with sexy beavers on rollerskates; where the past is laid to rest, two lives are changed and nobody, finally, is going to die."},
							  { img:'img/03.jpg', title: "(500) Days of Summer", director: "Marc Webb", releaseyear: 2009, duration: 95, synopsis: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her."},
							  { img:'img/04.jpg', title: "Seeking a Friend for the End of the World", director: "Lorena Scafaria", releaseyear: 2012, duration: 101, synopsis: "As an asteroid nears Earth, a man finds himself alone after his wife leaves in a panic. He decides to take a road trip to reunite with his high school sweetheart. Accompanying him is a neighbor who inadvertently puts a wrench in his plan."},
							  { img:'img/05.jpg', title: "The Way Way Back", director: "Nat Faxon & Jim Rash", releaseyear: 2013, duration: 103, synopsis: "Shy 14-year-old Duncan goes on summer vacation with his mother, her overbearing boyfriend, and her boyfriend's daughter. Having a rough time fitting in, Duncan finds an unexpected friend in Owen, manager of the Water Wizz water park." },
							  { img:'img/06.jpg', title: "Into the Wild", director: "Sean Penn", releaseyear: 2007, duration: 148, synopsis: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life."},
							  { img:'img/07.jpg', title: "The Secret Life of Walter Mitty", director: "Ben Stiller", releaseyear: 2013, duration: 114, synopsis: "When his job along with that of his co-worker are threatened, Walter takes action in the real world embarking on a global journey that turns into an adventure more extraordinary than anything he could have ever imagined."},
							  { img:'img/08.jpg', title: "Star Wars: Episode III - Revenge of the Sith", director: "George Lucas", releaseyear: 2005, duration: 140, synopsis: "As the Clone Wars near an end, the Sith Lord Darth Sidious steps out of the shadows, at which time Anakin succumbs to his emotions, becoming Darth Vader and putting his relationships with Obi-Wan and Padme at risk."},
							  { img:'img/09.jpg', title: "Seven Pounds", director: "Gabriele Muccino", releaseyear: 2008, duration: 123, synopsis: "A man with a fateful secret embarks on an extraordinary journey of redemption by forever changing the lives of seven strangers."},
							];
						Collection.add(testDrive);
					}else{
						Collection.add(aux);
					}
					localStorage.setItem("movies",JSON.stringify(Collection));
					var Billboard = new CollectionView({collection: Collection});
				});
			},
	});
	return Router;
});