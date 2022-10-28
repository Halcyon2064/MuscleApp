

let body = document.querySelector("body")
let backbutton = document.getElementById("dropdownMenuButton4")
let backdrop = document.getElementById("drop4")
let legdrop = document.getElementById("drop5")
let completedcontainer = document.getElementById("comp")

let chestbtn = document.getElementById("dropdownMenuButton1")
let chestins = document.getElementById("chestins")
let chestimg = document.getElementById("chestimg")

let absbtn = document.getElementById("dropdownMenuButton2")
let absins = document.getElementById("abins")
let absimg = document.getElementById("abimg")

let armsbtn = document.getElementById("dropdownMenuButton3")
let armsins = document.getElementById("armsins")
let armsimg = document.getElementById("armsimg")

let backbtn = document.getElementById("dropdownMenuButton4")
let backins = document.getElementById("backins")
let backimg = document.getElementById("backimg")

let legsbtn = document.getElementById("dropdownMenuButton5")
let legsins = document.getElementById("legsins")
let legsimg = document.getElementById("legsimg")

let completer1 = document.querySelector(".completer1")
let completer2 = document.querySelector(".completer2")
let completer3 = document.querySelector(".completer3")
let completer4 = document.querySelector(".completer4")
let completer5 = document.querySelector(".completer5")

let unfinished = document.getElementById("unfinished")



