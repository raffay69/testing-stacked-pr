console.log("this is the main file")

function willBeUsedByFeature2(){
    console.log("please use me feature 2")
}

willBeUsedByFeature2()

function feature3(){
    willBeUsedByFeature2()
}

feature3()