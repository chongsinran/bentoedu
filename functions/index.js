const functions = require('firebase-functions');
const admin = require('firebase-admin');


var serviceAccount = require("./service.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bentogram-g06-21.firebaseio.com"

});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.keywordGenerator = functions.database.ref('userstest/{pushId}/name')
    .onWrite((snapshot, context) => {
        console.log(snapshot.after.val())
        var str = snapshot.after.val()
        var splitlist = [];
        //console.log(str.split(' '))
        var strarr = str.split(' ')
        var word = ''

        var ok = []
        for (var z = 0; z < strarr.length; z++) {
            for (var x = z; x < strarr.length; x++) {
                word = ""
                for (var y = z; y <= x; y++) {
                    if(word){
                        word = strarr[strarr.length - 1 - y] + " " + word
                    }else{
                        word = strarr[strarr.length - 1 - y]
                    }
                    

                }
                console.log(word)
                ok.push(word)
            }
            console.log(ok)
        }
        var docRef = admin.firestore().collection('userstest').doc(context.params.pushId);
        docRef.set({
            name: snapshot.after.val(),
            keywords:ok
          },{merge:false})
        return snapshot.after.ref.parent.child('keywords').set(ok)
    })