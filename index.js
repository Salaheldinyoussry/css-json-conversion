const CSSToJSON = (s) => {
    if (!s) {
        return {}
    }
    s = s.replace(/\s+/g, '')

    let fbrack = false;

    let tempJson = {}

    let curr = ''
    let currText = ''
    for (var i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        if (c == '{') {
            fbrack = true
        } else if (c == '}') {
            tempJson[curr] = currText
            curr = ''
            currText = ''
            fbrack = false
        }
        else {

            if (!fbrack) {
                curr += c;
            }
            else {
                currText += c;
            }

        }
    }

    let json = {}

    Object.entries(tempJson).map(([key, value]) => {
        if (value) {
            let obj = {}

            let entries = value.split(';')

            entries.forEach(e => {
                if (e) {
                    let t = e.split(':')
                    obj[t[0]] = t[1];
                }
            })

            json[key] = obj
        }

    })



    return json
}

const JSONToCSS = (obj) => {
    let str = ''
    Object.entries(obj).map(([key, value]) => {
        let t = ''
        Object.entries(value).map(([k, v]) => {
            t += '' + k + ':' + v + ';';
        })

        str += "" + key + '{' + t + '}'

    })
    return str
}

module.exports = {CSSToJSON ,JSONToCSS}