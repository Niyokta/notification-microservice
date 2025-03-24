import Redis from "ioredis";

export class RedisClientConfig{
    private static instance:RedisClientConfig;
    private redis=new Redis();
    private publisher= Redis.createClient();

    private constructor(){
        this.publisher.connect();
    }

    public static getInstance(){
        if(!this.instance){
            this.instance=new RedisClientConfig();
        }
        return this.instance;
    }

    getPublisherInstance(){
        return this.publisher;
    }
    getRedisInstance(){
        return this.redis;
    }

    async publishMessage(queueName:string,message:any){
        await this.publisher.lpush(queueName,JSON.stringify(message))
    }
}