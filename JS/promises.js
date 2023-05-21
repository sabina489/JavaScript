// Create a promise
const promise2 = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
      console.log('sdffdg');
      resolve();
    }, 1000);
  });
  
  // promise.then(() => {
  //   console.log('Promise consumed..');
  // });

  // console.log("hello javascript");

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let learn = false;

      if(!learn) {
        resolve({name:'sabina', age:12})
      } else {
        reject('Error:flasdfg');
      }
    },1000)
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let learn = false;

      if(!learn) {
        resolve({name:'ddafgre', age:19})
      } else {
        reject('Error:flasdfg');
      }
    },1000)
  });

  // promise
  //   .then((user)=>{
  //     console.log(user);
  //   })

  //   .catch((error)=>console.log(error));
  //  .finally(() => console.log("The promise has been resolved."))

  
// promise.all
Promise.all([promise2,promise1,promise3])
    .then((user)=>{
      console.log(user)
    })

    .catch((error)=>console.log(error));

