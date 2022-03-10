'use strict'

//API outputs

const single = (resource, authClient)=>({
    name: resource.name,
    email: resource.email
})

module.exports = {
    single
}