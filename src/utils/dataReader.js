import { data } from "../data/data.js"
import { categories } from "../data/categories.js"
import { obtainHigherValues, obtainHigherValuesObject } from "./obtainHigherValues.js"

export const dataReader = () => {
    const formatedData = data.map(item => {
        return {
            category: categories[item.category_id],
            ...item
        }
    })
    return formatedData
}

export const mostRepeatedChannels = () => {
    const completeData = dataReader()
    const channelsVideos = {}

    completeData.forEach(video => {
            channelsVideos.hasOwnProperty(video.channel_title) ?
            channelsVideos[video.channel_title]++ :
            channelsVideos[video.channel_title] = 1
        }
    )

    const mostVideosChannels = []
    Object.keys(channelsVideos).forEach(c => {
        if (channelsVideos[c] > 12) {
            mostVideosChannels.push({
                [c]: channelsVideos[c],
            })
        }
    })
    
    return mostVideosChannels
}

export const mostRepeatedCategories = () => {
    const completeData = dataReader()
    const categoriesVideos = {}

    completeData.forEach(video => {
        if (video.category !== undefined) { 
                categoriesVideos.hasOwnProperty(video.category) ?
                categoriesVideos[video.category]++ :
                categoriesVideos[video.category] = 1
            }
        }
    )

    return categoriesVideos
}

export const higherAVGlikes = () => {
    const completeData = dataReader()
    const channelsVideos = {}

    completeData.forEach(video => {
        if (channelsVideos.hasOwnProperty(video.channel_title)) {
            channelsVideos[video.channel_title].likes += video.likes
            channelsVideos[video.channel_title].videos++
        } else {
            channelsVideos[video.channel_title] = {
                likes: video.likes,
                videos: 1
            }
        }
    })

    const AVGs = {}

    Object.keys(channelsVideos).forEach(c => {
        AVGs[c] = Math.floor(channelsVideos[c].likes / channelsVideos[c].videos)
    })

    const higherValues = obtainHigherValuesObject(10, AVGs)

    console.log(higherValues);
}