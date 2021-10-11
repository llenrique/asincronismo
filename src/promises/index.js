const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey!')
    } else {
      reject('Something went wrong')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err))


somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const err = new Error('Something went wrong')
      reject(err)
    }
  })
}


somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Resultados: ', response)
  })
  .catch(err => {
    console.log('errores', err)
  })