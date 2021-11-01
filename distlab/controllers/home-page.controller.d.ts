/// <reference types="express" />
import { Response } from '@loopback/rest';
export declare class HomePageController {
    private readonly response;
    private readonly html;
    constructor(response: Response);
    homePage(): Response<any, Record<string, any>>;
}