function transporter(completer) {
    
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




if ( (document.documentElement.scrollHeight) <800 || (document.documentElement.scrollWidth) <1400 ){ backdrop.className = "dropdown"
console.log("hi")}
if ( (window.innerHeight) <750 && (document.documentElement.scrollWidth) <400 ){ legdrop.className = "dropdown"
console.log("oi")}


if  (document.documentElement.scrollHeight <750){
    console.log('hi2')
}
if  (document.documentElement.scrollWidth <400){
    console.log('hi3')
}

console.log(window.innerHeight)

let printer = (number) =>{
    console.log(number.parentNode.innerHeight)
}


function exerciser(){
    let randomNum = RandomNumber(0, 2)
    chestbtn.textContent = `${exerciseArray[randomNum].name}`
    chestins.textContent = `${exerciseArray[randomNum].description}`
    chestimg.src=`${exerciseArray[randomNum].image}`

    let randomNum2 = RandomNumber(3, 5)
    absbtn.textContent = `${exerciseArray[randomNum2].name}`
    absins.textContent = `${exerciseArray[randomNum2].description}`
    absimg.src=`${exerciseArray[randomNum2].image}`

    let randomNum3 = RandomNumber(6, 8)
    armsbtn.textContent = `${exerciseArray[randomNum3].name}`
    armsins.textContent = `${exerciseArray[randomNum3].description}`
    armsimg.src=`${exerciseArray[randomNum3].image}`

    let randomNum4 = RandomNumber(9, 11)
    backbtn.textContent = `${exerciseArray[randomNum4].name}`
    backins.textContent = `${exerciseArray[randomNum4].description}`
    backimg.src = `${exerciseArray[randomNum4].image}`

    let randomNum5 = RandomNumber(12, 14)
    legsbtn.textContent = `${exerciseArray[randomNum5].name}`
    legsins.textContent = `${exerciseArray[randomNum5].description}`
    legsimg.src = `${exerciseArray[randomNum5].image}`
}


window.onload = exerciser
function completedchecker(){
    if(unfinished.childElementCount<2){
        let message = document.createElement("h3")
        message.textContent = 'Congratulations on finishing all exercises! Please reload the page if you wish to train again'
        unfinished.appendChild(message)
        console.log("wow")
    }

}

    


document.querySelector(".completer1").addEventListener('click', function transporter(){
    completedcontainer.appendChild(document.querySelector(".chestdrop"))
    completedchecker()
    
})

document.querySelector(".completer2").addEventListener('click', function transporter(){
    completedcontainer.appendChild(document.querySelector(".abdrop"))
    completedchecker()
    })

document.querySelector(".completer3").addEventListener('click', function transporter(){
    completedcontainer.appendChild(document.querySelector(".armdrop"))
    completedchecker()
     
})

document.querySelector(".completer4").addEventListener('click', function transporter(){
    completedcontainer.appendChild(document.querySelector("#drop4"))
    completedchecker()
    
})

document.querySelector(".completer5").addEventListener('click', function transporter(){
    completedcontainer.appendChild(document.querySelector("#drop5"))
    completedchecker()
    })




























































































































//Need a better solution later.
let exerciseArray = [
    { 
        id: "1",
        name: "Decline press-up",
        body_part: "Chest",
        description: "Place your feet on a bench with your hands planted on the floor in front of you. Lower your body down. Press your body back up to the starting position while squeezing your chest.",
        image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/feetelevatedpushup-1457047025.gif?crop=1xw:1xh;center,top&resize=640:*"
    },
    { 
        id: "2",
        name: "Clap press-up",
        body_part: "Chest",
        description: "Get into a push-up position, your body forming a straight line from head to heels. Lower your chest to the floor and then press up explosively so your hands come off the floor, clapping once at the top of the movement.",
        image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/slowclap.gif?resize=480:*"
    },
    { 
        id: "3",
        name: "Staggered press-up",
        body_part: "Chest",
        description: "Get into a press-up position with your hands staggered, so your right is further forward then the left. Lower your body until your chest is an inch from the ground then drive up explosively. Pull your hands off the floor and switch positions so your left leads, then repeat.",
        image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/how-to-do-a-staggered-press-up.gif?resize=480:*"
    },
    { 
        id: "4",
        name: "Cocoon",
        body_part: "Abdominals",
        description: "Lay flat on your back with your arms extended behind your head and your feet slightly off the ground. Pull your knees towards your chest, lift your backside off the floor and lift your arms over your head as you perform a crunch and repeat",
        image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/cocoon4.gif?resize=480:*"
    },
    { 
        id: "5",
        name: "Sandbag sit up",
        body_part: "Abdominals",
        description: "Lie with your back on the ground and you knees bent upwards. Hold a sandbag up above you with both extended arms and crunch forwards as you tense your core so your body performs a V shape with your thighs. Carefully lower down and repeat.",
        image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/thumbs/33969/sandbag-sit-up.jpg?resize=480:*"
    },
    { 
        id: "6",
        name: "Russian twists",
        body_part: "Abdominals",
        description: "Sit holding the weight plate, dumbbell or kettlebell with your arms extended and feet off the floor. Under control, quickly twist at the torso, turning from side to side.",
        image: "https://www.stack.com/wp-content/uploads/2020/08/russian-twist-3.gif"
    },
    { 
        id: "7",
        name: "Concentration curl",
        body_part: "Arms",
        description: "Sit down on the bench and rest your right arm against your right leg, letting the weight hang down. Curl the weight up, pause, and then lower. Repeat with the other arm.",
        image: "https://www.indianbodybuilding.co.in/wp-content/uploads/2014/11/Biceps-Concentration-Curl-Workout-Movement.gif"
    },
    { 
        id: "8",
        name: "Twisting Dumbbell Curl",
        body_part: "Arms",
        description: "Hold a dumbbell in each hand at your side with palms facing each other. Use your bicep to curl the dumbbells up to your shoulders, twisting your palms to face your chest as you lift them. Slowly lower the dumbbells back down to your side and repeat.",
        image: "https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif"
    },
    { 
        id: "9",
        name: "Diamon Press up",
        body_part: "Arms",
        description: "Lie on the floor with your body straight and form a diamond shape with your hands. Lower your body down until your chest is almost touching the floor. Press your body back up to the starting position, squeezing your triceps and chest at the same time.",
        image: "https://seven.app/media/images/Diamond-Push-Up.gif"
    },
    { 
        id: "10",
        name: "Pull-up",
        body_part: "Back",
        description: "Grab the ull-up station with your palms facing away from you and your arms fully extended. Your hands should be around shoulder-width apart. Squeeze your shoulder blades together, exhale and drive your elbows towards your hips to bring your chin above the bar. Lower under control back to the start position.",
        image: "https://static.wixstatic.com/media/7df78f_645bf1cba0c34052a6661b30b7886be1~mv2.gif"
    },
    { 
        id: "11",
        name: "Pulldowns",
        body_part: "Back",
        description: "Grab the bar with your palms facing away from you, shoulder-width apart. Lean back slightly and push your chest out. Pull the bar down to your chest, then return slowly to the start position. Your torso should remain still throughout.",
        image: "https://thumbs.gfycat.com/ResponsibleThunderousCrayfish-max-1mb.gif"
    },
    { 
        id: "12",
        name: "Kettlebell Swings",
        body_part: "Back",
        description: "Place a kettlebell a couple of feet in front of you. Stand with your feet slightly wider than shoulder-width apart and bend your knees to lean forward and grab the  hands. With your back flat, engage your lats to pull the weight between your legs (be careful with how deep you swing) then drive your hips forward and explosively pull the kettlebell up to shoulder height with your arms straight in front of you. Return to the start position and repeat without pauses.",
        image: "https://media.self.com/photos/57f56a56343e42714470e20d/master/w_1600%2Cc_limit/kettlebell-swing.gif"
    },
    { 
        id: "13",
        name: "Front Squat",
        body_part: "Legs",
        description: "Set a barbell on a power rack at about shoulder height. Grab the power with an overhand grip at shoulder width and raise your elbows until your upper arms are parallel to the floor. Take the bar out of the rack and let it rest on your fingertips. Your elbows should be all the way up throughout the movement. Step back and set your feet at shoulder width with toes turned out slightly. Squat as low as you can without losing the arch in your lower back.",
        image: "https://www.mensjournal.com/wp-content/uploads/mf/_main_frontsquat_1.jpg?w=800&quality=86&strip=all"
    },
    { 
        id: "14",
        name: "Deadlift",
        body_part: "Legs",
        description: "Hold a barbell with a shoulder-width grip and stand with feet hip-width apart. Bend your hips back as far as you can. Allow your knees to bend as needed while you lower the bar along your shins until you feel a stretch in your hamstrings. Keep your lower back in its natural arched position throughout.",
        image: "https://media.tenor.com/TXC6tjVjIywAAAAC/workouts-deadlift.gif"
    },
    { 
        id: "15",
        name: "Leg press",
        body_part: "Legs",
        description: "Adjust the seat of the machine so that you can sit comfortably with your hips beneath your knees and your knees in line with your feet. Remove the safeties and lower your knees toward your chest until they’re bent 90 degrees and then press back up. Be careful not to go too low or you risk your lower back coming off the seat (which can cause injury).",
        image: "https://www.mensjournal.com/wp-content/uploads/mf/_main_legpress.jpg?w=800&quality=86&strip=all"
    }
]