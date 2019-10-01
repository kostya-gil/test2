import $ from 'jquery';
import feedback from '../blocks/feedback/feedback.js';
import linfo from '../blocks/linfo/linfo.js';
import masters from '../blocks/masters/masters.js';
import examples from '../blocks/examples/examples.js';
import header from '../blocks/header/header.js';

$(() => {
	feedback();
	linfo();
	masters();
	examples();
	header();
});
