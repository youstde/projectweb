import createAPI from './createAPI'

export const getAll = async (params = {}) =>
  createAPI('/api/group/getAll', 'get', {
    params
  })
