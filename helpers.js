
module.exports = {
    hasUpperCase: (text) => {
        return text.toLowerCase() != text;
    },

    hasLowerCase: (text) => {
        return text.toUpperCase() != text;
    },

    hasSpecialChar: (text) => {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
        return format.test(text);
    },

    hasWhiteSpace: (s) => {
        return s.indexOf(' ') >= 0;
    },

    countLowerCase: (text) => {
        return text.length - text.replace(/[a-z]/g, '').length;
    },

    countUpperCase: (text) => {
        return text.length - text.replace(/[A-Z]/g, '').length;
    },

    countWhiteSpace: (text) => {
        return text.split(" ").length - 1;
    },

    countSpecialChar(text) {
        return text.length - text.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '').length;
    }

}