let blackList = []

const API_KEY = 'AIzaSyBNTsy_ilAP1XecHoqTu3CK_23-25G05eU';

let VIDEO_ID = 'GIlONd2h1Ec';

const blockChannel = async () => {

    let youtubeURL = window.location.href
    let youtubeURL2 = new URL(youtubeURL)

    VIDEO_ID = youtubeURL2.search.split("v=")

    VIDEO_ID = VIDEO_ID[1]

    if (youtubeURL2.search.includes("ab_channel")) {

        const response = await fetch('https://raw.githubusercontent.com/6110rstmks/block_list/main/youtube-ab_channel.txt')
        const data =  await response.text()
        blackList = data.split(/\r?\n/);
        console.log(blackList)

        let splitUrl = youtubeURL2.search.split("ab_channel=");
    
        let channel_name = decodeURI(splitUrl[1])

        if (blackList.includes(channel_name)) {
            window.location.assign(
                "https://www.investopedia.com/"
            )
        }
    } else {

        const response = await fetch('https://raw.githubusercontent.com/6110rstmks/block_list/main/youtube-channel.txt')
        const data =  await response.text()
        blackList = data.split(/\r?\n/);
        console.log(blackList)

    
        const response2 = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`)
        const data2 = await response2.json()

        console.log(data2)
        let channel_name = data2.items[0].snippet.channelTitle

        if (blackList.includes(channel_name)) {
            window.location.assign(
                "https://www.investopedia.com/"
            )
        }

    }


}

blockChannel()

// -------------------------------------------------------------



