function jsOut(arg, type = true)
{
    if (type == true)
    {
      console.log(arg + "\n L> typeof: " + typeof(arg) + "\n")
    } else {
        console.log(arg + "\n")
    }
}

function convertPhnNum()
{
    let number = document.getElementById("phnNum").value // comment this if using node
    const intPhoneNum = number // phone number in base10
    // const intPhoneNum = 'phone-number' // phone number in base10 (uncomment if using node)
    
    const binCodes = {
        '+' : '+',
        0 : '0000',
        1 : '0001',
        2 : '0010',
        3 : '0011',
        4 : '0100',
        5 : '0101',
        6 : '0110',
        7 : '0111',
        8 : '1000',
        9 : '1001'
    }
    
    const binPhoneNum = [] // holds binary phone number
    
    function phnNumber2bin(intPhoneNum)
    {
        for (const key in intPhoneNum) {
            if (Object.prototype.hasOwnProperty.call(intPhoneNum, key)) {
                const elementKeyCode = binCodes[intPhoneNum[key]];
                binPhoneNum.push(elementKeyCode)
            }
        }

        let binNim = document.getElementById("binNum").innerText = binPhoneNum.join("")
    
        return jsOut(`Phone Number:\n--> ${intPhoneNum}`, false) + jsOut(` L> Phone Number (Binary):\n---> ${binPhoneNum.join("")}`)
    }
    
    phnNumber2bin(intPhoneNum)
}

function clear() {
    
}

// convertPhnNum()