export const formatNumber = (number) => {
    if (number > 1e6) {
        return new Intl.NumberFormat('en', { notation: 'compact' }).format(number); 
    }
    return new Intl.NumberFormat().format(number); 
};