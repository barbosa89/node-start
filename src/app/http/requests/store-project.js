module.exports = {
    description: {
        isLength: {
            errorMessage: 'Description length: 3 - 100',
            options: {
                min: 3,
                max: 100
            }
        },
        isAlphanumeric: {
            errorMessage: 'Description must be alphanumeric'
        }
    },
    url: {
        isURL: {
            errorMessage: 'This is not a valid URL'
        }
    }
}