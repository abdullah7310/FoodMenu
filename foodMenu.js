const prompt=require('prompt-sync')()
console.log(`HOTEL DHARAMSHALA\nWelcome to our restaurant`)

console.log("Choose your day:- \n1:-Monday \n2:-Tuesday \n3:-Wednesday \n4:-Thirsday \n5:-Friday \n6:-Saturday \n7:-Sunday")
let day = prompt("Enter:").toLowerCase()
if (day=="1"){
   console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
   let time=prompt("Enter:").toLowerCase()

    if(time=="1"){
        console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
        let food = prompt("Enter:").toLowerCase()
        if(food=="1"){
            console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
            let quantity = prompt("Enter:").toLowerCase()
            if(quantity=="1"){
                console.log(`please pay $50 for half plate poha!`);
                let cost =Number(prompt("Enter:"))
                if(cost==50){
                    console.log("Thank you, Enjoy your food.");
                }else if(cost>50){
                    let payback=cost-50
                    console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                    

                }
                else{
                    let want=50-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }

            }else{
                console.log(`please pay $100 for full plate poha!`);
                let cost =Number(prompt("Enter:"))
                if(cost==100){
                    console.log("Thank you, Enjoy your food.");
                }else if(cost>100){
                    let payback=cost-100
                    console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                    

                }
                else{
                    let want=100-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }

            }
        }else if(food=="2"){
            console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
            let quantity = prompt("Enter >> ").toLowerCase()
            if(quantity == "1"){
                console.log("Pay $30 for your half plate maggie ");
                let cost = Number(prompt("Enter >> "))
                if (cost == 30){
                    console.log("Your Order is ready!!! Enjoy your maggie")
                }else if(cost<30){
                    let want=30-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                    
                }else{
                    let want = cost -30
                    console.log(`Take your return ${want} and enjoy your food!!`);

                }
            }else{
                console.log("Pay $50 for your full plate maggie ");
                let cost = Number(prompt("Enter >> "))
                if (cost == 50){
                    console.log("Your Order is ready!!! Enjoy your maggie")
                }else if(cost<50){
                    let want=50-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                    
                }else{
                    let want = cost -50
                    console.log(`Take your return ${want} and enjoy your food!!`);

                }
            }
        }else{
            console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
            let sandw = (prompt("enter >> "))
            if(sandw=="2"){
                console.log("You have to pay $20 for 2 sandwich");
                let cost = Number(prompt("Enter >> "))
                if(cost == 20){
                    console.log("Here is your order !! Enjoy your order");
                }else if(cost>20){
                    let payback = cost - 20
                    console.log(`Take you return money ${payback} \n Enjoy your food.`);
                }else{
                    let want=20-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }

            }else if(sandwich == "4"){
                console.log("You have to pay Rs.40 for 4 Sandwich");
                let pay = Number(prompt("enter >> "))
                if(pay==40){
                    console.log("You will get your order soon \n Enjoy your meal.");
                }else  if(pay>40){
                    let payback = pay-40
                    console.log(`Take your extra ${payback}`);
                }else{
                    let want=40-pay
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }
            }

        }
    }
    else if(time == "2"){
        console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
        let food = prompt("Enter >> ").toLowerCase()

        if(food == "1"){
            console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
            let quantity = prompt("Enter >> ").toLowerCase()
            if (quantity == "1"){
                console.log("You have to pay Rs.159");
                let cost = Number(prompt("Enter >>"))
                if (cost ==  159){
                    console.log("your order will be prepared soon \n Thanks for Visit!");
                }else if(cost>159){
                    let payback = cost-159
                    console.log(`Take your extra rupees ${payback} and enjoy your food`);
                }else{
                    let want=159-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }
            }
            else{
                if (quantity == "2"){
                    console.log("You have to pay Rs.300");
                    let cost = Number(prompt("Enter >>"))
                    if (cost ==  300){
                        console.log("your order will be prepared soon \n Thanks for Visit!");
                    }else if(cost>300){
                        let payback = cost-300
                        console.log(`Take your extra rupees ${payback} and enjoy your food`);
                    }else{
                        let want=300-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                    }
                }
            }
        }
        else if(food === "2"){
            console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
            let quantity = prompt("Enter >> ").toLowerCase()
            if (quantity == "1"){
                console.log("You have to pay Rs.259");
                let cost = Number(prompt("Enter >>"))
                if (cost ==  259){
                    console.log("your order will be prepared soon \n Thanks for Visit!");
                }else if(cost>259){
                    let payback = cost-259
                    console.log(`Take your extra rupees ${payback} and enjoy your food`);
                }else{
                    let want=259-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }
            } else{
                console.log("You have to pay Rs.399 for family plate")
                let cost = Number(prompt("Enter >> "))
                if (cost == 399){
                    console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                }else if(cost>399){
                    let payback = cost - 399
                    console.log(`Take your extra rupees ${payback} and enjoy your food`);
                }else{
                    let want=399-cost
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }
            }
        }else{
            console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
            let biryaani = prompt("Enter >> ")
            if(biryaani  == 1){
                console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                let pay = Number(prompt("Enter >> "))
                if(pay == 199){
                    console.log("Here is Your Order sir/mam \n Thanks for visit");
                }else if(pay > 199){
                    let payback = pay-199
                    console.log(`Take your extra money ${payback}`);
                }else{
                    let want=199-pay
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
                }
            }else{
                if(biryaani  == 2){
                    console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                    let pay = Number(prompt("Enter >> "))
                    if(pay == 299){
                        console.log("Here is Your Order sir/mam \n Thanks for visit");
                    }else if(pay > 299){
                        let payback = pay-299
                        console.log(`Take your extra money ${payback}`);
                    }else{
                        let want=299-pay
                        console.log(`please pay more ${want}`);
                        let paymore =Number(prompt("Enter:"))
                        if(paymore==want){
                            console.log("Thank you, Enjoy your food.");
                        }
                        else if(paymore>want){
                            let giveback = paymore - want
                            console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                        }else{
                            let giveback = want - paymore
                            console.log(`pay more ${giveback}`);
                            let rupees = Number(prompt("enter >> "))
                            if(rupees == giveback){
                                console.log("Enjoy Your food \nThanks for Visit!!");
                            }else{
                                console.log("NO Problem !! Come again next time");
                            }
                        }
                    }
            }
        }

    }
    
}else{
    console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
    let food =  prompt("Enter >>  ")
    if (food == "1"){
        console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
        let quantity = prompt("Enter >> ")
        if(quantity=="1"){
            console.log("You have to pay Rs.149 for half plate Veg-roti");
            let pay = Number(prompt("Enter >> "))
            if (pay==149){
                console.log("Enjoy you dinner \nThanks for visit!!");

            }else if(pay>149){
                let cost = pay - 149
                console.log(`Take your extra ${cost} rupees `);
            }else{
                let want=149-pay
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
            }
        }else{
            console.log("You have to pay Rs.249 for half plate Veg-roti");
            let pay = Number(prompt("Enter >> "))
            if (pay==249){
                console.log("Enjoy you dinner \nThanks for visit!!");

            }else if(pay>249){
                let cost = pay - 249
                console.log(`Take your extra ${cost} rupees `);
            }else{
                let want=249-pay
                    console.log(`please pay more ${want}`);
                    let paymore =Number(prompt("Enter:"))
                    if(paymore==want){
                        console.log("Thank you, Enjoy your food.");
                    }
                    else if(paymore>want){
                        let giveback = paymore - want
                        console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                    }else{
                        let giveback = want - paymore
                        console.log(`pay more ${giveback}`);
                        let rupees = Number(prompt("enter >> "))
                        if(rupees == giveback){
                            console.log("Enjoy Your food \nThanks for Visit!!");
                        }else{
                            console.log("NO Problem !! Come again next time");
                        }
                    }
            }
        }
    }
    else if(food == "2"){
        console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
        let quantity = prompt("Enter >> ")
        if(quantity=="1"){
            console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
            let pay = Number(prompt("Enter >> "))
            if (pay==199){
                console.log("Enjoy you dinner \nThanks for visit!!");

            }else if(pay>199){
                let cost = pay - 199
                console.log(`Take your extra ${cost} rupees `);
            }else{
                let want=199-pay
                console.log(`please pay more ${want}`);
                let paymore =Number(prompt("Enter:"))
                if(paymore==want){
                    console.log("Thank you, Enjoy your food.");
                }
                else if(paymore>want){
                    let giveback = paymore - want
                    console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                }else{
                    let giveback = want - paymore
                    console.log(`pay more ${giveback}`);
                    let rupees = Number(prompt("enter >> "))
                    if(rupees == giveback){
                        console.log("Enjoy Your food \nThanks for Visit!!");
                    }else{
                        console.log("NO Problem !! Come again next time");
                    }
                }
            }
        }else{
            console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
            let pay = Number(prompt("Enter >> "))
            if (pay==249){
                console.log("Enjoy you dinner \nThanks for visit!!");

            }else if(pay>249){
                let cost = pay - 249
                console.log(`Take your extra ${cost} rupees `);
            }else{
                let want=249-pay
                console.log(`please pay more ${want}`);
                let paymore =Number(prompt("Enter:"))
                if(paymore==want){
                    console.log("Thank you, Enjoy your food.");
                }
                else if(paymore>want){
                    let giveback = paymore - want
                    console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                }else{
                    let giveback = want - paymore
                    console.log(`pay more ${giveback}`);
                    let rupees = Number(prompt("enter >> "))
                    if(rupees == giveback){
                        console.log("Enjoy Your food \nThanks for Visit!!");
                    }else{
                        console.log("NO Problem !! Come again next time");
                    }
                }
            }
        }
    }else{
        console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
        let quantity = prompt("Enter >> ")
        if(quantity=="1"){
            console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
            let pay = Number(prompt("Enter >> "))
            if (pay==249){
                console.log("Enjoy you dinner \nThanks for visit!!");

            }else if(pay>249){
                let cost = pay - 249
                console.log(`Take your extra ${cost} rupees `);
            }else{
                let want=249-pay
                console.log(`please pay more ${want}`);
                let paymore =Number(prompt("Enter:"))
                if(paymore==want){
                    console.log("Thank you, Enjoy your food.");
                }
                else if(paymore>want){
                    let giveback = paymore - want
                    console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                }else{
                    let giveback = want - paymore
                    console.log(`pay more ${giveback}`);
                    let rupees = Number(prompt("enter >> "))
                    if(rupees == giveback){
                        console.log("Enjoy Your food \nThanks for Visit!!");
                    }else{
                        console.log("NO Problem !! Come again next time");
                    }
                }
            }
        }else{
            console.log("You have to pay Rs.349 for full plate Chicken");
            let pay = Number(prompt("Enter >> "))
            if (pay==349){
                console.log("Enjoy you dinner \nThanks for visit!!");

            }else if(pay>349){
                let cost = pay - 349
                console.log(`Take your extra ${cost} rupees `);
            }else{
                let want=349-pay
                console.log(`please pay more ${want}`);
                let paymore =Number(prompt("Enter:"))
                if(paymore==want){
                    console.log("Thank you, Enjoy your food.");
                }
                else if(paymore>want){
                    let giveback = paymore - want
                    console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                }else{
                    let giveback = want - paymore
                    console.log(`pay more ${giveback}`);
                    let rupees = Number(prompt("enter >> "))
                    if(rupees == giveback){
                        console.log("Enjoy Your food \nThanks for Visit!!");
                    }else{
                        console.log("NO Problem !! Come again next time");
                    }
                }
            }
        }
    }
}
}
else if (day=="2"){
    console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
    let time=prompt("Enter:").toLowerCase()
 
     if(time=="1"){
         console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
         let food = prompt("Enter:").toLowerCase()
         if(food=="1"){
             console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
             let quantity = prompt("Enter:").toLowerCase()
             if(quantity=="1"){
                 console.log(`please pay $50 for half plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==50){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>50){
                     let payback=cost-50
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else{
                 console.log(`please pay $100 for full plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==100){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>100){
                     let payback=cost-100
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=100-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }
         }else if(food=="2"){
             console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
             let quantity = prompt("Enter >> ").toLowerCase()
             if(quantity == "1"){
                 console.log("Pay $30 for your half plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 30){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<30){
                     let want=30-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -30
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }else{
                 console.log("Pay $50 for your full plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 50){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<50){
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -50
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }
         }else{
             console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
             let sandw = (prompt("enter >> "))
             if(sandw=="2"){
                 console.log("You have to pay $20 for 2 sandwich");
                 let cost = Number(prompt("Enter >> "))
                 if(cost == 20){
                     console.log("Here is your order !! Enjoy your order");
                 }else if(cost>20){
                     let payback = cost - 20
                     console.log(`Take you return money ${payback} \n Enjoy your food.`);
                 }else{
                     let want=20-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else if(sandwich == "4"){
                 console.log("You have to pay Rs.40 for 4 Sandwich");
                 let pay = Number(prompt("enter >> "))
                 if(pay==40){
                     console.log("You will get your order soon \n Enjoy your meal.");
                 }else  if(pay>40){
                     let payback = pay-40
                     console.log(`Take your extra ${payback}`);
                 }else{
                     let want=40-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
 
         }
     }
     else if(time == "2"){
         console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
         let food = prompt("Enter >> ").toLowerCase()
 
         if(food == "1"){
             console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.159");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  159){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>159){
                     let payback = cost-159
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=159-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
             else{
                 if (quantity == "2"){
                     console.log("You have to pay Rs.300");
                     let cost = Number(prompt("Enter >>"))
                     if (cost ==  300){
                         console.log("your order will be prepared soon \n Thanks for Visit!");
                     }else if(cost>300){
                         let payback = cost-300
                         console.log(`Take your extra rupees ${payback} and enjoy your food`);
                     }else{
                         let want=300-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     }
                 }
             }
         }
         else if(food === "2"){
             console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.259");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  259){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>259){
                     let payback = cost-259
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=259-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             } else{
                 console.log("You have to pay Rs.399 for family plate")
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 399){
                     console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                 }else if(cost>399){
                     let payback = cost - 399
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=399-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
         }else{
             console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
             let biryaani = prompt("Enter >> ")
             if(biryaani  == 1){
                 console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                 let pay = Number(prompt("Enter >> "))
                 if(pay == 199){
                     console.log("Here is Your Order sir/mam \n Thanks for visit");
                 }else if(pay > 199){
                     let payback = pay-199
                     console.log(`Take your extra money ${payback}`);
                 }else{
                     let want=199-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }else{
                 if(biryaani  == 2){
                     console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                     let pay = Number(prompt("Enter >> "))
                     if(pay == 299){
                         console.log("Here is Your Order sir/mam \n Thanks for visit");
                     }else if(pay > 299){
                         let payback = pay-299
                         console.log(`Take your extra money ${payback}`);
                     }else{
                         let want=299-pay
                         console.log(`please pay more ${want}`);
                         let paymore =Number(prompt("Enter:"))
                         if(paymore==want){
                             console.log("Thank you, Enjoy your food.");
                         }
                         else if(paymore>want){
                             let giveback = paymore - want
                             console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                         }else{
                             let giveback = want - paymore
                             console.log(`pay more ${giveback}`);
                             let rupees = Number(prompt("enter >> "))
                             if(rupees == giveback){
                                 console.log("Enjoy Your food \nThanks for Visit!!");
                             }else{
                                 console.log("NO Problem !! Come again next time");
                             }
                         }
                     }
             }
         }
 
     }
     
 }else{
     console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
     let food =  prompt("Enter >>  ")
     if (food == "1"){
         console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.149 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==149){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>149){
                 let cost = pay - 149
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=149-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }
     }
     else if(food == "2"){
         console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
             let pay = Number(prompt("Enter >> "))
             if (pay==199){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>199){
                 let cost = pay - 199
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=199-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }else{
         console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.349 for full plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==349){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>349){
                 let cost = pay - 349
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=349-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }
 }
 }
 else if (day=="3"){
    console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
    let time=prompt("Enter:").toLowerCase()
 
     if(time=="1"){
         console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
         let food = prompt("Enter:").toLowerCase()
         if(food=="1"){
             console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
             let quantity = prompt("Enter:").toLowerCase()
             if(quantity=="1"){
                 console.log(`please pay $50 for half plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==50){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>50){
                     let payback=cost-50
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else{
                 console.log(`please pay $100 for full plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==100){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>100){
                     let payback=cost-100
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=100-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }
         }else if(food=="2"){
             console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
             let quantity = prompt("Enter >> ").toLowerCase()
             if(quantity == "1"){
                 console.log("Pay $30 for your half plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 30){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<30){
                     let want=30-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -30
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }else{
                 console.log("Pay $50 for your full plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 50){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<50){
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -50
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }
         }else{
             console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
             let sandw = (prompt("enter >> "))
             if(sandw=="2"){
                 console.log("You have to pay $20 for 2 sandwich");
                 let cost = Number(prompt("Enter >> "))
                 if(cost == 20){
                     console.log("Here is your order !! Enjoy your order");
                 }else if(cost>20){
                     let payback = cost - 20
                     console.log(`Take you return money ${payback} \n Enjoy your food.`);
                 }else{
                     let want=20-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else if(sandwich == "4"){
                 console.log("You have to pay Rs.40 for 4 Sandwich");
                 let pay = Number(prompt("enter >> "))
                 if(pay==40){
                     console.log("You will get your order soon \n Enjoy your meal.");
                 }else  if(pay>40){
                     let payback = pay-40
                     console.log(`Take your extra ${payback}`);
                 }else{
                     let want=40-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
 
         }
     }
     else if(time == "2"){
         console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
         let food = prompt("Enter >> ").toLowerCase()
 
         if(food == "1"){
             console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.159");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  159){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>159){
                     let payback = cost-159
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=159-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
             else{
                 if (quantity == "2"){
                     console.log("You have to pay Rs.300");
                     let cost = Number(prompt("Enter >>"))
                     if (cost ==  300){
                         console.log("your order will be prepared soon \n Thanks for Visit!");
                     }else if(cost>300){
                         let payback = cost-300
                         console.log(`Take your extra rupees ${payback} and enjoy your food`);
                     }else{
                         let want=300-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     }
                 }
             }
         }
         else if(food === "2"){
             console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.259");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  259){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>259){
                     let payback = cost-259
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=259-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             } else{
                 console.log("You have to pay Rs.399 for family plate")
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 399){
                     console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                 }else if(cost>399){
                     let payback = cost - 399
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=399-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
         }else{
             console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
             let biryaani = prompt("Enter >> ")
             if(biryaani  == 1){
                 console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                 let pay = Number(prompt("Enter >> "))
                 if(pay == 199){
                     console.log("Here is Your Order sir/mam \n Thanks for visit");
                 }else if(pay > 199){
                     let payback = pay-199
                     console.log(`Take your extra money ${payback}`);
                 }else{
                     let want=199-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }else{
                 if(biryaani  == 2){
                     console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                     let pay = Number(prompt("Enter >> "))
                     if(pay == 299){
                         console.log("Here is Your Order sir/mam \n Thanks for visit");
                     }else if(pay > 299){
                         let payback = pay-299
                         console.log(`Take your extra money ${payback}`);
                     }else{
                         let want=299-pay
                         console.log(`please pay more ${want}`);
                         let paymore =Number(prompt("Enter:"))
                         if(paymore==want){
                             console.log("Thank you, Enjoy your food.");
                         }
                         else if(paymore>want){
                             let giveback = paymore - want
                             console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                         }else{
                             let giveback = want - paymore
                             console.log(`pay more ${giveback}`);
                             let rupees = Number(prompt("enter >> "))
                             if(rupees == giveback){
                                 console.log("Enjoy Your food \nThanks for Visit!!");
                             }else{
                                 console.log("NO Problem !! Come again next time");
                             }
                         }
                     }
             }
         }
 
     }
     
 }else{
     console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
     let food =  prompt("Enter >>  ")
     if (food == "1"){
         console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.149 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==149){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>149){
                 let cost = pay - 149
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=149-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }
     }
     else if(food == "2"){
         console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
             let pay = Number(prompt("Enter >> "))
             if (pay==199){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>199){
                 let cost = pay - 199
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=199-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }else{
         console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.349 for full plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==349){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>349){
                 let cost = pay - 349
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=349-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }
 }
 }
 else if (day=="4"){
    console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
    let time=prompt("Enter:").toLowerCase()
 
     if(time=="1"){
         console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
         let food = prompt("Enter:").toLowerCase()
         if(food=="1"){
             console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
             let quantity = prompt("Enter:").toLowerCase()
             if(quantity=="1"){
                 console.log(`please pay $50 for half plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==50){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>50){
                     let payback=cost-50
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else{
                 console.log(`please pay $100 for full plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==100){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>100){
                     let payback=cost-100
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=100-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }
         }else if(food=="2"){
             console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
             let quantity = prompt("Enter >> ").toLowerCase()
             if(quantity == "1"){
                 console.log("Pay $30 for your half plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 30){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<30){
                     let want=30-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -30
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }else{
                 console.log("Pay $50 for your full plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 50){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<50){
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -50
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }
         }else{
             console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
             let sandw = (prompt("enter >> "))
             if(sandw=="2"){
                 console.log("You have to pay $20 for 2 sandwich");
                 let cost = Number(prompt("Enter >> "))
                 if(cost == 20){
                     console.log("Here is your order !! Enjoy your order");
                 }else if(cost>20){
                     let payback = cost - 20
                     console.log(`Take you return money ${payback} \n Enjoy your food.`);
                 }else{
                     let want=20-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else if(sandwich == "4"){
                 console.log("You have to pay Rs.40 for 4 Sandwich");
                 let pay = Number(prompt("enter >> "))
                 if(pay==40){
                     console.log("You will get your order soon \n Enjoy your meal.");
                 }else  if(pay>40){
                     let payback = pay-40
                     console.log(`Take your extra ${payback}`);
                 }else{
                     let want=40-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
 
         }
     }
     else if(time == "2"){
         console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
         let food = prompt("Enter >> ").toLowerCase()
 
         if(food == "1"){
             console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.159");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  159){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>159){
                     let payback = cost-159
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=159-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
             else{
                 if (quantity == "2"){
                     console.log("You have to pay Rs.300");
                     let cost = Number(prompt("Enter >>"))
                     if (cost ==  300){
                         console.log("your order will be prepared soon \n Thanks for Visit!");
                     }else if(cost>300){
                         let payback = cost-300
                         console.log(`Take your extra rupees ${payback} and enjoy your food`);
                     }else{
                         let want=300-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     }
                 }
             }
         }
         else if(food === "2"){
             console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.259");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  259){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>259){
                     let payback = cost-259
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=259-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             } else{
                 console.log("You have to pay Rs.399 for family plate")
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 399){
                     console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                 }else if(cost>399){
                     let payback = cost - 399
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=399-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
         }else{
             console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
             let biryaani = prompt("Enter >> ")
             if(biryaani  == 1){
                 console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                 let pay = Number(prompt("Enter >> "))
                 if(pay == 199){
                     console.log("Here is Your Order sir/mam \n Thanks for visit");
                 }else if(pay > 199){
                     let payback = pay-199
                     console.log(`Take your extra money ${payback}`);
                 }else{
                     let want=199-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }else{
                 if(biryaani  == 2){
                     console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                     let pay = Number(prompt("Enter >> "))
                     if(pay == 299){
                         console.log("Here is Your Order sir/mam \n Thanks for visit");
                     }else if(pay > 299){
                         let payback = pay-299
                         console.log(`Take your extra money ${payback}`);
                     }else{
                         let want=299-pay
                         console.log(`please pay more ${want}`);
                         let paymore =Number(prompt("Enter:"))
                         if(paymore==want){
                             console.log("Thank you, Enjoy your food.");
                         }
                         else if(paymore>want){
                             let giveback = paymore - want
                             console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                         }else{
                             let giveback = want - paymore
                             console.log(`pay more ${giveback}`);
                             let rupees = Number(prompt("enter >> "))
                             if(rupees == giveback){
                                 console.log("Enjoy Your food \nThanks for Visit!!");
                             }else{
                                 console.log("NO Problem !! Come again next time");
                             }
                         }
                     }
             }
         }
 
     }
     
 }else{
     console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
     let food =  prompt("Enter >>  ")
     if (food == "1"){
         console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.149 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==149){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>149){
                 let cost = pay - 149
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=149-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }
     }
     else if(food == "2"){
         console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
             let pay = Number(prompt("Enter >> "))
             if (pay==199){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>199){
                 let cost = pay - 199
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=199-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }else{
         console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.349 for full plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==349){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>349){
                 let cost = pay - 349
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=349-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }
 }
 }
 else if (day=="5"){
    console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
    let time=prompt("Enter:").toLowerCase()
 
     if(time=="1"){
         console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
         let food = prompt("Enter:").toLowerCase()
         if(food=="1"){
             console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
             let quantity = prompt("Enter:").toLowerCase()
             if(quantity=="1"){
                 console.log(`please pay $50 for half plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==50){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>50){
                     let payback=cost-50
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else{
                 console.log(`please pay $100 for full plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==100){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>100){
                     let payback=cost-100
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=100-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }
         }else if(food=="2"){
             console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
             let quantity = prompt("Enter >> ").toLowerCase()
             if(quantity == "1"){
                 console.log("Pay $30 for your half plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 30){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<30){
                     let want=30-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -30
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }else{
                 console.log("Pay $50 for your full plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 50){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<50){
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -50
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }
         }else{
             console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
             let sandw = (prompt("enter >> "))
             if(sandw=="2"){
                 console.log("You have to pay $20 for 2 sandwich");
                 let cost = Number(prompt("Enter >> "))
                 if(cost == 20){
                     console.log("Here is your order !! Enjoy your order");
                 }else if(cost>20){
                     let payback = cost - 20
                     console.log(`Take you return money ${payback} \n Enjoy your food.`);
                 }else{
                     let want=20-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else if(sandwich == "4"){
                 console.log("You have to pay Rs.40 for 4 Sandwich");
                 let pay = Number(prompt("enter >> "))
                 if(pay==40){
                     console.log("You will get your order soon \n Enjoy your meal.");
                 }else  if(pay>40){
                     let payback = pay-40
                     console.log(`Take your extra ${payback}`);
                 }else{
                     let want=40-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
 
         }
     }
     else if(time == "2"){
         console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
         let food = prompt("Enter >> ").toLowerCase()
 
         if(food == "1"){
             console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.159");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  159){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>159){
                     let payback = cost-159
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=159-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
             else{
                 if (quantity == "2"){
                     console.log("You have to pay Rs.300");
                     let cost = Number(prompt("Enter >>"))
                     if (cost ==  300){
                         console.log("your order will be prepared soon \n Thanks for Visit!");
                     }else if(cost>300){
                         let payback = cost-300
                         console.log(`Take your extra rupees ${payback} and enjoy your food`);
                     }else{
                         let want=300-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     }
                 }
             }
         }
         else if(food === "2"){
             console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.259");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  259){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>259){
                     let payback = cost-259
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=259-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             } else{
                 console.log("You have to pay Rs.399 for family plate")
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 399){
                     console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                 }else if(cost>399){
                     let payback = cost - 399
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=399-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
         }else{
             console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
             let biryaani = prompt("Enter >> ")
             if(biryaani  == 1){
                 console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                 let pay = Number(prompt("Enter >> "))
                 if(pay == 199){
                     console.log("Here is Your Order sir/mam \n Thanks for visit");
                 }else if(pay > 199){
                     let payback = pay-199
                     console.log(`Take your extra money ${payback}`);
                 }else{
                     let want=199-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }else{
                 if(biryaani  == 2){
                     console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                     let pay = Number(prompt("Enter >> "))
                     if(pay == 299){
                         console.log("Here is Your Order sir/mam \n Thanks for visit");
                     }else if(pay > 299){
                         let payback = pay-299
                         console.log(`Take your extra money ${payback}`);
                     }else{
                         let want=299-pay
                         console.log(`please pay more ${want}`);
                         let paymore =Number(prompt("Enter:"))
                         if(paymore==want){
                             console.log("Thank you, Enjoy your food.");
                         }
                         else if(paymore>want){
                             let giveback = paymore - want
                             console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                         }else{
                             let giveback = want - paymore
                             console.log(`pay more ${giveback}`);
                             let rupees = Number(prompt("enter >> "))
                             if(rupees == giveback){
                                 console.log("Enjoy Your food \nThanks for Visit!!");
                             }else{
                                 console.log("NO Problem !! Come again next time");
                             }
                         }
                     }
             }
         }
 
     }
     
 }else{
     console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
     let food =  prompt("Enter >>  ")
     if (food == "1"){
         console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.149 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==149){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>149){
                 let cost = pay - 149
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=149-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }
     }
     else if(food == "2"){
         console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
             let pay = Number(prompt("Enter >> "))
             if (pay==199){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>199){
                 let cost = pay - 199
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=199-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }else{
         console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.349 for full plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==349){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>349){
                 let cost = pay - 349
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=349-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }
 }
 }
 else if (day=="6"){
    console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
    let time=prompt("Enter:").toLowerCase()
 
     if(time=="1"){
         console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
         let food = prompt("Enter:").toLowerCase()
         if(food=="1"){
             console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
             let quantity = prompt("Enter:").toLowerCase()
             if(quantity=="1"){
                 console.log(`please pay $50 for half plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==50){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>50){
                     let payback=cost-50
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else{
                 console.log(`please pay $100 for full plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==100){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>100){
                     let payback=cost-100
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=100-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }
         }else if(food=="2"){
             console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
             let quantity = prompt("Enter >> ").toLowerCase()
             if(quantity == "1"){
                 console.log("Pay $30 for your half plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 30){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<30){
                     let want=30-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -30
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }else{
                 console.log("Pay $50 for your full plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 50){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<50){
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -50
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }
         }else{
             console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
             let sandw = (prompt("enter >> "))
             if(sandw=="2"){
                 console.log("You have to pay $20 for 2 sandwich");
                 let cost = Number(prompt("Enter >> "))
                 if(cost == 20){
                     console.log("Here is your order !! Enjoy your order");
                 }else if(cost>20){
                     let payback = cost - 20
                     console.log(`Take you return money ${payback} \n Enjoy your food.`);
                 }else{
                     let want=20-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else if(sandwich == "4"){
                 console.log("You have to pay Rs.40 for 4 Sandwich");
                 let pay = Number(prompt("enter >> "))
                 if(pay==40){
                     console.log("You will get your order soon \n Enjoy your meal.");
                 }else  if(pay>40){
                     let payback = pay-40
                     console.log(`Take your extra ${payback}`);
                 }else{
                     let want=40-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
 
         }
     }
     else if(time == "2"){
         console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
         let food = prompt("Enter >> ").toLowerCase()
 
         if(food == "1"){
             console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.159");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  159){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>159){
                     let payback = cost-159
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=159-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
             else{
                 if (quantity == "2"){
                     console.log("You have to pay Rs.300");
                     let cost = Number(prompt("Enter >>"))
                     if (cost ==  300){
                         console.log("your order will be prepared soon \n Thanks for Visit!");
                     }else if(cost>300){
                         let payback = cost-300
                         console.log(`Take your extra rupees ${payback} and enjoy your food`);
                     }else{
                         let want=300-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     }
                 }
             }
         }
         else if(food === "2"){
             console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.259");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  259){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>259){
                     let payback = cost-259
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=259-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             } else{
                 console.log("You have to pay Rs.399 for family plate")
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 399){
                     console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                 }else if(cost>399){
                     let payback = cost - 399
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=399-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
         }else{
             console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
             let biryaani = prompt("Enter >> ")
             if(biryaani  == 1){
                 console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                 let pay = Number(prompt("Enter >> "))
                 if(pay == 199){
                     console.log("Here is Your Order sir/mam \n Thanks for visit");
                 }else if(pay > 199){
                     let payback = pay-199
                     console.log(`Take your extra money ${payback}`);
                 }else{
                     let want=199-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }else{
                 if(biryaani  == 2){
                     console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                     let pay = Number(prompt("Enter >> "))
                     if(pay == 299){
                         console.log("Here is Your Order sir/mam \n Thanks for visit");
                     }else if(pay > 299){
                         let payback = pay-299
                         console.log(`Take your extra money ${payback}`);
                     }else{
                         let want=299-pay
                         console.log(`please pay more ${want}`);
                         let paymore =Number(prompt("Enter:"))
                         if(paymore==want){
                             console.log("Thank you, Enjoy your food.");
                         }
                         else if(paymore>want){
                             let giveback = paymore - want
                             console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                         }else{
                             let giveback = want - paymore
                             console.log(`pay more ${giveback}`);
                             let rupees = Number(prompt("enter >> "))
                             if(rupees == giveback){
                                 console.log("Enjoy Your food \nThanks for Visit!!");
                             }else{
                                 console.log("NO Problem !! Come again next time");
                             }
                         }
                     }
             }
         }
 
     }
     
 }else{
     console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
     let food =  prompt("Enter >>  ")
     if (food == "1"){
         console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.149 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==149){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>149){
                 let cost = pay - 149
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=149-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }
     }
     else if(food == "2"){
         console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
             let pay = Number(prompt("Enter >> "))
             if (pay==199){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>199){
                 let cost = pay - 199
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=199-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }else{
         console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.349 for full plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==349){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>349){
                 let cost = pay - 349
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=349-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }
 }
 }
 else{
    console.log(`What would you like to have:- \n1:- breakfast \n2:- lunch \n3:- dinner`)
    let time=prompt("Enter:").toLowerCase()
 
     if(time=="1"){
         console.log(`choose your food:- \n 1:- poha \n 2:- maggie \n 3:- sandwiche`)
         let food = prompt("Enter:").toLowerCase()
         if(food=="1"){
             console.log(`choose food quantity- \n 1:- half -- Rs.50 \n 2:- full  -- Rs.100`)
             let quantity = prompt("Enter:").toLowerCase()
             if(quantity=="1"){
                 console.log(`please pay $50 for half plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==50){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>50){
                     let payback=cost-50
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else{
                 console.log(`please pay $100 for full plate poha!`);
                 let cost =Number(prompt("Enter:"))
                 if(cost==100){
                     console.log("Thank you, Enjoy your food.");
                 }else if(cost>100){
                     let payback=cost-100
                     console.log(`please take your return  ${payback},Thank you, Enjoy your food.`);
                     
 
                 }
                 else{
                     let want=100-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }
         }else if(food=="2"){
             console.log("Choose quantity :-\n 1:-half plate  -- Rs.30\n 2:-full plate -- Rs.50 ");
             let quantity = prompt("Enter >> ").toLowerCase()
             if(quantity == "1"){
                 console.log("Pay $30 for your half plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 30){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<30){
                     let want=30-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -30
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }else{
                 console.log("Pay $50 for your full plate maggie ");
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 50){
                     console.log("Your Order is ready!!! Enjoy your maggie")
                 }else if(cost<50){
                     let want=50-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     
                 }else{
                     let want = cost -50
                     console.log(`Take your return ${want} and enjoy your food!!`);
 
                 }
             }
         }else{
             console.log(`How many sandwich do you like to take? \n2 Pieces -- Rs.20 \n4 Pieces -- Rs.40`);
             let sandw = (prompt("enter >> "))
             if(sandw=="2"){
                 console.log("You have to pay $20 for 2 sandwich");
                 let cost = Number(prompt("Enter >> "))
                 if(cost == 20){
                     console.log("Here is your order !! Enjoy your order");
                 }else if(cost>20){
                     let payback = cost - 20
                     console.log(`Take you return money ${payback} \n Enjoy your food.`);
                 }else{
                     let want=20-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
 
             }else if(sandwich == "4"){
                 console.log("You have to pay Rs.40 for 4 Sandwich");
                 let pay = Number(prompt("enter >> "))
                 if(pay==40){
                     console.log("You will get your order soon \n Enjoy your meal.");
                 }else  if(pay>40){
                     let payback = pay-40
                     console.log(`Take your extra ${payback}`);
                 }else{
                     let want=40-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
 
         }
     }
     else if(time == "2"){
         console.log("Here is Your Menu Sir/Mam !! \n 1:- Paneer and roti \n  2:-Veg Thali \n 3:-Biryani")
         let food = prompt("Enter >> ").toLowerCase()
 
         if(food == "1"){
             console.log("Choose quantity \n 1:half plate -- Rs.159 \n 2:-full plate -- Rs.300")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.159");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  159){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>159){
                     let payback = cost-159
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=159-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
             else{
                 if (quantity == "2"){
                     console.log("You have to pay Rs.300");
                     let cost = Number(prompt("Enter >>"))
                     if (cost ==  300){
                         console.log("your order will be prepared soon \n Thanks for Visit!");
                     }else if(cost>300){
                         let payback = cost-300
                         console.log(`Take your extra rupees ${payback} and enjoy your food`);
                     }else{
                         let want=300-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                     }
                 }
             }
         }
         else if(food === "2"){
             console.log("Choose quantity \n 1:Single plate -- Rs.259 \n2:-Family plate -- Rs.399")
             let quantity = prompt("Enter >> ").toLowerCase()
             if (quantity == "1"){
                 console.log("You have to pay Rs.259");
                 let cost = Number(prompt("Enter >>"))
                 if (cost ==  259){
                     console.log("your order will be prepared soon \n Thanks for Visit!");
                 }else if(cost>259){
                     let payback = cost-259
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=259-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             } else{
                 console.log("You have to pay Rs.399 for family plate")
                 let cost = Number(prompt("Enter >> "))
                 if (cost == 399){
                     console.log("Your order will be prepapred soon \n Thanks for Visit!!");
                 }else if(cost>399){
                     let payback = cost - 399
                     console.log(`Take your extra rupees ${payback} and enjoy your food`);
                 }else{
                     let want=399-cost
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }
         }else{
             console.log("Choose the biryani \n 1:- Chicken Biryani -- Rs.199 \n 2:- Mutton Birayni -- Rs.299");
             let biryaani = prompt("Enter >> ")
             if(biryaani  == 1){
                 console.log("Nice Choice \n Please Pay Rs.199 for Chicken biryani");
                 let pay = Number(prompt("Enter >> "))
                 if(pay == 199){
                     console.log("Here is Your Order sir/mam \n Thanks for visit");
                 }else if(pay > 199){
                     let payback = pay-199
                     console.log(`Take your extra money ${payback}`);
                 }else{
                     let want=199-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
                 }
             }else{
                 if(biryaani  == 2){
                     console.log("Nice Choice \n Please Pay Rs.299 for Chicken biryani");
                     let pay = Number(prompt("Enter >> "))
                     if(pay == 299){
                         console.log("Here is Your Order sir/mam \n Thanks for visit");
                     }else if(pay > 299){
                         let payback = pay-299
                         console.log(`Take your extra money ${payback}`);
                     }else{
                         let want=299-pay
                         console.log(`please pay more ${want}`);
                         let paymore =Number(prompt("Enter:"))
                         if(paymore==want){
                             console.log("Thank you, Enjoy your food.");
                         }
                         else if(paymore>want){
                             let giveback = paymore - want
                             console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                         }else{
                             let giveback = want - paymore
                             console.log(`pay more ${giveback}`);
                             let rupees = Number(prompt("enter >> "))
                             if(rupees == giveback){
                                 console.log("Enjoy Your food \nThanks for Visit!!");
                             }else{
                                 console.log("NO Problem !! Come again next time");
                             }
                         }
                     }
             }
         }
 
     }
     
 }else{
     console.log("Here is your Menu sir/Mam \n1:- Veg-Roti \n2:- Matar Paneer + Rice \n3:- Chicken Tandoori");
     let food =  prompt("Enter >>  ")
     if (food == "1"){
         console.log("Choose quantity \n1:-Half plate -- Rs.149 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.149 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==149){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>149){
                 let cost = pay - 149
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=149-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Veg-roti");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                     console.log(`please pay more ${want}`);
                     let paymore =Number(prompt("Enter:"))
                     if(paymore==want){
                         console.log("Thank you, Enjoy your food.");
                     }
                     else if(paymore>want){
                         let giveback = paymore - want
                         console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                     }else{
                         let giveback = want - paymore
                         console.log(`pay more ${giveback}`);
                         let rupees = Number(prompt("enter >> "))
                         if(rupees == giveback){
                             console.log("Enjoy Your food \nThanks for Visit!!");
                         }else{
                             console.log("NO Problem !! Come again next time");
                         }
                     }
             }
         }
     }
     else if(food == "2"){
         console.log("Choose quantity \n1:-Half-plate -- Rs.199 \n2:-Full plate -- Rs.249");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.199 for half plate Matar-Paneer + Ric");
             let pay = Number(prompt("Enter >> "))
             if (pay==199){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>199){
                 let cost = pay - 199
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=199-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.249 for half plate Matar-Paneer +  Rice");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }else{
         console.log("Choose quantity \n1:-Half-plate Chicken -- Rs.249 \n2:-Full-plate Chicken -- Rs.349");
         let quantity = prompt("Enter >> ")
         if(quantity=="1"){
             console.log("You have to pay Rs.249 for half plate Half-Plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==249){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>249){
                 let cost = pay - 249
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=249-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }else{
             console.log("You have to pay Rs.349 for full plate Chicken");
             let pay = Number(prompt("Enter >> "))
             if (pay==349){
                 console.log("Enjoy you dinner \nThanks for visit!!");
 
             }else if(pay>349){
                 let cost = pay - 349
                 console.log(`Take your extra ${cost} rupees `);
             }else{
                 let want=349-pay
                 console.log(`please pay more ${want}`);
                 let paymore =Number(prompt("Enter:"))
                 if(paymore==want){
                     console.log("Thank you, Enjoy your food.");
                 }
                 else if(paymore>want){
                     let giveback = paymore - want
                     console.log(`Take your extra money ${giveback} \nEnjoy Your Food \nThanks for Visit!!`);
                 }else{
                     let giveback = want - paymore
                     console.log(`pay more ${giveback}`);
                     let rupees = Number(prompt("enter >> "))
                     if(rupees == giveback){
                         console.log("Enjoy Your food \nThanks for Visit!!");
                     }else{
                         console.log("NO Problem !! Come again next time");
                     }
                 }
             }
         }
     }
 }
 }
 
 
 
 
 
