import Application from 'blue-eyes/app';
import config from 'blue-eyes/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
