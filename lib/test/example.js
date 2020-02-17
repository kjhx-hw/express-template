const supertest = require('supertest');
const { expect } = require('chai');
const cheerio = require('cheerio');

const config = require('../config');
config.logLevel = null;
const { app } = require('../app');

describe('Homepage', () => {

    it('should have a homepage', () => {
        return supertest(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /^text\/html/);
    });

    it('should say COMP 4310', () => {
        return supertest(app)
            .get('/')
            .then(res => {
                expect(res.text).to.match(/COMP 4310/i);
            });
    });

});