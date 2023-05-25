function type (obj) {
    let objType = typeof obj;

    /* array type */
    if (objType === "object" && !!obj.length === true) {
        let behavesAsArray = true;
        let i=0;
        for (let el in obj) {
            if (obj.hasOwnProperty(el)) {
                behavesAsArray = behavesAsArray && (el == i);
                i++;
            };
        };
        if (behavesAsArray && obj.length === i) {
            objType = "array";
        };
    };

    /* float type */
    if (objType === "number" && !!(obj-Math.floor(obj)) === true) {
        objType = "float";
    };

    return objType
}

function dataType () {
    let stringType = "";
    for (let el in arguments) {
        stringType =  stringType + type(arguments[el]) + ",";
    };
    console.log(stringType);
};

dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {});