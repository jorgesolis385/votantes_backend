"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const repositories_1 = require("../../repositories");
describe('User Controller', () => {
    let app;
    let client;
    let userRepo;
    let tenantRepository;
    let roleRepository;
    before('setupApplication', async () => {
        ({ app, client } = await test_helper_1.setupApplication());
    });
    before(givenRepositories);
    afterEach(deleteMockData);
    after(async () => {
        await app.stop();
    });
    it('gives status 422 when data sent is incorrect', async () => {
        const reqData = {};
        const response = await client.post(`/users`).send(reqData).expect(422);
        testlab_1.expect(response).to.have.property('error');
    });
    it('gives status 401 when no token is passed', async () => {
        const response = await client.get(`/users`).expect(401);
        testlab_1.expect(response).to.have.property('error');
    });
    it('gives status 200 when token is passed', async () => {
        const testUser = {
            id: 1,
            username: 'test_user',
            password: 'test_password',
            permissions: [
                'CreateAnyUser',
                'UpdateAnyUser',
                'ViewAnyUser',
                'ViewAnyUser',
            ],
        };
        const token = jwt.sign(testUser, process.env.JWT_SECRET, {
            expiresIn: 180000,
            issuer: process.env.JWT_ISSUER,
        });
        await client
            .get(`/users`)
            .set('authorization', `Bearer ${token}`)
            .expect(200);
    });
    it('gives status 422 when user details are not correct', async () => {
        const testUser = {
            id: 1,
            username: 'test_user',
            password: 'test_password',
            permissions: [
                'CreateAnyUser',
                'UpdateAnyUser',
                'ViewAnyUser',
                'DeleteAnyUser',
            ],
        };
        const token = jwt.sign(testUser, process.env.JWT_SECRET, {
            expiresIn: 180000,
            issuer: process.env.JWT_ISSUER,
        });
        const userToAdd = {};
        await client
            .post(`/users`)
            .set('authorization', `Bearer ${token}`)
            .send(userToAdd)
            .expect(422);
    });
    it('gives status 200 and user details when user is added', async () => {
        const token = await getToken();
        const reqToAddUser = await postUser(token);
        testlab_1.expect(reqToAddUser.status).to.be.equal(200);
        const response = await client
            .get(`/users/${reqToAddUser.body.id}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200);
        testlab_1.expect(response.body).to.have.properties([
            'username',
            'phone',
            'firstName',
        ]);
        testlab_1.expect(response.body.username).to.be.equal('test_number');
    });
    it('updates user successfully', async () => {
        const token = await getToken();
        const reqToAddUser = await postUser(token);
        const userToUpdate = {
            firstName: 'New Test',
            lastName: 'User',
            username: 'number',
            phone: '9898989898',
            defaultTenant: 1,
        };
        await client
            .put(`/users/${reqToAddUser.body.id}`)
            .set('authorization', `Bearer ${token}`)
            .send(userToUpdate)
            .expect(204);
        const response = await client
            .get(`/users/${reqToAddUser.body.id}`)
            .set('authorization', `Bearer ${token}`)
            .expect(200);
        testlab_1.expect(response.body).to.have.properties([
            'username',
            'phone',
            'firstName',
        ]);
        testlab_1.expect(response.body.username).to.be.equal('number');
    });
    it('deletes a user successfully', async () => {
        const token = await getToken();
        const reqToAddUser = await postUser(token);
        await client
            .del(`/users/${reqToAddUser.body.id}`)
            .set('authorization', `Bearer ${token}`)
            .expect(204);
    });
    it('should return count', async () => {
        const token = await getToken();
        await client
            .get(`/users/count`)
            .set('authorization', `Bearer ${token}`)
            .expect(200);
    });
    async function getToken() {
        const testUser = {
            id: 1,
            username: 'test_user',
            password: 'test_password',
            permissions: [
                'CreateAnyUser',
                'UpdateAnyUser',
                'ViewAnyUser',
                'DeleteAnyUser',
            ],
        };
        const token = jwt.sign(testUser, process.env.JWT_SECRET, {
            expiresIn: 180000,
            issuer: process.env.JWT_ISSUER,
        });
        return token;
    }
    async function postUser(token) {
        await roleRepository.createAll([
            {
                id: 1,
                name: 'super_admin',
                roleKey: 1 /* SuperAdmin */,
                permissions: [
                    'canLoginToIPS',
                    'ViewOwnUser',
                    'ViewAnyUser',
                    'ViewTenantUser',
                    'CreateAnyUser',
                    'CreateTenantUser',
                    'UpdateOwnUser',
                    'UpdateTenantUser',
                    'UpdateAnyUser',
                    'DeleteTenantUser',
                    'DeleteAnyUser',
                    'ViewTenant',
                    'CreateTenant',
                    'UpdateTenant',
                    'DeleteTenant',
                    'ViewRole',
                    'CreateRole',
                    'UpdateRole',
                    'DeleteRole',
                    'ViewAudit',
                    'CreateAudit',
                    'UpdateAudit',
                    'DeleteAudit',
                ],
            },
            {
                id: 2,
                name: 'admin',
                roleKey: 2 /* Admin */,
                permissions: [
                    'ViewOwnUser',
                    'ViewTenantUser',
                    'CreateTenantUser',
                    'UpdateOwnUser',
                    'UpdateTenantUser',
                    'DeleteTenantUser',
                    'ViewTenant',
                    'ViewRole',
                ],
            },
        ]);
        await tenantRepository.create({
            id: 1,
            name: 'application',
            type: "application" /* APPLICATION */,
        });
        const userToAdd = {
            id: 1,
            firstName: 'Test',
            lastName: 'User',
            username: 'test_number',
            phone: '9898989898',
            defaultTenant: 1,
        };
        const reqToAddUser = await client
            .post(`/users`)
            .set('authorization', `Bearer ${token}`)
            .send(userToAdd);
        return reqToAddUser;
    }
    async function deleteMockData() {
        await userRepo.deleteAllHard();
        await roleRepository.deleteAllHard();
        await tenantRepository.deleteAllHard();
    }
    async function givenRepositories() {
        userRepo = await app.getRepository(repositories_1.UserRepository);
        roleRepository = await app.getRepository(repositories_1.RoleRepository);
        tenantRepository = await app.getRepository(repositories_1.TenantRepository);
    }
});
//# sourceMappingURL=user.controller.acceptance.js.map