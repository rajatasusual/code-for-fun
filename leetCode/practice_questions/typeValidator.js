
function typeCheck(obj) {
    //obj is an object of type {age_int:2, name_string:"John"}
    //Using Javascript Proxy, create a proxy object with the same properties but with type validation added
    const types = {
        bool: v => typeof v === 'bool',
        number: v => typeof v === 'number' && v === v,
        string: v => typeof v === 'string',
        float: v => typeof v === 'number' && v === v,
        int: v => typeof v === 'number' && v === v,
    };

    //create object validProps with keys from obj split by _
    const validProps = Object.keys(obj).map(k => k.split('_')[1]);

    const handler = {
        get: (target, prop) => {
            if (prop in target) {
                return target[prop];
            } else if (validProps.includes(prop)) {
                return obj[prop];
            } else {
                return undefined;
            }
        },
        set: (target, prop, value) => {
            if (!validProps.includes(prop)) return false;
            const validator = types[shape[prop]];
            if (!validator || typeof validator !== 'function') return false;
            if (!validator(value)) return false;
            target[prop] = value;
        }
    }

    return obj => new Proxy(obj, handler);

}