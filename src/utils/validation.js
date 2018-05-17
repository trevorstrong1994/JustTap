const validate = values => {
    const error = {};
    error.email = '';
    error.password = '';
    var ema = values.email;
    var pw = values.password;

    if(values.email === undefined) {
        ema = '';
    }
    if(values.password === undefined) {
        pw = '';
    }
    if(ema.length < 8 && ema !== '') {
        error.email = 'too short';
    }
    if(!ema.includes('@') && ema !== '') {
        error.email = '@ not included';
    }
    if(pw.length > 8) {
        error.password = 'max 8 characters';
    }
    return error;
};