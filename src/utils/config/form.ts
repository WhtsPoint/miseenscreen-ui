const form = {
    file: {
        maxSize: 3 * 10 ** 6,
        maxCount: 10,
        approvedFormats: [
            'text/plain',
            'image/png',
            'image/jpeg',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword'
        ]
    },
    authorComment: {
        maxLength: 3000
    }
}

export default form