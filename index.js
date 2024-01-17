const cart = [{ id: 1, name: 'Macbook' }];
// createOrder(cart)
//   .then(function ({ orderId }) {
//     console.log('1: ', { orderId });
//     return orderId;
//   })
//   .then(function (orderId) {
//     console.log('2: ', { orderId });
//     return cartIsValid(orderId);
//   })
//   .catch(function (error) {
//     console.log('TOP:', error);
//   })
//   .then(function (orderId) {
//     console.log('3: ', orderId);
//     return proceedToCheckout(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (error) {
//     console.log('last:', error);
//   });

// const p = createOrder(cart);
// p.then((data) => console.log('===', data.orderId));
// console.log(p);

// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     const orderId = cart[0].id;
//     setTimeout(() => {
//       resolve({ orderId });
//       reject('Can not create order. Please try again.');
//     }, 1000);
//   });
// }

// function proceedToCheckout(id) {
//   // console.log('id: ', id);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Payment Successfull');
//       reject('Can not proceed your order. Please try again.');
//     }, 1000);
//   });
// }

// function cartIsValid(id) {
//   // console.log('id: ', id);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Cart is valid.');
//       reject('Cart is not valid. Please try again.');
//     }, 1000);
//   });
// }

// function testAsyncAwit(id) {
//   // console.log('id: ', id);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ res: 'Async Await Success.' });
//       reject('Async Await Rejected.');
//     }, 5000);
//   });
// }
// function testAsyncAwit2(id) {
//   // console.log('id: ', id);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ res: 'Async Await Success.' });
//       reject('Async Await Rejected.');
//     }, 2000);
//   });
// }

// async function callTestAsyncAwit() {
//   console.log('start');
//   const res = await testAsyncAwit();
//   console.log('hello ', res);
//   const res2 = await testAsyncAwit2();
//   console.log('hello  1', res2);
//   return res;
// }

// callTestAsyncAwit();

// const apiUrl = 'https://api.github.com/users/FarhanGalib';

// async function handlePromise() {
//   const responseObject = await fetch(apiUrl);
//   const data = await responseObject
//     .blob()
//     .then((res) => res.text().then((res) => JSON.parse(res)));

//   console.log(data);
//   // const jsonObject = await responseObject.json();
//   // console.log(jsonObject);
// }
// handlePromise();

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('p1 success');
    reject('p1 Failed');
  }, 2000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('p2 success');
    reject('p2 Failed');
  }, 5000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('p3 success');
    reject('p3 Failed');
  }, 1000);
});

Promise.any([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
    console.error(err.errors);
  });
