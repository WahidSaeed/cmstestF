export const config = {
    apiKey: "AIzaSyAycb3T43adv-uGvs2-eBi7538ofwOQ3d8",
    authDomain: "testcms-81e9f.firebaseapp.com",
    databaseURL: "https://testcms-81e9f.firebaseio.com",
    projectId: "testcms-81e9f",
    storageBucket: "testcms-81e9f.appspot.com",
    messagingSenderId: "203002218631"
};


/*export function savePost(prop) {

    firebase.initializeApp(config);
    //var database = firebase.database();

    firebase.database().ref('Posts').set({
        ID: prop.Title.replace(/ /g, "-"),
        Title: prop.Title,
        Description: prop.Description,
        Status: true
    });

    return true;
}

export function getPosts() {
    firebase.initializeApp(config);
    //console.log(firebase.database().ref('Post'));
    var Posts = {};
    firebase.database().ref('/Post/').once('value').then(function (snapshot) {
        Posts = snapshot.val();
        console.log(snapshot.val());
    });
    return Posts;
}*/