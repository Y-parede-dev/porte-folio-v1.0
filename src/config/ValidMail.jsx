export const isValidEmailFront = (value) => {
    let reGex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return reGex.test(value);
};