const axios = require('axios')
const cheerio = require('cheerio')

async function xvideos(q) {
return new Promise((resolve, reject) => {
  const page = Math.floor(Math.random() * 30)
  axios.get('https://www.xvideos.com/?k='+q+'&p='+page).then(({ data }) => {
    const $ = cheerio.load(data)
    const link = [];
    const title = [];
    const img = [];
    const quality = [];
    const durasi = [];
    const res = [];
    $('#content > div > div').each(function(a, b) {
      link.push('https://www.xvideos.com'+$(b).find('div > div > a').attr('href'))
      img.push('https://www.xvideos.com'+$(b).find('div > div > a > img').attr('src'))
      quality.push($(b).find('div > div > a > span').text() ?? '720p')
      title.push($(b).find('div:nth-child(2) > p > a').text())
      durasi.push($(b).find('div:nth-child(2) > p > a > span').text())
    })
    for (let i = 0; i < link.length; i++) {
      res.push({
        title: title[i],
        quality: quality[i],
        durasi: durasi[i],
        //thumb: thumb[i],
        link: link[i]
      })
      resolve(res)
    }
  })
})
}

function XDL(url) {
return new Promise((resolve) => {
  axios.get(url).then(({ data }) => {
    const $ = cheerio.load(data)
    const title = $('meta[property="og:title"]').attr('content');
			const duration = $('meta[property="og:duration"]').attr('content');
			const image = $('meta[property="og:image"]').attr('content');
			const videoType = $('meta[property="og:type"]').attr('content');
			const info = $('span.metadata').text();
			const videoScript = $('#video-player-bg > script:nth-child(6)').html();
			const files = {
				low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
				high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
				HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1]
			};
			resolve({
					title,
					url,
					duration,
					image,
					videoType,
					info,
					files
			})
  })
})
}

function xnxxs(query) {
	return new Promise((resolve, reject) => {
		const baseurl = 'https://www.xnxx.com'
		fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			let title = [];
			let url = [];
			let desc = [];
			let thumb = [];
			let results = [];

			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb').each(function(c, d) {
					url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/")),
					thumb.push($(d).find('img').attr('data-src'))
				})
			})
			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb-under').each(function(c, d) {
					desc.push($(d).find('p.metadata').text())
					$(d).find('a').each(function(e,f) {
					    title.push($(f).attr('title'))
					})
				})
			})
			for (let i = 0; i < title.length; i++) {
				results.push({
					title: title[i],
					desk: desc[i],
					link: url[i],
					thumbnail: thumb[i]
				})
			}
			resolve({
				code: 200,
				status: true,
				author: 'Alfa Xyz',
				result: results
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
            if ($(b).find('img').attr('data-src')) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    photo: $(b).find('source').attr('src') || $(b).find('img').attr('data-src')
                })
                } else {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type'),
                    video_1: $(b).find('source').attr('src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
                }
            })
            resolve(hasil)
        })
    })
}
function hentais(q) {
    return new Promise((resolve, reject) => {
        axios.get('https://sfmcompile.club/?s='+q)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
            if ($(b).find('img').attr('data-src')) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    photo: $(b).find('source').attr('src') || $(b).find('img').attr('data-src')
                })
                } else {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type'),
                    video_1: $(b).find('source').attr('src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
                }
            })
            resolve(hasil)
        })
    })
}
module.exports = { xvideos, XDL, xnxxs, hentaivid, hentais }