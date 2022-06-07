export const GetIdFromUrl = (url) => {
    const arr = url.split('/')
    const id = arr[arr.length - 2]

    return id
}

export const GetSearchKeyFromUrl = (url) => {
    const arr = url.split('/')
    const id = arr[arr.length - 1]

    return id
}

export const RemoveComma = (txt) => {
    return txt.replace(/,/g,'')
}