
async function fnc(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var d = parseFloat(document.getElementById("d").value);
    const model = await tf.loadLayersModel("https://efjjokull.github.io/hellogit/iris/model/model.json");
    const input = tf.tensor([a,b,c,d]);
    let prediction = await model.predict(tf.reshape(input,[1,4])).data();

    console.log(a,b,c,d);
    alert("setosa : "+Math.round(prediction[0]*100)+"%\n"+"versicolor : "+Math.round(prediction[1]*100)
    +"%\n"+"virginica : "+Math.round(prediction[2]*100)+"%\n");
}

async function load_Model(){
    const model = await tf.loadLayersModel("https://efjjokull.github.io/hellogit/iris/model/model.json");
}
