
// document.write('mkmkmkmk');
// const span = document.createElement('span');
// span.innerHTML = '123123';
// document.body.appendChild(span);
// expectFrame('mytest1')


// registTestEnv({
//   name: 'basicTest',
//   onPageLoad: () => {
//     expectFrame()
//   }
// })

describe('test decription', async () => {
  const span = document.createElement('span');
  await expectFrame('mytest1');
  await frameLog('screen1');
  span.innerHTML = '123123';
  document.body.appendChild(span);
  await frameLog('screen2');
  await frameLog('screen3');
  await expectFrame('mytest2');
})

// describe('test decription', 'sddssdds')