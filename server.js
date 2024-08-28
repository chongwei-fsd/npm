'use strict'

const express=require('express')

const port=8080
const host='127.0.0.1'
const OS=require('os')
const ENV='DEV'

const app=express()

app.get('/',(req,res)=>{
    const msg='Hello FSD learner!'
    res.status(200).send(`${msg}`)
    
})

app.get('/test',(req,res)=>{
    const msg='Hello from /test node!'
    res.status(200).send(`${msg}`)
    
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    console.log(OS.platform())
})