export const reqiredFields = (value) => {
    if (value) return undefined;
    return "fiels is REQUIERD"; 
};

export const maxLengthCreator = value => {
    return (secondValue) => {
        if (secondValue > value)
            return "lenght too bif"
        else
            return undefined
    }
}

export const minLengthCreator = value => {
    return (secondValue) => {
        if (secondValue < value)
            return "lenght too small"
        else
            return undefined
    }
}