const signInService = async (dataGiven) => {
  try {
    console.log('INSIDE SERVICE 1', dataGiven)
    const { data } = await $nuxt.$axios.post(
      '/signin',
      {},
      {
        headers: {
          Authorization: `Basic ${dataGiven}`,
        },
      }
    )
    console.log('INSIDE SERVICE 2', data)
    return data
  } catch (error) {
    throw error
  }
}

const SignUpAction = async (dataGiven) => {
  try {
    console.log('INSIDE SERVICE 1', dataGiven)
    const { data } = await $nuxt.$axios.post(
      '/signup',
      dataGiven
    )
    console.log('INSIDE SERVICE 2', data)
    return data
  } catch (error) {
    throw error
  }
}

const postItem = async (dataGiven) => {
  console.log('INSIDE SERVICE 0', dataGiven)
  try {
    console.log('INSIDE SERVICE 1', dataGiven)
    const { data } = await $nuxt.$axios.post(
      '/post',
      dataGiven.item,
      {
        headers: {
          Authorization: `Bearer ${dataGiven.token}`,
          // "Content-Type": "multipart/form-data",
        },
      }
    )
    console.log('INSIDE SERVICE 2', data)
    return data
  } catch (error) {
    throw error
  }
}

const getListedItems = async() => {
  try {
    const { data } = await $nuxt.$axios.get('/post')
    console.log('INSIDE SERVICE 2', data)
    return data
  } catch (error) {
    throw error
  }
}
export { signInService, SignUpAction, postItem, getListedItems }
