// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const {generateToken}= require("./generate");

fastify.register(require('fastify-cors'), { 
  origin:"*",
  methods:['post']
})

// Declare a route
fastify.post('/generate-token', async (request, reply) => {
    const appId=request.body.appId;
    const type=request.body.type;
    const ip=request.body.ip;
    const token=generateToken(appId,type,ip);
   
    if(token){
            reply.status(200).send({token});
        }
        else{
    
            reply.status(500).send({error:'Error generating the token'});
        }
    
    
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3003)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
