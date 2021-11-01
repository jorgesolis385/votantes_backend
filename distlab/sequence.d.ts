import { FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceHandler } from '@loopback/rest';
import { AuthenticateFn } from 'loopback4-authentication';
import { AuthorizeFn } from 'loopback4-authorization';
import { AuthClient } from './models';
import { AuthUser } from './modules/auth';
export declare class MySequence implements SequenceHandler {
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    protected authenticateRequest: AuthenticateFn<AuthUser>;
    protected authenticateRequestClient: AuthenticateFn<AuthClient>;
    protected checkAuthorisation: AuthorizeFn;
    constructor(findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject, authenticateRequest: AuthenticateFn<AuthUser>, authenticateRequestClient: AuthenticateFn<AuthClient>, checkAuthorisation: AuthorizeFn);
    handle(context: RequestContext): Promise<void>;
}
