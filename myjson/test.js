Java.perform(function() {
    console.log(`start frida`);

    // https://blog.csdn.net/OrientalGlass/article/details/130903086

    let C17111aLa = Java.use("o.aLa");
    C17111aLa["a"].implementation = function (status) {
        console.log(`C17111aLa.mo45295a is called: status=${status.a.call(status)}`);
        this["a"](status);
    };

    // let aIK = Java.use("o.aIK");
    // aIK["initCompleted"].implementation = function (status) {
    //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
    //     console.log(`aIK.initCompleted is called: status=${status.a.call(status)}`);
    //     this["initCompleted"](status);
    // };

    // p041o.aKI.864


//     let NetflixService = Java.use("com.netflix.mediaclient.service.NetflixService");



//     NetflixService["b"].overload('com.netflix.mediaclient.android.app.Status', 'java.lang.String', 'o.aIK').implementation = function (status, str, aik) {
        
//     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
//         console.log(`NetflixService.m65749b is called: status=${status.a.call(status)}, str=${str}, aik=${aik}`);
//         this["b"](status, str, aik);
//     };

// // NetflixService["c"].overload('java.util.ArrayList', 'o.aIK$e', 'o.aIK$e').implementation = function (arrayList, interfaceC9015e, interfaceC9015e2) {
    
// //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
// //     console.log(`NetflixService.m65735c is called: arrayList=${arrayList}, interfaceC9015e=${interfaceC9015e}, interfaceC9015e2=${interfaceC9015e2}`);
// //     let result = this["c"](arrayList, interfaceC9015e, interfaceC9015e2);
// //     console.log(`NetflixService.m65735c result=${result}`);
// //     return result;
// // };


//     let C7022LY = Java.use("o.LY");
//     C7022LY["d"].overload('com.netflix.mediaclient.android.activity.NetflixActivity', 'com.netflix.mediaclient.android.app.Status').implementation = function (netflixActivity, status) {
//      // 将status对象转换为其实际类型
//      let actualStatus = Java.cast(status, Java.use("com.netflix.mediaclient.android.app.Status"));

//      // 获取对象的所有属性名称
//      let propertyNames = Object.getOwnPropertyNames(actualStatus);

//      // 打印每个属性的名称和值
//      for (let i = 0; i < propertyNames.length; i++) {
//          let propertyName = propertyNames[i];
//          let propertyValue = actualStatus[propertyName];
//                 // 如果属性值是函数类型，则调用该函数并获取返回值
//                 if (typeof propertyValue === 'function') {
//                     let returnValue = propertyValue.call(actualStatus);
//                     console.log(`${propertyName}: ${returnValue}`);
//                 } else {
//                     console.log(`${propertyName}: ${propertyValue}`);
//                 }
//      }
//         console.log(`C7022LY.m51819d is called: netflixActivity=${netflixActivity}, status=${status.a.call(status)}`);
//         console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));

//         let result = this["d"](netflixActivity, status);

//         console.log(`C7022LY.m51819d result=${result}`);
//         return result;
//     };



});