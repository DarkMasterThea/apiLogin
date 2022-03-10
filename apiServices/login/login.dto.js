'use strict'

//API outputs

const single = (resource, authClient)=>({
    id: resource.id,
    name: resource.fullname,
    email: resource.username
})

module.exports = {
    single
}