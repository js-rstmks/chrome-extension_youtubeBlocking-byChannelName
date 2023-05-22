let blackList = []

const blockChannel = async () => {
    const response = await fetch('https://raw.githubusercontent.com/6110rstmks/block_list/main/youtube_channel.txt')
    const data =  await response.text()
    console.log(data)
    blackList = data.split(/\r?\n/);
    console.log(blackList)

    let youtubeURL = window.location.href
    let youtubeURL2 = new URL(youtubeURL)

    let splitUrl = youtubeURL2.search.split("ab_channel=");

    let channel_name = decodeURI(splitUrl[1])

    console.log(channel_name)
    console.log(blackList)

    if (blackList.includes(channel_name)) {
        window.location.assign(
            "https://www.investopedia.com/"
        )
    }
}

blockChannel()