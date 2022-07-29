import { Injectable } from "@nestjs/common";
import {Strategy,ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "shriNiwash"  
        })
    }

    validate(payload:any)
    {
        return payload;
    }

}
