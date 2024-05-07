import { data } from "../data/data.js"
import { categories } from "../data/categories.js"

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