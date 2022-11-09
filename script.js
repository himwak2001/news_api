
heading = document.querySelector(".news-heading");
source = document.querySelector(".news-source");
category = document.querySelector(".news-category");
date = document.querySelector(".news-date");
description = document.querySelector(".news-des");

let pro = fetch("https://newsdata.io/api/1/news?apikey=pub_132953df8269e45781ebc35be4a3a6f4cc655&q=india&country=in&language=en&category=business,health,politics,sports,world ");
pro.then((response) => {
	return response.json();
}).then((value) => {
	newsIndex = 0;
	loadNews = (news) => {
		heading.innerHTML = news.title;
		source.innerHTML = news.source_id;
		category.innerHTML = news.category[0];
		date.innerHTML = news.pubDate.split(" ")[0];
		description.innerHTML = news.description;
	}

	next = () => {
		newsIndex = (newsIndex + 1) % value.results.length;
		loadNews(value.results[newsIndex]);
	}

	previous = () => {
		newsIndex = (newsIndex - 1 + value.results.length) % value.results.length;
		loadNews(value.results[newsIndex]);
	}
})

const firstNews = () => {
	let p = fetch("https://newsdata.io/api/1/news?apikey=pub_132953df8269e45781ebc35be4a3a6f4cc655&q=india&country=in&language=en&category=business,health,politics,sports,world ");
	p.then((response) => {
		return response.json();
	}).then((value) => {
		console.log(value);
		heading.innerHTML = value.results[0].title;
		source.innerHTML = value.results[0].source_id;
		category.innerHTML = value.results[0].category[0];
		date.innerHTML = value.results[0].pubDate.split(" ")[0];
		description.innerHTML = value.results[0].description;
	})
}
// // firstNews();

