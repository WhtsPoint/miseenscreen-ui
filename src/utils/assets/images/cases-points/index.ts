async function importImages() {
    const images = []

    for (let i = 1; i < 18; i++) {
        images.push((await import(`@/utils/assets/images/cases-points/${i}.png`))['default'])
    }

    return images
}

export default importImages