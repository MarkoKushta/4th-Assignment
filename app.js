(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-c');
    let del = document.querySelector('.btn-del');
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.val;
            screen.value += value;

            if(screen.value.startsWith("0")){
                document.getElementById('val0').disabled = true;
            }

            if(screen.value.includes(".") && screen.value.endsWith(".")){
                document.querySelector('.btn-dot').disabled = true;
            }

            if(screen.value.endsWith("+") || screen.value.endsWith("-") 
               || screen.value.endsWith("/") || screen.value.endsWith("*")){
                document.querySelectorAll('.btn-orange').forEach(elem => {
                    elem.disabled = true;
                })
                document.querySelectorAll('.btn-grey').forEach(elem => {
                    elem.disabled = false;
                })
                document.querySelector('.btn-dot').disabled = false;
            }
        })
    });

    equal.addEventListener('click', function(e){
        
        if(screen.value === ''){
            screen.value = "";
        } 

        if(screen.value.includes("/") && screen.value.endsWith("0")){
            screen.value = "Error";
        }
        
        else {
            let Nums = [];
            if(screen.value.includes('+')){
                Nums = screen.value.split("+");
                let answer = Number(Nums[0]) + Number(Nums[1]);
                answer = Math.round(answer * 100)/100;
                screen.value = answer;

                document.querySelectorAll('.btn-grey').forEach(elem => {
                    elem.disabled = true;
                })
            }
            if(screen.value.includes('-')){
                Nums = screen.value.split("-");
                let answer = Number(Nums[0]) - Number(Nums[1]);
                answer = Math.round(answer * 100)/100;
                screen.value = answer;

                document.querySelectorAll('.btn-grey').forEach(elem => {
                    elem.disabled = true;
                })
            }
            if(screen.value.includes('*')){
                Nums = screen.value.split("*");
                let answer = Number(Nums[0]) * Number(Nums[1]);
                answer = Math.round(answer * 100)/100;
                screen.value = answer;

                document.querySelectorAll('.btn-grey').forEach(elem => {
                    elem.disabled = true;
                })
            }
            if(screen.value.includes('/')){
                Nums = screen.value.split("/");
                let answer = Number(Nums[0]) / Number(Nums[1]);
                answer = Math.round(answer * 100)/100;
                screen.value = answer;

                document.querySelectorAll('.btn-grey').forEach(elem => {
                    elem.disabled = true;
                })
            }

            document.querySelectorAll('.btn-orange').forEach(elem => {
                elem.disabled = false;
            })
            
        }
    })
    
    clear.addEventListener('click', function(e){
        screen.value = "";
        document.querySelectorAll('.btn-orange').forEach(elem => {
            elem.disabled = false;
        })
        document.querySelectorAll('.btn-grey').forEach(elem => {
            elem.disabled = false;
        })
        document.querySelector('.btn-dot').disabled = false;

    })

    

    del.addEventListener('click', function(e){
        screen.value = screen.value.slice(-1);
        document.querySelector('.btn-dot').disabled = false;
        document.querySelectorAll('.btn-grey').forEach(elem => {
            elem.disabled = false;
        })
        document.querySelectorAll('.btn-orange').forEach(elem => {
            elem.disabled = false;
        })
    })

    document.addEventListener('keydown', function(e){
        let pressedShift = false;

        if (e.key === 'ShiftLeft' || e.key === 'ShiftRight' || e.keyCode === 16) {
            pressedShift = true;
            console.log(`pressedShift: ${pressedShift}`)
        }
    
        if ((e.code === 'Digit0' || e.code === 'Numpad0') && !screen.value.startsWith("0")) {
            screen.value += "0";
            
        }
        if (e.code === 'Digit1' || e.code === 'Numpad1') {
            screen.value += "1";
        }
    
        if (e.code === 'Digit2' || e.code === 'Numpad2') {
            screen.value += "2";
        }
    
        if (e.code === 'Digit3' || e.code === 'Numpad3') {
            screen.value += "3";
        }
    
        if (e.code === 'Digit4' || e.code === 'Numpad4') {
            screen.value += "4";
        }
    
        if (e.code === 'Digit5') {
            screen.value += "5";
        }
    
        if (e.code === 'Digit6' || e.code === 'Numpad6') {
            screen.value += "6";
        }
    
        if (e.code === 'Digit7' || e.code === 'Numpad7') {
            screen.value += "7";
        }
    
        if (e.code === 'Numpad8') {
            screen.value += "8";
        }
    
        if (e.code === 'Digit9' || e.code === 'Numpad9') {
            screen.value += "9";
        }

        if (e.code === 'NumpadAdd') {
            screen.value += "+";
        }

        if (e.code === 'NumpadSubtract') {
            screen.value += "-";
        }

        if (e.code === 'NumpadMultiply') {
            screen.value += "*";
        }

        if (e.code === 'NumpadDivide') {
            screen.value += "/";
        }

    })
}) ();