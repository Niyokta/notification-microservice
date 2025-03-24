import Redis from "ioredis";


export class RedisClientConfig{
    private static instance:RedisClientConfig;
    private subscriber=new Redis();

    public static getInstance(){
        if(!this.instance){
            this.instance=new RedisClientConfig();
        }
        return this.instance;
    }

    private constructor(){}

    getSubscriberInstance(){
        return this.subscriber;
    }

    async RemoveFromQueue():Promise<string | null>{
        try{
            const message=await this.subscriber.brpop("emailqueue",0);
            if(message)return message[1];
            return null
        }
        catch(err){
            console.log("error while removing from queue : ",err);
            return null
        }
    }
}